import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'loggedInUser',
  standalone: true,
})
export class LoginUserDetailsPipe implements PipeTransform {
  loggedInUserDetails: any = {};

  transform(key: string): unknown {
    let result: any = null;
    switch (key) {
      case 'fullName':
        result = `${this.loggedInUserDetails['firstName']} ${this.loggedInUserDetails['lastName']}`;
        break;
      case 'switchToken':
        result = this.loggedInUserDetails['switchUserId']
          ? this.loggedInUserDetails['switchUserId'] &&
            ![null, undefined, '', false].includes(
              this.loggedInUserDetails['switchUserId']
            )
          : null;
        break;
      default:
        result = this.loggedInUserDetails[key];
        break;
    }
    return result;
  }
}
