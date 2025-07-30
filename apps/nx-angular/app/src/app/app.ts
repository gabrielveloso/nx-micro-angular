import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { ButtonsComponent } from "./buttons";

@Component({
  imports: [RouterModule, ButtonsComponent],
  selector: 'app-root',
  templateUrl: './app.html',
  styleUrl: './app.scss',
})
export class App {
  protected title = 'app';
}
