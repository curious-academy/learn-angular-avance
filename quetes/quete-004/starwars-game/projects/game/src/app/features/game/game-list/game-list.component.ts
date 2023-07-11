import { Component, OnDestroy, OnInit, inject } from '@angular/core';
import { Observable, Subscription, concatMap, switchMap } from 'rxjs';
import { GameDto } from '../../../core/models/game.dto';
import { GameService } from '../services/game.service';
import { SearchService } from '../../../shared/ui/search/services';

@Component({
  selector: 'game-game-list',
  templateUrl: './game-list.component.html',
  styleUrls: ['./game-list.component.css']
})
export class GameListComponent implements OnInit, OnDestroy {
  private readonly searchService = inject(SearchService);
  games: GameDto[] = [];
  searchItem = '';
  private subscription = new Subscription();

  constructor(private gameService: GameService) { }

  ngOnInit(): void {
    this.subscription.add(
      this.searchService.asObservable.pipe(
        switchMap(item => this.gameService.getAll(item.value, 3))
      )
      .subscribe(items => {
        this.games = items;
      })
    );
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
