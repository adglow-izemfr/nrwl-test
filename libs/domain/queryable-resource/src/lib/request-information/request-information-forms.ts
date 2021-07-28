import { AbstractControl, ValidationErrors, Validators } from '@angular/forms';
import { resourceIds } from '../queryable-resource.service';

export class RequestInformationForms {
  private formControls: {
    resourceId: resourceIds;
    formGroup: requestInformationForms[];
  }[] = [
    {
      resourceId: 'github',
      formGroup: [
        {
          name: 'search',
          formControl: ['', [Validators.required]],
          type: 'input',
        },
      ],
    },
    {
      resourceId: 'npmjs',
      formGroup: [
        {
          name: 'search',
          formControl: ['', [Validators.required]],
          type: 'input',
        },
      ],
    },
    {
      resourceId: 'stackoverflow',
      formGroup: [
        {
          name: 'search',
          formControl: ['', [Validators.required]],
          type: 'input',
        },
      ],
    },
  ];

  getFormGroup(resourceId: resourceIds): requestInformationForms[] {
    return (
      this.formControls.find(
        (formControl) => formControl.resourceId === resourceId
      )?.formGroup ?? []
    );
  }
}

export type formTypes = 'input' | 'select';
export type requestInformationForms = {
  name: string;
  type: formTypes;
  formControl: (
    | string
    | ((control: AbstractControl) => ValidationErrors | null)[]
  )[];
};
