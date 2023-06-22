import { Component, OnInit } from '@angular/core';
import {Task} from '../task';
import { TasksServiceService } from '../tasks-service.service';
import {Observable} from 'rxjs';


@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {

  tasks: Task[] = []; //[{ title: "visiting the family", description: "summer vacation", date: "July 1, 2023", time: "12:00pm", priority_level: "low", category: "spare time", progress_level: "complete"}];
  constructor(private service: TasksServiceService){}
 

  ngOnInit() {

    /*
    this.service.getTasks().subscribe((result:any) => { //had to alter "result: {tasks: Task[]} to "result: any" to avoid a type mismatch error with response object
      this.tasks = result;
    });
    */
    
   const tasksObservable: Observable<Task[]> = this.service.getTasks() as Observable<Task[]>;
    tasksObservable.subscribe((response: Task[]) => {  
    this.tasks = response;
   
    });
   
  }
}