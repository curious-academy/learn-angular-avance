import { Injectable, inject } from "@angular/core";
import { PeopleLayer } from "../infrastructures/people.layer";
import { GetAll } from "../contracts";
import { Person } from "../models";
import { Observable, map } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class PeopleBusiness implements GetAll<Person> {
  private layer = inject(PeopleLayer);

  getAll(): Observable<Person[]> {
    // tout le code fonctionnel va être ici
    return this.layer.getAll().pipe(
      map(items => [])
      // tous les operateurs
    );
  }
}
