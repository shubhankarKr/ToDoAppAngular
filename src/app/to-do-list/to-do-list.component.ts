import { Component ,OnInit} from '@angular/core';
import { ToDoService } from '../service/to-do.service';
import { toDoTaskModel } from '../model/ToDoTaskModel';
import { FormBuilder, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.css']
})
export class ToDoListComponent  implements OnInit{
  constructor(private service:ToDoService,private fb:FormBuilder){}

  addTaskForm!:FormGroup
  inputString!:toDoTaskModel;
  edit:boolean=false;
  valueToEdit!:toDoTaskModel;
  addtaskFlag:boolean=false;
  addTaskButton:boolean=true;
  modelToSave!:toDoTaskModel;
  response!:toDoTaskModel;
  toToListArray:toDoTaskModel[]=[];
  ngOnInit(){
    this.addTaskForm=this.fb.group({
      title : [''],
      description : ['']
    });
  }

  addTask(){
    this.addtaskFlag=!this.addtaskFlag;
    this.addTaskButton=!this.addTaskButton;
    
  }

  saveTask(){
    console.log(' title log '+this.addTaskForm.get('title')?.value);
    this.modelToSave=new toDoTaskModel(this.addTaskForm.get('title')?.value,this.addTaskForm.get('description')?.value);
    this.service.addTask(this.modelToSave).subscribe({
      next :res=> {
        this.response=res 
        console.log(' response '+JSON.stringify(res));
        this.addtaskFlag=!this.addtaskFlag;
        this.addTaskButton=!this.addTaskButton;
    
      }
    });
  }
  
}
