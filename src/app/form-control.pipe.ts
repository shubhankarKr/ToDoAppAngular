import { Pipe, PipeTransform } from '@angular/core';
import { AbstractControl, FormControl } from '@angular/forms';

@Pipe({
  name: 'formControl'
})
export class FormControlPipe implements PipeTransform {

  transform(value: AbstractControl,s?:any): FormControl<typeof value['value']> {
    return value as FormControl<typeof value['value']>;
  } 

}
