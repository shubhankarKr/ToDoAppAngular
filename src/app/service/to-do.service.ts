import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, catchError, map, retry, tap, throwError } from 'rxjs';
import { toDoTaskModel } from '../model/ToDoTaskModel';

@Injectable({
  providedIn: 'root'
})
export class ToDoService {

  constructor(private http:HttpClient) { }

  getAllTask():Observable<toDoTaskModel[]>{
    return this.http.get<toDoTaskModel[]>('http://localhost:8000/task/getAllTasks')
    .pipe(retry(1),catchError(this.handleError) ) ;
  }

  updateTask(task : any):Observable<toDoTaskModel>{
    console.log('update service '+JSON.stringify(task));
    
    return this.http.put<toDoTaskModel>('http://localhost:8000/task/update',task).pipe(
      retry(1),catchError(this.handleError)
    );
  }

  deleteTask(id : number):Observable<boolean>{
    let url = `http://localhost:8000/task/delete/${id}`;
    return this.http.delete<boolean>(url).pipe(
      retry(1),catchError(this.handleError)
    );
  }

  addTask(task : any):Observable<toDoTaskModel>{
    return this.http.post<toDoTaskModel>('http://localhost:8000/task/add',task).pipe(
      retry(1),catchError(this.handleError)
    );
  }

  searchTask(inputString:string):Observable<toDoTaskModel[]>{
    let url = `http://localhost:8000/task/search/${inputString}`;
    return this.http.get<toDoTaskModel[]>(url)
    .pipe(retry(1),catchError(this.handleError) ) ;
  }

  getTaskById(id:number):Observable<toDoTaskModel>{
    console.log(' service called ');
    
    let url = `http://localhost:8000/task/${id}`;
    return this.http.get<toDoTaskModel>(url)
    .pipe(retry(1),catchError(this.handleError) ) ;
  }

  private handleError(err: any): Observable<any> {
   console.log(JSON.stringify(err));
   return throwError( () => {
    return 'Error Has occured';
   } );
  }
}
