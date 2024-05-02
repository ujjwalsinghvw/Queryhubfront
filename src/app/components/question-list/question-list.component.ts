import { Component, OnInit } from '@angular/core';
import { QuestionService } from '../../services/question.service';
import { Question } from '../../models/question.model';

@Component({
  selector: 'app-question-list',
  templateUrl: './question-list.component.html',
  styleUrls: ['./question-list.component.css']
})
export class QuestionListComponent implements OnInit {

  questions: Question[] = [];

  constructor(private qService: QuestionService) { }

  ngOnInit(): void {
    this.loadQuestions()
  }

  loadQuestions(){
    this.qService.getQuestions().subscribe(ques => {
      
      this.questions = ques;
    });
  }

}
