import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Flight } from 'src/app/models/flight.model';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent {
  flight!: Flight;

  constructor(private dialogRef: MatDialogRef<DetailsComponent>,
              @Inject(MAT_DIALOG_DATA) private data: Flight,
              private router: Router) {
    this.flight = data;
  }

  closeDialog() {
    this.dialogRef.close();
  }

  goToEditFlight() {
    this.closeDialog();
    this.router.navigate(['/dashboard/flights', this.flight.key])
  }
}
