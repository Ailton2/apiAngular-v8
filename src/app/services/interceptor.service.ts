import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HTTP_INTERCEPTORS } from '@angular/common/http';
import { Injectable, NgModule } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class InterceptorService implements HttpInterceptor{

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
  
    req.headers.set('Content-Type', 'application/json; charset=utf-8')
    

    const token = localStorage.getItem('token');
    if (token && token.length > 0 ) {
       const request = req.clone({setHeaders : {'Authorization': `Bearer ${token}`} });
        return next.handle(request);
    }else{
      return next.handle(req);
    }

  }
  constructor() { }
}

@NgModule({
  providers : [{
    provide : HTTP_INTERCEPTORS,
    useClass : InterceptorService,
    multi : true,
  },
],
})

export class HttpInterceptorModule {
  
}
