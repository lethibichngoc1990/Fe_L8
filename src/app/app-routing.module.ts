import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { TutorialComponent } from './tutorial/tutorial.component';
import { AddComponent } from './tutorial/add/add.component';
import { DetailsComponent } from './tutorial/details/details.component';
const routes: Routes = [
  { path: 'login', component: LoginComponent },
  { path: 'tutorial', component: TutorialComponent },
  { path: 'add', component: AddComponent },
  { path: 'details', component: DetailsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
