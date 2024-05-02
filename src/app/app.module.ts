import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { QuestionListComponent } from './components/question-list/question-list.component';
import { QuestionDetailComponent } from './components/question-detail/question-detail.component';
import { FormsModule } from '@angular/forms';
import { QuillModule } from 'ngx-quill';
import { QuestionFormComponent } from './components/question-form/question-form.component';
import { PostQuestionComponent } from './components/post-question/post-question.component';
import { UpdateQuestionComponent } from './components/update-question/update-question.component';
import { NgSelectModule } from '@ng-select/ng-select';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { MyQuestionsComponent } from './components/my-questions/my-questions.component';




@NgModule({
  declarations: [
    AppComponent,
    QuestionListComponent,
    QuestionDetailComponent,
    QuestionFormComponent,
    PostQuestionComponent,
    UpdateQuestionComponent,
    SidebarComponent,
    MyQuestionsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    NgSelectModule,
    FormsModule,
    QuillModule.forRoot({
      modules:{
        toolbar: [
          ['bold', 'italic', 'underline', 'strike'],        // toggled buttons
          ['blockquote', 'code-block'],                    // blocks
          [{ 'header': 1 }, { 'header': 2 }],               // custom button values
          [{ 'list': 'ordered'}, { 'list': 'bullet' }],     // lists
          [{ 'script': 'sub'}, { 'script': 'super' }],      // superscript/subscript
          [{ 'indent': '-1'}, { 'indent': '+1' }],          // outdent/indent
          [{ 'direction': 'rtl' }],                         // text direction
          [{ 'size': ['small', false, 'large', 'huge'] }],  // custom dropdown
          [{ 'header': [1, 2, 3, 4, 5, 6, false] }],
          [{ 'color': [] }, { 'background': [] }],          // dropdown with defaults from theme
          [{ 'font': [] }],
          [{ 'align': [] }],
          ['link', 'clean'],                               // link and remove link
          ['clean']                                        // remove formatting button
        ]
      }
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
