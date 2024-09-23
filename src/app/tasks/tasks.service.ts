import { Injectable } from "@angular/core";
import { NewTaskData } from "./task/task-data.model";

@Injectable({ providedIn: 'root'})
export class TasksService {
    private tasks = [{
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
    }];

    constructor() {
        const tasks = localStorage.getItem('tasks');

        if (tasks) {
            this.tasks = JSON.parse(tasks);
        }
    }

    getUserTasks(userId: string) {
        return this.tasks.filter(task => task.userId === userId)
    }

    addTask(taskData: NewTaskData, userId: string) {
        this.tasks.unshift({
            id: new Date().getTime.toString(),
            userId: userId,
            title: taskData.title,
            summary: taskData.summary,
            dueDate: taskData.dueDate
        });
        this.saveTasks();
    }

    removeTask(taskId: string) {
        this.tasks = this.tasks.filter(task => task.id !== taskId);
        this.saveTasks();
    }

    private saveTasks() {
        localStorage.setItem('tasks', JSON.stringify(this.tasks))
    }
}