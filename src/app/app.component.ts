import { Component, ViewEncapsulation } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { FormlyFormOptions, FormlyFieldConfig } from '@ngx-formly/core';

@Component({
  selector: 'formly-app-example',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class AppComponent {
  form = new FormGroup({});
  model: any = {};
  options: FormlyFormOptions = {};

  fieldGroupClassName = 'display-flex-row';

  workingFields: FormlyFieldConfig[];

  public changeOrientation(orient: string): void {
    this.workingFields = [];
    this.fieldGroupClassName = orient;
    this.workingFields = this.compute(orient);
    console.info(
      `changeOrientation (${this.fieldGroupClassName}): \n`,
      this.workingFields
    );
  }

  compute(fieldGrpClassName: string): FormlyFieldConfig[] {
    return [
      {
        fieldGroupClassName: fieldGrpClassName,
        fieldGroup: [
          {
            className: 'flex-2',
            type: 'input',
            key: 'firstName',
            props: {
              label: 'First Name',
            },
          },
          {
            className: 'flex-2',
            type: 'input',
            key: 'lastName',
            props: {
              label: 'Last Name',
            },
            expressions: {
              'props.disabled': '!model.firstName',
            },
          },
          {
            className: 'flex-1',
            type: 'input',
            key: 'lastName2',
            props: {
              label: 'Sur Name',
            },
          },
          {
            className: 'flex-1',
            type: 'input',
            key: 'truc',
            props: {
              label: 'Truc',
            },
          },
          {
            className: 'flex-1',
            type: 'input',
            key: 'truc',
            props: {
              label: 'Truc 2',
            },
          },
        ],
      },
      {
        template: '<hr /><div><strong>Address:</strong></div>',
      },
      {
        fieldGroupClassName: fieldGrpClassName,
        fieldGroup: [
          {
            className: 'flex-2',
            type: 'input',
            key: 'street',
            props: {
              label: 'Street',
            },
          },
          {
            className: 'flex-1',
            type: 'input',
            key: 'cityName',
            props: {
              label: 'City',
            },
          },
          {
            className: 'flex-1',
            type: 'input',
            key: 'zip',
            props: {
              type: 'number',
              label: 'Zip',
              max: 99999,
              min: 0,
              pattern: '\\d{5}',
            },
          },
        ],
      },
      {
        template: '<hr />',
      },
      {
        type: 'input',
        key: 'otherInput',
        props: {
          label: 'Other Input',
        },
      },
      {
        type: 'checkbox',
        key: 'otherToo',
        props: {
          label: 'Other Checkbox',
        },
      },
    ];
  }

  row() {
    alert('row');
  }
}

/**  Copyright 2021 Formly. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at https://github.com/ngx-formly/ngx-formly/blob/main/LICENSE */
