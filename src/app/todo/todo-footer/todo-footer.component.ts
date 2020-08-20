import { Component, OnInit } from '@angular/core';
import { Task } from '../../models/task';
import { TaskService } from '../../services/task.service';
@Component({
  selector: 'app-todo-footer',
  templateUrl: './todo-footer.component.html',
  styles: []
})
export class TodoFooterComponent implements OnInit {
  tasks: Task[];
  constructor(public taskserv: TaskService) { }

  ngOnInit() {
  
  }

  deleteAllTask() {
    this.taskserv.deleteAll();
  }
}
