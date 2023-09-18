import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component'
import { TasKListComponent } from './task-list/task-list.component';
import { AddTaskComponent } from './add-task/add-task.component';

const routes: Routes = [
  {path:'home',component: TasKListComponent},
  {path:'add',component:AddTaskComponent},
  {path:'',redirectTo:'/home' ,pathMatch: 'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
 
 }
