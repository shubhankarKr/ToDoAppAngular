import { Component } from '@angular/core';
import { ToDoService } from '../service/to-do.service';
import { FormBuilder, FormGroup } from '@angular/forms';
import { toDoTaskModel } from '../model/ToDoTaskModel';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent {
  constructor(private service:ToDoService,private fb:FormBuilder,private router:Router){}

  addTaskForm!:FormGroup

  modelToSave!:toDoTaskModel;
  response!:toDoTaskModel;
  toToListArray:toDoTaskModel[]=[];
  ngOnInit(){
    this.addTaskForm=this.fb.group({
      title : [''],
      description : ['']
    });
  }


  saveTask(){
    console.log(' title log '+this.addTaskForm.get('title')?.value);
    this.modelToSave=new toDoTaskModel(this.addTaskForm.get('title')?.value,this.addTaskForm.get('description')?.value);
    this.service.addTask(this.modelToSave).subscribe({
      next :res=> {
        this.response=res 
        this.router.navigate(['/home'])
      }
    });
  }
}
