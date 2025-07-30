import { CommonModule } from '@angular/common';
import { Component, inject } from '@angular/core';
import { CounterService } from '@org/lib';

@Component({
  selector: 'app-remote-counter',
  imports: [CommonModule],
  standalone: true,
  templateUrl: './counter.html',
  styleUrl: './counter.css'
})
export class CounterComponent {

  counterService = inject(CounterService); 

}
