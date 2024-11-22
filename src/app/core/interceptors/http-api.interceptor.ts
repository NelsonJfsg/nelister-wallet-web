import { Injectable } from '@angular/core';
import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../env/env';

@Injectable()
export class HttpApiInterceptor implements HttpInterceptor {

  private readonly apiRoot = environment.apiUrl;

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (!req.url.startsWith(this.apiRoot)) {
      const apiReq = req.clone({
        url: `${this.apiRoot}/${req.url}`
      });
      return next.handle(apiReq);
    }
    return next.handle(req);
  }
}