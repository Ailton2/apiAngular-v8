import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest, HTTP_INTERCEPTORS } from '@angular/common/http';
import { Injectable, NgModule } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable()
export class InterceptorService implements HttpInterceptor{

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const token = localStorage.getItem('token');
    if(token && token.length > 0){
        const tokenRequest = req.clone({
          headers : req.headers.set('Authorization', 'Bearer ' +token)
        });
        return next.handle(tokenRequest)
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
