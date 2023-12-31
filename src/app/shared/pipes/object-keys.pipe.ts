import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'objectKeys',
  standalone: true,
})
export class ObjectKeysPipe implements PipeTransform {
  transform(objectValue: any): any[] {
    if (typeof objectValue == 'object') {
      return Object.keys(objectValue);
    } else {
      return [];
    }
  }
}
