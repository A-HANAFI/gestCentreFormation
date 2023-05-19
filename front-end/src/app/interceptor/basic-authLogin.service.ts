import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from '@angular/common/http';

import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class BasicAuthLoginService implements HttpInterceptor {



  intercept(request: HttpRequest<any>, next: HttpHandler) {
    let username = 'user';
    let password = 'password';
    let basicAuthHeaderString = 'Basic ' + window.btoa(username + ':' + password);
    request = request.clone({
      headers: request.headers.set('Authorization', basicAuthHeaderString)
    });
    return next.handle(request);
  }
}
