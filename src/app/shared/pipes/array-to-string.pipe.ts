import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
  name: 'arrayToString',
  standalone: true,
})
export class ArrayToStringPipe implements PipeTransform {
  transform(arrayValue: any, type: any = null) {
    if (arrayValue && arrayValue.length > 0) {
      let result = ``;
      arrayValue.forEach((element: any, index: number) => {
        if (!result) {
          result += element;
        } else if (index == arrayValue.length - 1) {
          switch (type) {
            case 'noAnd':
              result += `, ${element}`;
              break;
            default:
              result += ` and ${element}`;
              break;
          }
        } else {
          result += `, ${element}`;
        }
      });
      return result;
    } else {
      return;
    }
  }
}
