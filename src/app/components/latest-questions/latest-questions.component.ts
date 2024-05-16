import { Component, OnInit } from '@angular/core';
import { QuestionService } from '../../services/question.service';
import { Question } from '../../models/question.model';

@Component({
  selector: 'app-latest-questions',
  templateUrl: './latest-questions.component.html',
  styleUrl: './latest-questions.component.css'
})
export class LatestQuestionsComponent implements OnInit {

questions: Question[] = [];

constructor(private qService: QuestionService) { }

ngOnInit(): void {
  this.loadQuestions();
}

loadQuestions(){
  this.qService.getQuestions().subscribe(ques => {
    
    this.questions = ques;
  });
}

}
