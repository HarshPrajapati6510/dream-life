import { Pipe, PipeTransform } from '@angular/core';
import humanizeString from 'humanize-string';

@Pipe({
  name: 'humanize',
  standalone: true,
})
export class HumanizePipe implements PipeTransform {
  transform(value: string): string {
    if (value) {
      return humanizeString(value);
    }
    return '';
  }
}
