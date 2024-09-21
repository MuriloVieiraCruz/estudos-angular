import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TaskComponent } from "./task/task.component";
import { NewTaskComponent } from "./new-task/new-task.component";
import { NewTaskData } from './task/task-data.model';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [TaskComponent, NewTaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css'
})

export class TasksComponent {

  @Input({ required: true }) userId!: string;
  @Input({ required: true }) name!: string;
  @Output() createTask = new EventEmitter<string>();

  isAddingTask = false;

  tasks = [{
    id: 't1',
    userId: 'u1',
    title: 'Learn Angular',
    summary: 'Learn all the basic and advanced topics of Angular & how to apply them',
    dueDate: '2024-12-30'
  },
  {
    id: 't2',
    userId: 'u1',
    title: 'Do anything',
    summary: 'Do some things',
    dueDate: '2024-10-30'
  },
  {
    id: 't3',
    userId: 'u2',
    title: 'Manipulate my project',
    summary: 'Implement security concepts in the project',
    dueDate: '2024-09-30'
  }]

  get selectedUserTask() {
    return this.tasks.filter(task => task.userId === this.userId)
  }

  onCompleteTask(taskId: string) {
    this.tasks = this.tasks.filter(task => task.id !== taskId)
  }

  onStartAddTask() {
    //this.createTask.emit(this.userId)
    this.isAddingTask = true;
  }

  onCancelAddTask() {
    this.isAddingTask = false;
  }

  onAddTask(taskData: NewTaskData) {
    this.tasks.unshift({
      id: new Date().getTime.toString(),
      userId: this.userId,
      title: taskData.title,
      summary: taskData.summary,
      dueDate: taskData.dueDate
    });
    this.isAddingTask = false;
  }
}
