import { Injectable } from '@angular/core';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { AngularFireDatabase } from '@angular/fire/compat/database';
import { Flight } from '../../models/flight.model';

@Injectable({
  providedIn: 'root'
})
export class FlightsService {
  private API_URL = '/flights'

  constructor(private db: AngularFireDatabase) {
  }

  public getFlights(): Observable<Flight[]> {
    return this.db.list<Flight>(this.API_URL).snapshotChanges()
      .pipe(
        map(response => response.map(FlightsService.assignKey))
      );
  }

  private static assignKey(flight: any) {
    return {
      ...flight.payload.val(),
      key: flight.key
    }
  }
}
