import {
  ChangeDetectionStrategy, Component, EventEmitter,
  Input,
  OnDestroy, OnInit, Output
} from '@angular/core';
import {
  FormBuilder, FormGroup
} from '@angular/forms';
import { Subscription } from 'rxjs';
import { debounceTime, distinctUntilChanged, filter } from 'rxjs/operators';
import { QueryableResource } from '../models/queryable-resource';
import { Resource } from '../models/resource';
import { resourceIds } from '../queryable-resource.service';
import { requestInformationForms, RequestInformationForms } from './request-information-forms';

@Component({
  selector: 'rsrch-request-information',
  templateUrl: './request-information.component.html',
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RequestInformationComponent implements OnInit, OnDestroy {
  @Input() requestInfoOptions!: { queryableResource: QueryableResource; resource: Resource; };
  @Output() send = new EventEmitter<{ search: string }>();
  form!: FormGroup;

  formElementsInfo: requestInformationForms[] = [];

  private requestInformationForms = new RequestInformationForms();
  private subscriptions$: Subscription = new Subscription();

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    const resourceId = this.requestInfoOptions.queryableResource.id as resourceIds;
    this.formElementsInfo = this.requestInformationForms.getFormGroup(resourceId);
    this.form = this.fb.group(this.extractControlsConfig(this.formElementsInfo));
    this.subscriptions$.add(
      this.form.valueChanges
        .pipe(filter(() => this.form.valid), debounceTime(400), distinctUntilChanged())
        .subscribe((formChanged) => {
          this.send.emit(formChanged)
        })
    );
  }

  ngOnDestroy(): void {
    this.subscriptions$.unsubscribe();
  }

  private extractControlsConfig(forms2Work: requestInformationForms[]) {
    return forms2Work.reduce((prev, next) => ({...prev, [next.name]: next.formControl}), {});
  }
}
