import { AbstractControl, ValidationErrors, ValidatorFn } from '@angular/forms';
import { DATE_PICKER_TIME_FORMAT } from 'src/config/app.constants';
// eslint-disable-next-line @typescript-eslint/no-var-requires
const validator = require('validator');
// eslint-disable-next-line @typescript-eslint/no-var-requires
const moment = require('moment');
require('moment-timezone');

/**
 * Is Strong Password
 * @returns
 */
export function strongPasswordValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const data = validator.isStrongPassword(String(control.value), {
      minLength: 8,
      minLowercase: 1,
      minUppercase: 1,
      minNumbers: 1,
      minSymbols: 1,
      returnScore: false,
    });
    const isNotValidLength = control?.value && control?.value.length > 128;
    return !data || isNotValidLength ? { strongPasswordValidator: true } : null;
  };
}

/**
 * Email validation.
 * @returns
 */
export function emailValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const isInvalid = control.value
      ? validator.isEmail(String(control.value))
        ? false
        : true
      : false;
    return isInvalid ? { emailValidator: true } : null;
  };
}

/**
 * Url validation.
 * @returns
 */
export function urlValidator(): ValidatorFn {
  return (control: AbstractControl): ValidationErrors | null => {
    const isInvalid = control.value
      ? validator.isURL(String(control.value), {
          require_protocol: true,
        })
        ? false
        : true
      : false;
    return isInvalid ? { urlValidator: true } : null;
  };
}

/**
 * Require Either Start Time Or End Time. End Time must be greater than Start Time.
 * @returns
 */
export function startTimeEndTimeValidator(): ValidatorFn {
  return (dayFormGroup: AbstractControl): ValidationErrors | null => {
    const startTimeValue = dayFormGroup?.get('start')?.value;
    const endTimeValue = dayFormGroup?.get('end')?.value;
    if (!startTimeValue && !endTimeValue) {
      return null;
    }
    if (!startTimeValue) {
      return { startTimeRequired: true };
    }
    if (!endTimeValue) {
      return { endTimeRequired: true };
    }
    const startTime = moment(
      moment(startTimeValue, DATE_PICKER_TIME_FORMAT, true).format(
        DATE_PICKER_TIME_FORMAT,
      ),
      'LT',
    );
    const endTime = moment(
      moment(endTimeValue, DATE_PICKER_TIME_FORMAT, true).format(
        DATE_PICKER_TIME_FORMAT,
      ),
      'LT',
    );
    if (endTime.isSameOrBefore(startTime)) {
      return { startTimeEndTimeValidator: true };
    }
    return null;
  };
}
