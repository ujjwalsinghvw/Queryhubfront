import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { API_URL } from '../constants/api.constants';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient, private router: Router) { }

  login( data: any ) : Observable<any> {
    return this.http.post(`${API_URL}/login`, data);
  }

  register( data: any ) : Observable<any> {
    return this.http.post(`${API_URL}/register`, data);
  }
  logout(): void {
    this.http.get(`${API_URL}/logoff`).subscribe(res=>{
      console.log(res);
    })
    localStorage.removeItem('token'); 
    localStorage.removeItem('name'); 
    localStorage.removeItem('userId'); 
    this.router.navigate(['/login']);
    window.location.reload();
    
  }
}
