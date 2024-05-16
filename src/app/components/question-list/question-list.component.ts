import { Component, Input, OnInit } from '@angular/core';
import { QuestionService } from '../../services/question.service';
import { Question } from '../../models/question.model';

@Component({
  selector: 'app-question-list',
  templateUrl: './question-list.component.html',
  styleUrls: ['./question-list.component.css']
})
export class QuestionListComponent {

  @Input() questions: Question[] = [];
  @Input() mode: 'latest' | 'search' = 'latest';

  constructor(private qService: QuestionService) { }

 



}
