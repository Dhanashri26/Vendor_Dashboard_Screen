import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { BehaviorSubject, Observable, throwError } from 'rxjs';
import { catchError, finalize, tap } from 'rxjs/operators';

export interface GridColumn {
  field: string;
  header: string;
  align?: string;
  color?: string;
  width?: number;
  type?: string;
}

export interface GridRow {
  [key: string]: any;
  selected?: boolean;
}

export interface GridData {
  columns: GridColumn[];
  rows: GridRow[];
}

@Injectable({
  providedIn: 'root',
})
export class DataService {
  private readonly API_URL = 'https://01.fy25ey01.64mb.io/';

  constructor(private http: HttpClient) {}

  fetchGridData(): Observable<GridData> {
    return this.http.get<GridData>(this.API_URL).pipe(catchError(this.handleError));
  }

  private handleError(error: HttpErrorResponse) {
    let errorMessage = 'Something bad happened; please try again later.';
    if (error.error instanceof ErrorEvent) {
      // A client-side or network error occurred. Handle it accordingly.
      errorMessage = 'An error occurred:' + error.error.message;
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      errorMessage =
        `Backend returned code ${error.status}, ` +
        `body was: ${JSON.stringify(error.error)}`;
    }
    // Return an observable with a user-facing error message.
    return throwError(() => errorMessage);
  }

}
