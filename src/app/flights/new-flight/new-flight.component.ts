import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-new-flight',
  templateUrl: './new-flight.component.html',
  styleUrls: ['./new-flight.component.scss']
})
export class NewFlightComponent implements OnInit {

  constructor(private dialogRef: MatDialogRef<NewFlightComponent>) { }

  ngOnInit(): void {
  }

}
