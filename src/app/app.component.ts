import { Component, OnInit } from '@angular/core';
import { TasKListComponent } from './tash-list/task-list.component';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [TasKListComponent]
})
export class AppComponent implements OnInit {
  title = 'ToDoList';
  constructor(private taskListComp:TasKListComponent,private router:Router){}
  ngOnInit(): void {
      
  }
  filter(inputString:string){
    console.log(' filter called '+inputString);
    this.router.navigate(['']);
   this.taskListComp.filterTaskList(inputString);

  }
}
