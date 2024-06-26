import { HttpClient} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Question } from '../models/question.model';
import { API_URL } from '../constants/api.constants';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {

  constructor(private http: HttpClient) { }

  getQuestions(): Observable<Question[]> {
    return this.http.get<Question[]>(`${API_URL}/questions`);
  }

  postQuestion( ques: any): Observable<Question>{
    return this.http.post<Question>(`${API_URL}/questions`, ques);
  }

  updateQuestion(ques: any, id: number): Observable<Question>{
    return this.http.put<Question>(`${API_URL}/questions/${id}`, ques);
  }

  getQuestionById( id:number ): Observable<Question>{
    return this.http.get<Question>(`${API_URL}/questions/${id}`);
  }

  searchQuestion( query: string ):Observable<Question[]>{
    return this.http.get<Question[]>(`${API_URL}/search?query=${query}`);
  }
  
}
