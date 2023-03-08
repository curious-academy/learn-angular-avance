import { Component, Input } from '@angular/core';
import { GameDto } from '../../../core/models/game.dto';

@Component({
  selector: 'game-game-row',
  templateUrl: './game-row.component.html',
  styleUrls: ['./game-row.component.css'],
  // changeDetection: ChangeDetectionStrategy.OnPush
})
export class GameRowComponent {
  @Input() item!: GameDto;

  get runChangeDetection() {
    console.warn('TodoComponent - Checking the view');
    return true;
  }
}
