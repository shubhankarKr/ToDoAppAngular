import { Component, OnInit } from '@angular/core';
import { TasKListComponent } from './task-list/task-list.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [TasKListComponent]
})
export class AppComponent {
  title = 'ToDoList';
  constructor(private taskListComp:TasKListComponent){}

  filter(inputString:string){
  console.log(' filter called '+inputString);
  if(inputString){
    this.taskListComp.filterTaskList(inputString);
  }
  }
}
