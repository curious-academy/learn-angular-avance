import { Component, OnDestroy, OnInit } from '@angular/core';
import { Tile } from '../../../shared/components/grid/models';
import { TileService } from '../services/tile.service';
import { Subject, takeUntil } from 'rxjs';

@Component({
  selector: 'game-new-one',
  templateUrl: './new-one.component.html',
  styleUrls: ['./new-one.component.css']
})
export class NewOneComponent implements OnInit, OnDestroy {
  tiles: Tile[] = [];
  private flagToDestroy = new Subject<boolean>();

  constructor(private tileService: TileService) { }

  ngOnInit(): void {
    this.tileService.loadAll()
    .pipe(
      takeUntil(this.flagToDestroy)
    )
    .subscribe(tiles => this.tiles = tiles);
  }

  ngOnDestroy(): void {
    this.flagToDestroy.next(true);
    this.flagToDestroy.complete();
  }
}
