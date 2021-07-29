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
          name: 'q',
          label: 'Search',
          formControl: ['', [Validators.required]],
          type: 'input',
          inputType: 'text'
        },
      ],
    },
    {
      resourceId: 'npmjs',
      formGroup: [
        {
          name: 'q',
          label: 'Search',
          formControl: ['', [Validators.required]],
          type: 'input',
          inputType: 'text'
        },
      ],
    },
    {
      resourceId: 'stackoverflow',
      formGroup: [
        {
          name: 'q',
          label: 'Search',
          formControl: ['', [Validators.required]],
          type: 'input',
          inputType: 'text'
        },{
          name: 'fromDate',
          label: 'From',
          formControl: ['', []],
          type: 'input',
          inputType: 'date'
        },{
          name: 'toDate',
          label: 'To',
          formControl: ['', []],
          type: 'input',
          inputType: 'date'
        },{
          name: 'order',
          label: 'Order',
          formControl: ['asc', [Validators.required]],
          type: 'select',
          options: [
            'asc',
            'desc'
          ]
        },{
          name: 'sort',
          label: 'Sort',
          formControl: ['relevance', [Validators.required]],
          type: 'select',
          options: [
            'activity',
            'creation',
            'relevance',
            'votes'
          ]
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
  label: string;
  type: formTypes;
  formControl: (
    | string
    | ((control: AbstractControl) => ValidationErrors | null)[]
  )[];
  inputType?: string;
  options?: string[]
};
