import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { Todo } from './todo';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, 
    FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})

export class AppComponent {
  title = 'to-do-list';

  task: string = '';
  completed: boolean = false;
  duration: number = 0;

  todos: Todo[] = [
    {
    task: "Do the laundry",
    completed: false,
    duration: 120,
    },
    {
    task: "Wash the dishes",
    completed: false,
    duration: 30,
    },
    {
      task: "Pet the cats",
    completed: true,
    duration: 15,
    }
  ];

}
