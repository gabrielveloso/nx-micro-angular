import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NxWelcome } from './nx-welcome';

@Component({
  imports: [CommonModule, NxWelcome],
  selector: 'app-remote-remote-entry',
  template: `<app-remote-nx-welcome></app-remote-nx-welcome>`,
})
export class RemoteEntry {}
