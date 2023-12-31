import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { TEST } from 'src/config/api.constants';
import { HttpService } from '../system-services/http.service';

@Injectable()
export class DashboardService {
  constructor(private httpService: HttpService) {}

  /**
   * Test Call
   * @param params
   * @returns
   */
  public testCall(params: any = {}): Observable<any> {
    return this.httpService.get(TEST.TEST, params, false);
  }
}
