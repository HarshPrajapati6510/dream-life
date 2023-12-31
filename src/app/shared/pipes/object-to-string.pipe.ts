import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
  name: 'objectToString',
  standalone: true,
})
export class ObjectToStringPipe implements PipeTransform {
  transform(arrayValue: any, args: any = null) {
    if (arrayValue && arrayValue.length > 0) {
      let result = ``;
      arrayValue.forEach((element: any, index: number) => {
        if (!result) {
          result += element[args];
        } else if (index == arrayValue.length - 1) {
          result += `, ${element[args]}`;
        } else {
          result += `, ${element[args]}`;
        }
      });
      return result;
    } else {
      return;
    }
  }
}
