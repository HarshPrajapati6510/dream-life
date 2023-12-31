import { Injectable } from '@angular/core';
import { GenerateToasterService } from './generate-toaster.service';

@Injectable({
  providedIn: 'root',
})
export class HelperService {
  tabFlag = false;
  constructor(private generateToasterService: GenerateToasterService) {}

  copyText(text: string, toastMsg = 'Copied to clipboard!') {
    navigator.clipboard.writeText(text).then(
      () => {
        this.generateToasterService.success(toastMsg);
      },
      () => {
        this.generateToasterService.error('Unable to copy text');
      }
    );
  }
}
