import { Component, OnInit } from '@angular/core';
import { Question } from '../models/question.model';
import { ActivatedRoute } from '@angular/router';
import { QuestionService } from '../services/question.service';
import { Answer } from '../models/answer.model';
// import  ClassicEditor from '../../assets/ckeditor-custom/src/ckeditor';



@Component({
  selector: 'app-question-detail',
  templateUrl: './question-detail.component.html',
  styleUrls: ['./question-detail.component.css']
})
export class QuestionDetailComponent implements OnInit {
  answerDescription: string ='';
  answer: any;
  question:Question | undefined ;


  constructor(private route: ActivatedRoute, private questionService: QuestionService) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const id = +params['id'];
      this.questionService.getQuestionById(id).subscribe(ques => {
        console.log(ques);
        this.question = ques;
      })
    })
  }


  submitAnswer(): void{
    console.log(this.answer);
    if(this.answerDescription){
      this.answer = {
        description: this.answerDescription,
        isAnonymous : false,
        questionId : this.question?.id,
        postedBy: 1
      }

    }
  }

}
