import { Component, computed, effect, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'game-discover-signals',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './discover-signals.component.html',
  styleUrls: ['./discover-signals.component.css']
})
export class DiscoverSignalsComponent {
  count = signal<number>(0);
  calcul = computed(() => this.count() * 2);

  effect = effect(() => {
    console.info('effect count', this.count());
    console.info('effect calcul', this.calcul());
  });

  ngOnInit(): void {
    this.count.set(12);
  }

  add(): void {
    this.count.update(value => value + 1);
  }

  remove(): void {
    this.count.update(value => value - 1);
  }

  debug(): void {
    console.info('refresh');
  }
}
