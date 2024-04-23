import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Answer } from '../models/answer.model';
import { API_URL } from '../constants/api.constants';

@Injectable({
  providedIn: 'root'
})
export class AnswerService {

  constructor(private http: HttpClient) {   }

  postAnswer(ans:any): Observable<Answer>{
   return this.http.post<Answer>(`${API_URL}/answers`, ans);
  }
}
