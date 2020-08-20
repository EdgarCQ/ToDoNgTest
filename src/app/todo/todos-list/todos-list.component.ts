import { Component, OnInit } from '@angular/core';
import { TaskService } from '../../services/task.service';
import { Task } from '../../models/task';

@Component({
  selector: 'app-todos-list',
  templateUrl: './todos-list.component.html',
  styles: []
})
export class TodosListComponent implements OnInit {
  tasks: Task[];
  constructor(public taskServ: TaskService) { }

  ngOnInit() {

    this.tasks = this.taskServ.getTasks();
  }

}
