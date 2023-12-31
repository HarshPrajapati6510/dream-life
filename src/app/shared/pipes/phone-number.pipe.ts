import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'phoneNumber',
  standalone: true,
})
export class PhoneNumberPipe implements PipeTransform {
  transform(mobileNumber: any) {
    if (mobileNumber) {
      const mobile = String(mobileNumber).slice(-10);
      const mobileOperation = `(${String(mobile).substring(0, 3)}) ${String(
        mobile
      ).substring(3, 6)}-${String(mobile).substring(6, mobile.length + 1)}`;
      return mobileOperation;
    } else {
      return '-';
    }
  }
}
