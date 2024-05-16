import { Component } from '@angular/core';
import { QuestionService } from '../../services/question.service';

@Component({
  selector: 'app-post-question',
  templateUrl: './post-question.component.html',
  styleUrl: './post-question.component.css'
})
export class PostQuestionComponent {
  constructor(private quesService: QuestionService){}

  onSubmit(ques:any):void{
    
    const quesData = {
      title: ques.title,
      description: ques.description,
      isAnonymous: ques.isAnonymous,
      postedBy: localStorage.getItem('userId'),
      tags: ques.tags
    }
    // console.log(ques);
    this.quesService.postQuestion(quesData).subscribe(res => {
      console.log(res);
    })
  }

}
