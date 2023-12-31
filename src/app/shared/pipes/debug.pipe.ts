import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'debug',
  standalone: true,
})
export class DebugPipe implements PipeTransform {
  transform(data: any): unknown {
    console.log(data);
    return null;
  }
}
