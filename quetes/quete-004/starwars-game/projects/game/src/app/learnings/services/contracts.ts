import { Observable } from "rxjs";

/**
 * Contract to get all data as an observable
 */
export interface GetAll<T> {
  /**
   * Gets observable to get all data
   */
  getAll(): Observable<T[]>;
}
