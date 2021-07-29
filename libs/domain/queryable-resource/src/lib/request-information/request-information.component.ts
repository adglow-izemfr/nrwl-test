import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  OnDestroy,
  OnInit,
  Output,
} from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Subscription } from 'rxjs';
import {
  debounceTime,
  distinctUntilChanged,
  filter,
  tap,
} from 'rxjs/operators';
import { QueryableResource } from '../models/queryable-resource';
import { Resource } from '../models/resource';
import { resourceIds } from '../queryable-resource.service';
import {
  requestInformationForms,
  RequestInformationForms,
} from './request-information-forms';

@Component({
  selector: 'rsrch-request-information',
  templateUrl: './request-information.component.html',
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RequestInformationComponent implements OnInit, OnDestroy {
  @Input() requestInfoOptions!: {
    queryableResource: QueryableResource;
    resource: Resource;
  };
  @Output() send = new EventEmitter<{ [key: string]: string }>();
  form!: FormGroup;

  formElementsInfo: requestInformationForms[] = [];

  private requestInformationForms = new RequestInformationForms();
  private subscriptions$: Subscription = new Subscription();

  constructor(
    private fb: FormBuilder,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  ngOnInit(): void {
    const resourceId = this.requestInfoOptions.queryableResource
      .id as resourceIds;
    this.formElementsInfo = this.requestInformationForms.getFormGroup(
      resourceId
    );
    this.form = this.fb.group(
      this.extractControlsConfig(this.formElementsInfo)
    );
    this.setInitialValuesFromQueryParams(this.form, this.route);
    this.subscriptions$.add(
      this.form.valueChanges
        .pipe(
          tap((formData) => this.updateQueryParams(formData)),
          filter(() => this.form.valid),
          debounceTime(400),
          distinctUntilChanged()
        )
        .subscribe((formData) => {
          this.send.emit(formData);
        })
    );
    this.form.valid ? this.send.emit(this.form.value) : this.send.emit({});
    if (this.form.value) this.updateQueryParams(this.form.value);
  }

  ngOnDestroy(): void {
    this.subscriptions$.unsubscribe();
  }

  setInitialValuesFromQueryParams(form: FormGroup, route: ActivatedRoute) {
    const queryParamMap = route.snapshot.queryParamMap;

    Object.entries(form.controls).reduce(
      (prev, [nextKey, nextValue]) => ({
        ...prev,
        [nextKey]: queryParamMap.get(nextKey)
          ? nextValue.patchValue(queryParamMap.get(nextKey))
          : nextValue,
      }),
      {}
    );
  }

  updateQueryParams(params: { [key: string]: string }) {
    const cleanParams = Object.entries(params)
      .filter(([, value]) => value)
      .reduce((prev, [key, value]) => ({ ...prev, [key]: value }), {});

    this.router.navigate([], {
      relativeTo: this.route,
      queryParams: cleanParams,
      queryParamsHandling: 'merge',
    });
  }

  private extractControlsConfig(forms2Work: requestInformationForms[]) {
    return forms2Work.reduce(
      (prev, next) => ({ ...prev, [next.name]: next.formControl }),
      {}
    );
  }
}
