import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TaskService } from '../task.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-task-detail',
  templateUrl: './task-detail.component.html',
  styleUrls: ['./task-detail.component.css'],
  imports: [CommonModule]
})
export class TaskDetailComponent implements OnInit {
  task: any = null;
  errorMessage: string = '';

  constructor(private route: ActivatedRoute, private taskService: TaskService) {}

  ngOnInit(): void {
    const taskId = this.route.snapshot.paramMap.get('id');
    if (taskId) {
      this.loadTask(taskId);
    }
  }

  loadTask(id: string): void {
    this.taskService.getTask(id).subscribe(
      (task) => {
        this.task = task;
      },
      (error) => {
        this.errorMessage = 'Error fetching task details.';
        console.error(error);
      }
    );
  }
}