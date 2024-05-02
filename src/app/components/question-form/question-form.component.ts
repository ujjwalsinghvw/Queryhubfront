import { Component, EventEmitter, Input, OnChanges, OnInit, Output, SimpleChanges } from '@angular/core';
import { TagService } from '../../services/tag.service';

@Component({
  selector: 'app-question-form',
  templateUrl: './question-form.component.html',
  styleUrl: './question-form.component.css'
})
export class QuestionFormComponent implements OnInit, OnChanges {

  @Input() mode: 'post' | 'update' = 'post';
  @Input() question : any = {
    title: '',
    description : '',
    isAnonymous: false,
    tags: []
  };
  @Output() questionEmitter = new EventEmitter<any>();
  tags: string[] = [];

  selectedTags: string[] = [];
 

  constructor( private tagService: TagService ) {}
  ngOnInit(): void {
    this.fetchTags();
      
  }

  ngOnChanges(changes: SimpleChanges): void {
    if(changes['question']){
      // console.log(this.question.tags);
      this.selectedTags = this.question.tags.map(({name}:any) => name); 
    
    }
    
  }

  fetchTags():void {

    this.tagService.getAllTags().subscribe(res=> {
      if(res){
        this.tags = res.map(tag => tag.name);
      }
    })


  }

  onSubmit(): void {
    const questionData = {...this.question, tags: this.selectedTags};
    this.questionEmitter.emit(questionData);
  }

  removeTag(tag: string) {
    this.selectedTags = this.selectedTags.filter(t => t !== tag);
  }

  
}
