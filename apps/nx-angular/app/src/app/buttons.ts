import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CounterService, LibButton } from '@org/lib';

@Component({
  selector: 'app-buttons',
  imports: [CommonModule, LibButton],
  templateUrl: './buttons.html',
  styleUrl: './buttons.css',
})
export class ButtonsComponent {
  count = 0;

  countService = inject(CounterService);


  ngOnInit() {
    this.countService.count$.subscribe((val) => (this.count = val));
  }

  increment() {
    this.countService.increment();
  }
  decrement() {
    this.countService.decrement();
  }
}
