import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from './../environments/environment';


@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor(private http: HttpClient) { }

  getTasks() {
    return [ 
      {"description" : "running", "priority" : "high"},
      {"description" : "walking", "priority" : "medium"},
      {"description" : "sleeping", "priority" : "low"}
    ];
  }

  postTask(taskEntry) {
    return this.http.post(`${environment.api_url}thought`, taskEntry);
  }
  
}
