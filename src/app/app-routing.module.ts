import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QuestionDetailComponent } from './components/question-detail/question-detail.component';
import { QuestionListComponent } from './components/question-list/question-list.component';
import { PostQuestionComponent } from './components/post-question/post-question.component';
import { UpdateQuestionComponent } from './components/update-question/update-question.component';

const routes: Routes = [
  {path: '', redirectTo : '/questions', pathMatch: 'full'},
  {path: 'questions', component: QuestionListComponent},
  {path: 'questions/:id', component: QuestionDetailComponent },
  {path: 'post-question', component: PostQuestionComponent },
  {path: 'update-question/:id', component: UpdateQuestionComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
