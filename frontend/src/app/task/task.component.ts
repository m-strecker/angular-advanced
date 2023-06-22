import { Component, OnInit, Input } from '@angular/core';
import {Task} from '../task';



@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css']
})
export class TaskComponent implements OnInit {
  @Input() task: Task = {} as Task; //initializes an empty object without listing each property // input decorator allows task property to be assigned in parent components use app-task selector
  
  
  constructor(){}
 

  ngOnInit() {}

  
}

