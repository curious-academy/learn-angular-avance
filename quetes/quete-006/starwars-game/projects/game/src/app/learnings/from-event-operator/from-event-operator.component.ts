import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ElementRef } from '@angular/core';
import { AfterViewInit } from '@angular/core';
import { ViewChild } from '@angular/core';
import { Observable, concatMap, fromEvent, interval, mergeMap, switchMap, take, tap } from 'rxjs';

@Component({
  selector: 'game-from-event-operator',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './from-event-operator.component.html',
  styleUrls: ['./from-event-operator.component.css']
})
export class FromEventOperatorComponent implements AfterViewInit {
  timer$ !: Observable<unknown>;;
  @ViewChild('toClick') button !: ElementRef<HTMLButtonElement>;

  ngAfterViewInit(): void {
    // this.timer$ = fromEvent(this.button.nativeElement, 'click').pipe(
    //   tap(item => console.info('tap', item)),
    //   mergeMap(() => interval(1000)),
    //   tap(item => console.info('tap 2', item))
    // );

    // this.timer$ = fromEvent(this.button.nativeElement, 'click').pipe(
    //   tap(item => console.info('tap', item)),
    //   concatMap(() => interval(1000).pipe(take(4))),
    //   tap(item => console.info('tap 2', item))
    // );

    this.timer$ = fromEvent(this.button.nativeElement, 'click').pipe(
      tap(item => console.info('tap', item)),
      switchMap(() => interval(1000)),
      tap(item => console.info('tap 2', item))
    );

    // this.timer$.subscribe(() => {
    //   interval(1000).subscribe(item => {
    //     console.info('timer', item);
    //   });
    // });
  }

  toLog(): void {
    console.log('refresh');
  }
}
