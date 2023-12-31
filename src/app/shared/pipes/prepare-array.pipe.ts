import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'prepareArray',
  standalone: true,
})
export class PrepareArrayPipe implements PipeTransform {
  transform(percentageCount: number): any[] {
    if (typeof percentageCount == 'number') {
      const staticArray: any[] = [];
      for (let index = 0; index < percentageCount; index++) {
        staticArray.push(index);
      }
      return staticArray;
    } else {
      return [];
    }
  }
}
