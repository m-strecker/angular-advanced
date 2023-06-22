import { Component } from '@angular/core';
import { TasksServiceService } from '../tasks-service.service';
import { Task } from '../task';
import { HttpErrorResponse } from '@angular/common/http';
import { FormGroup, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription } from 'rxjs';



@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent {

  form!:FormGroup;
  time!: FormControl;
  subscription!: Subscription;

  constructor(private service: TasksServiceService, private router: Router){
    this.form = new FormGroup({
      title: new FormControl(),
      description: new FormControl(),
      date: new FormControl(),
      time: new FormControl(),
      priority_level: new FormControl(),
      category: new FormControl(),
      progress_level: new FormControl(),
    });
    this.time = new FormControl(); // Initialize the time FormControl
  }

/*
add_task(){
  let x = <Task>this.form.value;
  x.time = x.date + " " + this.time.value;
  this.service.addTask(x).subscribe((result: any)=>{
    console.log(result.task.title+ " has been added successfully")},
    (err: HttpErrorResponse)=>{
      console.log(err);
  });
  this.form.reset();
  this.router.navigate(['home']);
}

*/

add_task() {
  let x = <Task>this.form.value;
  x.time = x.date + ' ' + this.time.value;
  this.subscription = this.service.addTask(x).subscribe({
    next: (result: any) => {
      console.log(result.task.title + ' has been added successfully');
    },
    error: (err: HttpErrorResponse) => {
      console.log(err);
    }
  });
  this.form.reset();
 // this.router.navigate(['home']);
}

ngOnDestroy() {
  // Unsubscribe from the subscription to avoid memory leaks
  if (this.subscription) {
    this.subscription.unsubscribe();
  }
}

}
