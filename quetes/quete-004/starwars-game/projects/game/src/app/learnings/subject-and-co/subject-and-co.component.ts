import { Component } from '@angular/core';
import { Subject } from 'rxjs';

@Component({
  selector: 'game-subject-and-co',
  templateUrl: './subject-and-co.component.html',
  styleUrls: ['./subject-and-co.component.css']
})
export class SubjectAndCoComponent {
  subject = new Subject();

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
  }
}
