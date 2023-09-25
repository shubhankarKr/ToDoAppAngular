import { Component, Inject } from '@angular/core';
import { ToDoService } from '../service/to-do.service';
import { FormBuilder, FormControl, FormGroup, Validators,AbstractControl } from '@angular/forms';
import { toDoTaskModel } from '../model/ToDoTaskModel';
import { ActivatedRoute, Router } from '@angular/router';
import { formatDate } from '@angular/common';
import { LOCALE_ID } from "@angular/core";


@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent {
  constructor(private service:ToDoService,private fb:FormBuilder,private router:Router, private activedRoute:ActivatedRoute,@Inject( LOCALE_ID ) localID: string){this.locale=localID}
  addTaskForm!:FormGroup
  response!:toDoTaskModel;
  public locale: string;
  toToListArray:toDoTaskModel[]=[];
  edit:Boolean=false

  ngOnInit(){
     this.edit=this.router.url.endsWith('edit');
     this.addTaskForm=this.fb.group({
      title : [''],
      description : ['']
    });
     
    if(this.edit){
      console.log('if');
      this.service.getTaskById(this.activedRoute.snapshot.params['id']).subscribe({
        next: (res)=>{
          this.response=res
          this.addTaskForm.controls['title'].setValue(res.title)
          this.addTaskForm.controls['description'].setValue(res.desciption)
      }  })
    } 

  }

  saveTask(){
    let modelToSave={
      desciption:this.addTaskForm.get('description')?.value,
      title:this.addTaskForm.get('title')?.value,
      colourCode:this.addTaskForm.get('colourCode')?.value
    }
    this.service.addTask(modelToSave).subscribe({
      next :res=> {
        this.response=res 
        this.router.navigate(['/home'])
      }
    });
  }
  updateTask(){
    let modelToUpdate={
      id:this.activedRoute.snapshot.params['id'],
      desciption:this.response.desciption,
      title:this.response.title,
      colourCode:this.response.colourCode
    }
    this.service.updateTask(modelToUpdate).subscribe({
      next :(res) =>{
        this.router.navigate(['/home']);
      }
    })
  }
}
