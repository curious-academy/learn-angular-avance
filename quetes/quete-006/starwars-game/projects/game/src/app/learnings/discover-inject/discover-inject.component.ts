import { Component, EnvironmentInjector, OnInit, inject, runInInjectionContext } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export type ApiResult = {
  results: {
    name: string
  }[]
}

@Component({
  selector: 'game-discover-inject',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './discover-inject.component.html',
  styleUrls: ['./discover-inject.component.css']
})
export class DiscoverInjectComponent implements OnInit {
  people$ !: Observable<ApiResult>;
  private injector = inject(EnvironmentInjector);

  ngOnInit(): void {
    // <=  angular 15
    // this.injector.runInContext(() => {
    //   this.people$ = inject(HttpClient).get<ApiResult>('https://swapi.dev/api/people');
    // });

    // >= angular 16
    runInInjectionContext(this.injector, () => {
      this.people$ = inject(HttpClient).get<ApiResult>('https://swapi.dev/api/people');
    });
  }

}
