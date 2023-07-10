import { Component } from '@angular/core';
import { BehaviorSubject, from, of } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'game-behaviorsubject-and-co',
  templateUrl: './behaviorsubject-and-co.component.html',
  styleUrls: ['./behaviorsubject-and-co.component.css']
})
export class BehaviorsubjectAndCoComponent {
  subject = new BehaviorSubject<number>(0);

  ngOnInit(): void {
    this.subject.subscribe({
      next: (v) => console.info(`observerA: ${v}`)
    });


    this.subject.subscribe({
      next: (v) => console.info(`observerB: ${v}`)
    });
  }

  emitData(value:number): void {
    this.subject.next(value);

    console.info('value', this.subject.value);
  }
}
