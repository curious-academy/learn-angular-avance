import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UserListComponent } from './features/user/user-list/user-list.component';

@Component({
    selector: 'game-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    standalone: true,
    imports: [UserListComponent, RouterOutlet]
})
export class AppComponent {
  title = 'game';
}
