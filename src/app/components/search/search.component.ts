import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { Question } from '../../models/question.model';
import { QuestionService } from '../../services/question.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrl: './search.component.css'
})
export class SearchComponent implements OnInit {
  questions: Question[] = [];
  query: string= '';
  constructor(private qService: QuestionService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.queryParams.subscribe(params=>{
      this.query = params['query'];
      this.loadQuestions();
    })
    

  }


  loadQuestions(){
    this.qService.searchQuestion(this.query).subscribe(ques => {
      console.log(ques);
      this.questions = ques;
    });
  }

}
