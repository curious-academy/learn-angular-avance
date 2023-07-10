import { Component } from '@angular/core';
import { Subject, from, of } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

@Component({
  selector: 'game-subject-with-takeuntil',
  templateUrl: './subject-with-takeuntil.component.html',
  styleUrls: ['./subject-with-takeuntil.component.css']
})
export class SubjectWithTakeuntilComponent {
  monObs$ = of([1, 2, 3, 4, 5]);
  monObsBis$ = from([1, 2, 3, 4, 5]);
  flagToDestroy = new Subject<boolean>();

  ngOnInit(): void {
    this.monObs$.pipe(
      takeUntil(this.flagToDestroy)
    ).subscribe();

    this.monObsBis$
    .pipe(
      takeUntil(this.flagToDestroy)
    )
    .subscribe();
  }

  ngOnDestroy(): void {
    this.flagToDestroy.next(true);
    this.flagToDestroy.complete();
  }
}
