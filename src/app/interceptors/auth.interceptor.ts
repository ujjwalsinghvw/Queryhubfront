import { Injectable } from '@angular/core';
import { HttpRequest, HttpHandler, HttpEvent, HttpInterceptor, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError } from 'rxjs/operators';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {
  constructor(private router: Router, private authService: AuthService) {}

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    const token = localStorage.getItem('token');

    if(token){
    const authRequest = request.clone({
      headers: request.headers.set('Authorization', `Bearer ${token}`)
    });

    
    return next.handle(authRequest).pipe(
      catchError((error: HttpErrorResponse) => {
        if (error.status === 403) {
          this.authService.logout();
          
        }
        return throwError(() => error);
      })
    );
  }
  else
  return next.handle(request).pipe(
    catchError((error: HttpErrorResponse) => {
      if (error.status === 403) {
        
        this.router.navigate(['/login']);
      }
      return throwError(() => error);
    })
  );
}
}
