import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QuestionDetailComponent } from './components/question-detail/question-detail.component';
import { QuestionListComponent } from './components/question-list/question-list.component';
import { PostQuestionComponent } from './components/post-question/post-question.component';
import { UpdateQuestionComponent } from './components/update-question/update-question.component';
import { LoginComponent } from './components/login/login.component';
import { authGuard } from './guards/auth.guard';
import { SignupComponent } from './components/signup/signup.component';
import { LatestQuestionsComponent } from './components/latest-questions/latest-questions.component';
import { SearchComponent } from './components/search/search.component';


const routes: Routes = [
  {path: '', redirectTo : '/questions', pathMatch: 'full'},
  {path: 'questions', component: LatestQuestionsComponent, canActivate:[authGuard]},
  {path: 'questions/:id', component: QuestionDetailComponent , canActivate:[authGuard] },
  {path: 'post-question', component: PostQuestionComponent , canActivate:[authGuard] },
  {path: 'update-question/:id', component: UpdateQuestionComponent, canActivate:[authGuard] },
  {path: 'login', component: LoginComponent},
  {path: 'signup', component: SignupComponent},
  {path: 'search', component:SearchComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
