import { Injectable } from "@angular/core";
import { SearchType } from "../models";
import { BehaviorSubject, Observable } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class SearchService {
  private readonly state = new BehaviorSubject({ value: '' });

  search(item: SearchType): void {
    this.state.next(item);
  }

  get asObservable(): Observable<SearchType> {
    return this.state.asObservable();
  }
}
