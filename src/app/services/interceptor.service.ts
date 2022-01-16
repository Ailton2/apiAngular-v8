import { HttpErrorResponse, HttpEvent, HttpHandler,HttpResponse, HttpInterceptor, HttpRequest, HTTP_INTERCEPTORS } from '@angular/common/http';
import { Injectable, NgModule } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { catchError, retry } from 'rxjs/operators';

@Injectable()
export class InterceptorService implements HttpInterceptor{

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
  
    req.headers.set('Content-Type', 'application/json; charset=utf-8')
    

    const token = localStorage.getItem('token');
    if (token && token.length > 0 ) {
       const request = req.clone({setHeaders : {'Authorization': `Bearer ${token}`} });
        return next.handle(request).pipe(
          catchError(this.processaError)
        );
    }else{
      return next.handle(req).pipe(
        catchError(this.processaError)
      );;
    }

  }
  constructor() { }

  processaError(error: HttpErrorResponse){
     let errorMessage = 'Erro Desconhecido';
     if(error.error instanceof ErrorEvent){
       console.log(error.error)
       errorMessage = 'Error : '+ error.error.error
     }else{
       if(error.status === 403){
        errorMessage = "Acesso negado, faça o login novamente."
       }else{
         errorMessage = 'Código: ' +error.status + '\nMensagem: '+ error.error.error;
       }
       
     }
     alert(errorMessage)
     return throwError(errorMessage);
  }
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
