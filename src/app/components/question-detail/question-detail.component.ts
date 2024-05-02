import { Component, OnInit } from '@angular/core';
import { Question } from '../../models/question.model';
import { ActivatedRoute } from '@angular/router';
import { QuestionService } from '../../services/question.service';
import {DomSanitizer, SafeHtml} from '@angular/platform-browser';
import { AnswerService } from '../../services/answer.service';


@Component({
  selector: 'app-question-detail',
  templateUrl: './question-detail.component.html',
  styleUrls: ['./question-detail.component.css']
})
export class QuestionDetailComponent implements OnInit {
  answerDescription: string ='';
  answer: object = {};
  question:Question | undefined ;
  isAnonymous:boolean = false;
  answers: any[] = [];


  constructor(private route: ActivatedRoute, private quesService: QuestionService, private ansService: AnswerService, private sanitiser: DomSanitizer) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const id = +params['id'];
      this.quesService.getQuestionById(id).subscribe((ques) => {
        // console.log(ques);
        this.question = ques;

        this.answers = ques.answers.map(ans=> ({
          ...ans,
          description: this.sanitizeDescription(ans.description)
        }))
      }
    )
    })
  }

  sanitizeDescription(desc: string): SafeHtml{
    return this.sanitiser.bypassSecurityTrustHtml(desc);
  }
  submitAnswer(): void{
   
    if(this.answerDescription){
      this.answer = {
        description: this.answerDescription,
        isAnonymous : this.isAnonymous,
        questionId : this.question?.id,
        postedBy: 1
      }
      // console.log(this.answer);
      this.ansService.postAnswer(this.answer).subscribe(
        (response)=>{
        console.log(response);
      },
      (error) => {
        // console.log(error.error);
      }
    )
      
    } 

    
  }

}
