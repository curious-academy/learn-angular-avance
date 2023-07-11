import { Component } from '@angular/core';
import { Observable, shareReplay } from 'rxjs';

@Component({
  selector: 'game-obs-with-sharereplay',
  templateUrl: './obs-with-sharereplay.component.html',
  styleUrls: ['./obs-with-sharereplay.component.css']
})
export class ObsWithSharereplayComponent {
  ngOnInit(): void {
    const source$ = new Observable<number>(observer => {
      console.info('START Observable');

      observer.next(1);
      observer.next(2);
      observer.next(3);

      console.info('STOP Observable');
    })
    .pipe(
      shareReplay(2)
    );

    const callback = (value: number) => {
      console.info('callback', value);
    };

    source$.subscribe(callback);
    source$.subscribe(callback);
  }
}
