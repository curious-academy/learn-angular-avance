import { Injectable, computed, signal } from '@angular/core';
import { User } from '../models';
import { ApiPeopleResult } from './models';

@Injectable({
  providedIn: 'root'
})
export class GetAllUserService {
  store = signal<ApiPeopleResult>({ results: [] });
  users = computed(() => this.store().results.map((user, index) => ({ id: index, name: user.name })));

  setAll(): void {
    fetch('https://swapi.dev/api/people')
    .then(response => response.json())
    .then(data => {
      this.store.set(data);
    });
  }
}
