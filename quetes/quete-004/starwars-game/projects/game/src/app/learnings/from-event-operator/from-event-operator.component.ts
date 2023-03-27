import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ElementRef } from '@angular/core';
import { AfterViewInit } from '@angular/core';
import { ViewChild } from '@angular/core';
import { Observable, fromEvent } from 'rxjs';

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
    this.timer$ = fromEvent(this.button.nativeElement, 'click');
  }

  toLog(): void {
    console.log('refresh');
  }
}
