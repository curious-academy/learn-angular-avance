import { Component, Input, ViewEncapsulation } from '@angular/core';
import { Tile, TileCell, changeStateCell } from './models';

@Component({
  selector: 'game-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.css'],
  encapsulation: ViewEncapsulation.None
})
export class GridComponent {

  @Input() set tiles(values: Tile[]) {
    this.cells = values.map(tile => {
      const cell = { ... tile, css: '' };

      changeStateCell(cell, tile.isRevealed);

      return cell;
    });
  }
  cells: TileCell[] = [];

  trackByFn(index: number, item: TileCell) {
    return item.id;
  }

}
