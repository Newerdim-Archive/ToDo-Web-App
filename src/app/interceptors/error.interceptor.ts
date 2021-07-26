import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpErrorResponse,
} from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';
import { ErrorResponse } from '../interfaces/error-response';

@Injectable()
export class ErrorInterceptor implements HttpInterceptor {
  constructor() {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    return next.handle(request).pipe(
      catchError((error: HttpErrorResponse) => {
        if (error.error instanceof ErrorEvent) {
          return this.handleClientSideError();
        }

        if (error.status === 0) {
          return this.handleServerUnavailable();
        }

        if (!error.error && error.status === 404) {
          return this.handleEndpointNotExist();
        }

        if (error.status >= 500) {
          return this.handleInternalSeverError();
        }

        return this.handleErrorResponse(error);
      })
    );
  }

  handleServerUnavailable(): Observable<never> {
    let errorResponse: ErrorResponse = {
      message: 'Server is unavailable right now. Try again later',
    };

    return throwError(errorResponse);
  }

  handleEndpointNotExist(): Observable<never> {
    let errorResponse: ErrorResponse = {
      message: 'Endpoint not exist',
    };

    return throwError(errorResponse);
  }

  handleInternalSeverError(): Observable<never> {
    let errorResponse: ErrorResponse = {
      message: 'Something gone wrong in server',
    };

    return throwError(errorResponse);
  }

  handleErrorResponse(error: HttpErrorResponse): Observable<never> {
    let errorResponse: ErrorResponse = error.error;

    return throwError(errorResponse);
  }

  handleClientSideError(): Observable<never> {
    let errorResponse: ErrorResponse = {
      message: 'Unexpected error appeared',
    };

    return throwError(errorResponse);
  }
}
