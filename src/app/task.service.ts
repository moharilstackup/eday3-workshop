import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor() { }

  getTasks() {
    return [ 
      {"description" : "running", "priority" : "high"},
      {"description" : "walking", "priority" : "medium"},
      {"description" : "sleeping", "priority" : "low"}
    ];
  }

  postService() {

  }
  
}
