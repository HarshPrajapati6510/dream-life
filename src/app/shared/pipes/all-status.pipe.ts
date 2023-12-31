import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'allStatus',
  standalone: true,
})
export class AllStatusPipe implements PipeTransform {
  statusList: any = [];
  statusValue = '';
  statusTitle = '';
  statusClass = '';
  CREATIVE_STATUS = [
    {
      title: 'Approved',
      status: 'approved',
      class: 'text-success',
    },
    {
      title: 'Not Approved',
      status: 'not-approved',
      class: 'text-danger',
    },
  ];

  transform(status: string, statusType: string, isClass = false): unknown {
    let result: any = '';
    this.statusList = [];
    this.statusValue = '';
    this.statusTitle = '';
    this.statusClass = '';
    switch (statusType) {
      case 'creativeStatus':
        this.statusList = this.CREATIVE_STATUS;
        this.statusValue = 'status';
        this.statusTitle = 'title';
        this.statusClass = 'class';
        break;
      default:
        break;
    }
    if (this.statusList && this.statusList.length > 0) {
      this.statusList.forEach((element: any) => {
        if (element[this.statusValue] == status) {
          result = isClass
            ? element[this.statusClass]
            : element[this.statusTitle];
        }
      });
    }
    return result;
  }
}
