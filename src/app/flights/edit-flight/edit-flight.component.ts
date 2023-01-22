import { AfterViewInit, Component, OnInit, ViewChild } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute, Router } from '@angular/router';
import { tap } from 'rxjs';
import { FlightsService } from 'src/app/core/services/flights.service';
import { Flight } from 'src/app/models/flight.model';
import { FlightFormComponent } from '../flight-form/flight-form.component';

@Component({
  selector: 'app-edit-flight',
  templateUrl: './edit-flight.component.html',
  styleUrls: ['./edit-flight.component.scss']
})
export class EditFlightComponent implements AfterViewInit {
  @ViewChild('flightForm') flightForm!: FlightFormComponent;
  flight?: Flight;

  constructor(private route: ActivatedRoute,
              private router: Router,
              private flightsService: FlightsService,
              private toast: MatSnackBar) {
  }

  ngAfterViewInit(): void {
    this.loadFlight();
  }

  loadFlight() {
    const key = this.route.snapshot.params['key'];
    this.flightsService.getFlight(key)
      .pipe(
        tap(flight => this.flightForm.setFlight(flight))
      ).subscribe(flight => this.flight = flight);
  }

  editFlight():void {
    this.flightsService.editFlight(this.flight?.key!, this.flightForm.form.value)
      .then(this.onEditSuccess.bind(this), this.onError.bind(this));
  }

  private onEditSuccess() {
    this.router.navigate(['/dashboard']);
    this.toast.open('Flight has been seccessfully edited', '', {panelClass: 'toast-success'});
  }

  private onError(error: any) {
    this.toast.open(error.message, '', {panelClass: 'toast-error'});
  }

  removeFlight() {
    this.flightsService.removeFlight(this.flight?.key!)
      .then(this.onRemoveSuccess.bind(this), this.onError.bind(this))
  }

  private onRemoveSuccess() {
    this.router.navigate(['/dashboard']);
    this.toast.open('Flight has been seccessfully removed', '', {panelClass: 'toast-success'});
  }
}
