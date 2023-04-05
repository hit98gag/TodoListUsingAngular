import { Component } from '@angular/core';


interface Task {
  isSelected: any;
  id: number;
  name: string;
  isCompleted: boolean;
  isEditing: boolean;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Todo List';
  tasks: Task[] = [];
  newTaskName = '';
  orderedList = false;


  addTask() {
    if (this.newTaskName.trim() !== '') {
      const newTask: Task = {
        id: this.tasks.length + 1,
        name: this.newTaskName,
        isCompleted: false,
        isEditing: false,
        isSelected: false
        
      };
      this.tasks.push(newTask);
      this.newTaskName = '';
    }
  }

  removeTask(taskId: number) {
    this.tasks = this.tasks.filter(task => task.id !== taskId);
  }

  removeAllTasks() {
    this.tasks = [];
  }

  editTask(task: Task) {
    task.isEditing = true;
  }

  saveTask(task: Task) {
    task.isEditing = false;
  }

  toggleTaskCompletion(task: Task) {
    task.isCompleted = !task.isCompleted;
  }
  toggleList() {
    this.orderedList = !this.orderedList;
  }

  removeSelectedTasks() {
    this.tasks = this.tasks.filter(task => !task.isSelected);
  }

  markTaskAsCompleted(task: Task) {
    task.isCompleted = true;
  }
  
}
