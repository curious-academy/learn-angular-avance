import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { api } from 'projects/game/src/environments/api';
import { Observable, shareReplay } from 'rxjs';
import { GameDto } from '../../../core/models/game.dto';

@Injectable()
export class GameService {

  constructor(private httpClient: HttpClient) { }

  getAll(searchValue: string, nbItems: number = 100): Observable<GameDto[]> {
    return this.httpClient.get<GameDto[]>(api.games.url + '?max=' + nbItems).pipe(
      shareReplay(1)
    );
  }
}
