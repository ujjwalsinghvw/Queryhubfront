import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Tag } from '../models/tag.model';
import { API_URL } from '../constants/api.constants';

@Injectable({
  providedIn: 'root'
})
export class TagService {

  constructor(private http: HttpClient) {   }

  getAllTags(): Observable<Tag[]>{
    return this.http.get<Tag[]>(`${API_URL}/tags`);
  }
  
}
