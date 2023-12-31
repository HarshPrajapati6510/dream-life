import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'initials',
  standalone: true,
})
export class InitialsPipe implements PipeTransform {
  transform(name: string, isMultiple = false): unknown {
    const maxLength = 2;
    let result: any = '';
    if (name && name.length > 0) {
      if (isMultiple) {
        const newName = name.trim().split(' ');
        newName.forEach((item, index) => {
          if (maxLength > index) {
            result += item[0];
          }
        });
      } else {
        result = name[0];
      }
    }
    return result;
  }
}
