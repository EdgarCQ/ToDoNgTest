import { Component, OnInit } from '@angular/core';
import { TaskService } from '../../services/task.service';
import { Task } from '../../models/task';

@Component({
  selector: 'app-todo-add',
  templateUrl: './todo-add.component.html',
  styles: []
})


export class TodoAddComponent implements OnInit {
  tasks: Task[];
  constructor( public taskServ: TaskService) { }

  ngOnInit() {
    this.tasks = this.taskServ.getTasks();
  }

  addTask(value) {
    this.taskServ.addTask({nombre: value, complete : false});  window.location.reload()}
   
}
