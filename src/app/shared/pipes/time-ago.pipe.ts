import { Pipe, PipeTransform } from '@angular/core';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const moment = require('moment');
require('moment-timezone');

@Pipe({
  name: 'timeAgo',
  standalone: true,
})
export class TimeAgoPipe implements PipeTransform {
  userTimeZone = 'America/New_York';

  transform(value: any): any {
    if (value) {
      // Get Start Time and End Time as per timezone selected.
      const startTime = this.userTimeZone
        ? moment.tz(moment(), this.userTimeZone)
        : moment();
      const endTime = this.userTimeZone
        ? moment.tz(value, this.userTimeZone)
        : moment(value);

      // Get Seconds from Start and End Time.
      const seconds = Math.floor((+startTime - +endTime) / 1000);

      if (seconds < 29)
        // less than 30 seconds ago will show as 'Just now'
        return 'now';
      const intervals: any = {
        y: 31536000, // Year
        mon: 2592000, // Month
        w: 604800, // Week
        dy: 86400, // Day
        hr: 3600, // Hour
        min: 60, // Minute
        s: 1, // Second
      };
      let counter;
      for (const i in intervals) {
        counter = Math.floor(seconds / intervals[i]);
        if (counter > 0) {
          return `${counter}${i}`;
          // if (counter === 1) {
          //   return counter + ' ' + i + ' ago'; // singular (1 day ago)
          // } else {
          //   return counter + ' ' + i + 's ago'; // plural (2 days ago)
          // }
        }
      }
    }
    return value;
  }
}
