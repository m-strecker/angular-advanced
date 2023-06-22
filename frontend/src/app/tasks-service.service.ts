import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class TasksServiceService {

  constructor(private http: HttpClient) { }

  //method that sends a get request to the API end point and returns all the tasks
getTasks() {
  const headers = new HttpHeaders({'Content-Type':'application/json', 'Accept':'application/json'});
  const options = { headers: headers};

  return this.http.get('http://localhost:3000/tasks/get_all', options);
}


addTask(form:any){
  
  
  const headers = new HttpHeaders({'Content-Type': 'application/json', 'Accept':'application/json'});
  const options = {headers:headers};

  return this.http.post ('http://localhost:3000/tasks/add_task', JSON.stringify(form), options);
}

}
