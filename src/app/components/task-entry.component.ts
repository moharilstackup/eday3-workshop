import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { TaskService } from '../task.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-task-entry',
  templateUrl: './task-entry.component.html',
  styleUrls: ['./task-entry.component.css']
})
export class TaskEntryComponent implements OnInit {

  @ViewChild('taskEntryForm')
  taskEntryForm: NgForm;

  // @Input()
  // entry: string;
  public tasks = [];


  constructor(private _taskService: TaskService, private router: Router ) { }

  ngOnInit() {
    this.tasks = this._taskService.getTasks();
  }

  taskEntry() {
    console.log("taskEntry()", this.taskEntryForm);
    // for (let i in this.taskEntryForm.value) {
    //   console.log('i=',i,' ,v=', this.taskEntryForm.value[i]);
    // } 
    // this.clicked.next("This is event emitter clicked!!");
    //this.taskList.push(this.taskEntryForm.value);
    this.tasks.push(this.taskEntryForm.value);
    this.taskEntryForm.resetForm();
    this.router.navigate(['/thankyou']);
  }

}
