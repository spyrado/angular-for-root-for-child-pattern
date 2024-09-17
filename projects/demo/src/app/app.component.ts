import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  template: `
    <h1>ForRoot / For Child Pattern</h1>
    <main>
      <router-outlet></router-outlet>
      <button routerLink="/lazy">Load Lazy</button>
    </main>
  `,
  standalone: true,
  imports: [RouterModule],
})
export class AppComponent {
  title = 'demo';
}
