import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root',
})
export class GenerateToasterService {
  toastConfigDefault = {
    maxOpened: 1,
    autoDismiss: true,
    timeOut: 5000,
    positionClass: 'toast-top-right',
    preventDuplicates: true,
    closeButton: true,
    tapToDismiss: false,
  };

  constructor(private toastrService: ToastrService) {}

  private clearPreviousToast() {
    if (this.toastrService.currentlyActive) {
      this.toastrService.remove(this.toastrService.currentlyActive);
      this.toastrService.clear();
    }
  }

  /**
   * Toast success message.
   * @param message
   * @param title
   * @param toastConfig
   */
  success(
    message: string,
    title = 'Success',
    toastConfig: any = {
      preventDuplicates: false,
    }
  ) {
    toastConfig = Object.assign(this.toastConfigDefault, toastConfig);
    this.clearPreviousToast();
    this.toastrService.success(message, title, toastConfig);
  }

  /**
   * Toast error message.
   * @param message
   * @param title
   * @param toastConfig
   */
  error(message: string, title = 'Error', toastConfig: any = {}) {
    toastConfig = Object.assign(this.toastConfigDefault, toastConfig);
    this.clearPreviousToast();
    this.toastrService.error(message, title, toastConfig);
  }

  /**
   * Toast info message.
   * @param message
   * @param title
   * @param toastConfig
   */
  info(message: string, title = 'Info', toastConfig: any = {}) {
    toastConfig = Object.assign(this.toastConfigDefault, toastConfig);
    this.clearPreviousToast();
    this.toastrService.info(message, title, toastConfig);
  }

  /**
   * Toast warning message.
   * @param message
   * @param title
   * @param toastConfig
   */
  warning(message: string, title = 'Warning', toastConfig: any = {}) {
    toastConfig = Object.assign(this.toastConfigDefault, toastConfig);
    this.clearPreviousToast();
    this.toastrService.warning(message, title, toastConfig);
  }
}
