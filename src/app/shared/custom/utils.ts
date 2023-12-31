import cryptoRandomString from 'crypto-random-string';

// eslint-disable-next-line @typescript-eslint/no-var-requires
const moment = require('moment');
require('moment-timezone');

export class Utils {
  /**
   * dateFilterFormat function is used to pass the date filter format
   * if value is found then return start and end date else return null
   * @param value
   * @returns
   */
  static dateFilterFormat(value: any) {
    const formatType = 'YYYY-MM-DD';
    if (value?.startDate?.$d && value?.endDate?.$d) {
      const startDate = moment(value?.startDate?.$d).format(formatType);
      const endDate = moment(value?.endDate?.$d).format(formatType);
      return `${startDate} - ${endDate}`;
    } else if (value?.start && value?.end) {
      const startDate = value?.start.format(formatType);
      const endDate = value?.end.format(formatType);
      return `${startDate} - ${endDate}`;
    } else {
      return null;
    }
  }

  /**
   * Complex String Generator
   * Using this function we have to generate complex string.
   * @param stringLength
   * @returns
   */
  static complexStringGenerator(stringLength: any) {
    try {
      return cryptoRandomString({ length: stringLength, type: 'alphanumeric' });
    } catch (error) {
      return null;
    }
  }
}
