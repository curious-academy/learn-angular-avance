import { Injectable } from "@angular/core";
import { Observable, of } from "rxjs";
import { GetAll } from "../contracts";

@Injectable({
  providedIn: 'root'
})
export class PeopleLayer implements GetAll<{}> {
  getAll(): Observable<{}[]> {
    //return of([]);
    throw new Error('Not implemented');
  }
}
