import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UserListComponent } from './features/user/user-list/user-list.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { SideBarComponent } from './shared/components/side-bar/side-bar.component';
import { DiscoverInjectComponent } from './learnings/discover-inject/discover-inject.component';
import { DiscoverSignalsComponent } from './learnings/discover-signals/discover-signals.component';

@Component({
    selector: 'game-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css'],
    standalone: true,
    imports: [
      HeaderComponent,
      SideBarComponent,
      UserListComponent,
      RouterOutlet
    ]
})
export class AppComponent {
  title = 'game';
}
