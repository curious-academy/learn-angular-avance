import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Observable, Subscription, catchError, finalize, map, of, tap } from 'rxjs';
import { PeopleBusiness } from '../services/businesses/people.business';

@Component({
  selector: 'game-rappel-promise-obs',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './rappel-promise.component.html',
  styleUrls: ['./rappel-promise.component.css']
})
export class RappelPromiseComponent {
  title = 'Rappel';
  score$ = of(12);
  // people$ = inject(PeopleBusiness).getAll();
  private subscription = new Subscription();

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

  ngOnInit(): void {
    console.info('--------------------');

    const callback = (item: string) => console.info(item);
    const promise = this.getPromise().then(callback);

    let observable$ = new Observable<string>(subscriber => {
      console.info('OBSERVABLE 0');

      subscriber.next('johny -> OBSERVABLE');

      // subscriber.error(new Error());

      setTimeout(() => {
        console.info('OBSERVABLE 1', this.title);
        subscriber.next('johny -> OBSERVABLE 2');
        subscriber.complete();
      }, 0);

      subscriber.next('johny -> OBSERVABLE 3');
    });

    observable$ = observable$.pipe(
      tap(callback),
      map(item => item + '...'),
      tap(callback),
      map(item => item.toLowerCase()),
      tap(callback),
      catchError(err => ('ERROR' + err)),
      finalize(() => console.info('YOUPI c\'est fini'))
    );

    this.subscription.add(
      observable$.subscribe(callback,
                          err => console.error(err),
                          () => console.info('finish !!'))
    ); // lazy

    this.subscription.add( observable$.subscribe() );

    console.info('********************');
  }

  getPromise(): Promise<string> {
    return new Promise<string>((resolve, reject) => { //eager
      console.info('PROMESSE 0');

      setTimeout(() => {
        console.info('PROMESSE 1', this.title);
        resolve('johny -> PROMESSE');
      }, 0);
    });
  }
}
