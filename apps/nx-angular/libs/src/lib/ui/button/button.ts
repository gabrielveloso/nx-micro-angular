import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'lib-button',
  imports: [],
  templateUrl: './button.html',
  styleUrl: './button.css'
})
export class LibButton {

  @Input() type: 'increment' | 'decrement' = 'increment';

  @Output() actionButton = new EventEmitter<void>();

  onIncrement() {
    this.actionButton.emit();
  }
  
  onDecrement() {
    this.actionButton.emit();
  }

}
