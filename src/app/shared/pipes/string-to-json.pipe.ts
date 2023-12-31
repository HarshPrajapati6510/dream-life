import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
  name: 'stringToJson',
  standalone: true,
})
export class StringToJsonPipe implements PipeTransform {
  transform(value: any): any {
    if (value) {
      try {
        return JSON.parse(value);
      } catch (error) {
        return [];
      }
    } else {
      return [];
    }
  }
}
