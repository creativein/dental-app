import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent} from './login/login.component';
import { QuestionListComponent } from './question-list/question-list.component';

const routes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'question', component: QuestionListComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
