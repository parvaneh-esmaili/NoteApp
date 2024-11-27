import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';
import { AliComponent } from "./pages/ali/ali.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, AliComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'NoteApp';
}
