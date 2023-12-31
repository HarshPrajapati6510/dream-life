import { Pipe, PipeTransform } from '@angular/core';

const moment = require('moment');
require('moment-timezone');

@Pipe({
  name: 'dateFormat',
  standalone: true,
})
export class DateFormatPipe implements PipeTransform {
  userTimeZone = 'America/New_York';

  transform(value: any, type = 'default'): any {
    let formatType: any = null;
    switch (type) {
      case 'withTime':
        formatType = 'MM/DD/YYYY, h:mm A';
        break;
      case 'monthYear':
        formatType = 'MMMM YYYY';
        break;
      case 'onlyDate':
        formatType = 'MM/DD/YYYY';
        break;
      case 'onlyTime':
        formatType = 'h:mm A';
        break;
      default:
        break;
    }
    if (formatType) {
      if (this.userTimeZone) {
        return moment.tz(value, this.userTimeZone).format(formatType);
      } else {
        return moment(value).format(formatType);
      }
    } else {
      return moment.tz(value, this.userTimeZone);
    }
  }
}
