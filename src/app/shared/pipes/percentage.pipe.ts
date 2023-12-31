import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'percentage',
  standalone: true,
})
export class PercentagePipe implements PipeTransform {
  transform(percentageValue: any[]): unknown {
    if (
      percentageValue.length == 2 &&
      typeof percentageValue[0] == 'number' &&
      typeof percentageValue[1] == 'number'
    ) {
      // percentageValue[0] Total
      // percentageValue[1] To check with
      return (100 * percentageValue[1]) / percentageValue[0];
    } else {
      return 0;
    }
  }
}
