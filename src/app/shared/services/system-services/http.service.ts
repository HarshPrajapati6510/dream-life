import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable, catchError, map, throwError } from 'rxjs';
import { GenerateToasterService } from './generate-toaster.service';

@Injectable({
  providedIn: 'root',
})
export class HttpService {
  constructor(
    private httpClient: HttpClient,
    private generateToasterService: GenerateToasterService,
    private router: Router
  ) {}

  // Http POST request handler
  public post(
    url: string,
    data: any,
    flashFlag = false,
    isFlashStop = false
  ): Observable<any> {
    return this.httpClient.post(url, data).pipe(
      map((res: any) => {
        if (flashFlag && !isFlashStop) {
          this.generateToasterService.success(res.message);
        }
        return res;
      }),
      catchError((error: any) => {
        this.commonErrorHandler(error, isFlashStop);
        return throwError(() => error?.error);
      })
    );
  }

  // Http GET request handler
  public get(
    url: string,
    params: any = {},
    flashFlag = false,
    isFlashStop = false
  ): Observable<any> {
    return this.httpClient
      .get(url, {
        params: params,
      })
      .pipe(
        map((res: any) => {
          if (flashFlag && !isFlashStop) {
            this.generateToasterService.success(res.message);
          }
          return res;
        }),
        catchError((error: any) => {
          this.commonErrorHandler(error, isFlashStop);
          return throwError(() => error?.error);
        })
      );
  }

  // Http PUT request handler
  public put(
    url: string,
    data: any,
    flashFlag = false,
    isFlashStop = false
  ): Observable<any> {
    return this.httpClient.put(url, data).pipe(
      map((res: any) => {
        if (flashFlag && !isFlashStop) {
          this.generateToasterService.success(res.message);
        }
        return res;
      }),
      catchError((error: any) => {
        this.commonErrorHandler(error, isFlashStop);
        return throwError(() => error?.error);
      })
    );
  }

  // Http DELETE request handler
  public delete(
    url: string,
    flashFlag = false,
    isFlashStop = false
  ): Observable<any> {
    return this.httpClient.delete(url).pipe(
      map((res: any) => {
        if (flashFlag && !isFlashStop) {
          this.generateToasterService.success(res.message);
        }
        return res;
      }),
      catchError((error: any) => {
        this.commonErrorHandler(error, isFlashStop);
        return throwError(() => error?.error);
      })
    );
  }

  // Common Error Handler
  private commonErrorHandler(error: any, isFlashStop = false) {
    if (
      !isFlashStop &&
      (!error?.error?.messageType || error?.error?.messageType != 'warning')
    ) {
      const message = error?.error?.message || 'Something went wrong!';
      this.generateToasterService.error(message);
    }
    if (error?.error?.tokenExpired && error?.error?.tokenExpired == true) {
      this.router.navigate(['/logout'], {
        queryParams: { forceLogout: true },
      });
    }
  }
}
