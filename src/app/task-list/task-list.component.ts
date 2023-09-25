import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { ToDoService } from '../service/to-do.service';
import { toDoTaskModel } from '../model/ToDoTaskModel';

@Component({
  selector: 'app-tash-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TasKListComponent implements OnInit{
  
   constructor(private service:ToDoService){}

  ngOnInit(): void {
      // console.log(' ngOnInit called TaskList');
      this.getTaskList();
  }

  taskList:toDoTaskModel[]=[]
  
  getTaskList(){
    this.service.getAllTask().subscribe({
      next : res=>{
        // console.log('getTaskList called '+JSON.stringify(res));
        this.taskList=res;       
      }
    });
  }

  deleteTask(id:number){
    this.service.deleteTask(id).subscribe({
      next : res=> {
        // console.log(' deleted '+JSON.stringify(res))
        this.getTaskList()
      }
    });
  }

  filterTaskList(data:string){
    this.service.searchTask(data).subscribe({
      next : res=>{
        // console.log('filterTaskList called '+JSON.stringify(res));
        this.taskList=res;       
      }
    });
  }
}
