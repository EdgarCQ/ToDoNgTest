import { Component, OnInit,Input,} from '@angular/core';
import { Task } from '../../models/task';
import { TaskService } from '../../services/task.service';
@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styles: []
})

export class TodoItemComponent implements OnInit {
  @Input()  task: Task;
 
  constructor( public taskserv: TaskService) { }

  ngOnInit() {

  }

  deleteTask(task: Task){
    this.taskserv.deleteTask(task);
  }
  change(task: Task){
    this.taskserv.changeValueCompleted(task);
  }

}
