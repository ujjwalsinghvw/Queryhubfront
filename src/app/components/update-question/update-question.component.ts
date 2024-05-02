import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { QuestionService } from '../../services/question.service';

@Component({
  selector: 'app-update-question',
  templateUrl: './update-question.component.html',
  styleUrl: './update-question.component.css'
})
export class UpdateQuestionComponent {
questionId: number = 0;
question:any = {
  title: '',
  description : '',
  isAnonymous: false,
  tags: []
};;

constructor(private route: ActivatedRoute, private quesService: QuestionService){}

ngOnInit(): void{
  this.route.params.subscribe(params=> {
    this.questionId = +params['id'];
    this.fetchQuestion();
  })
}

fetchQuestion():void{
  this.quesService.getQuestionById(this.questionId).subscribe((ques: any) => {
    // console.log(ques);
    if(ques)
    this.question = ques;
  })
}

onSubmit(ques: any):void {
console.log(ques);

const quesData = {
  title: ques.title,
  description: ques.description,
  isAnonymous: ques.isAnonymous,
  postedBy: ques.postedBy.id,
  tags: ques.tags
}
  this.quesService.updateQuestion(quesData, ques.id).subscribe(res=> {
    console.log(res);
  })

}


}
