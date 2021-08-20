import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';

@Injectable({
  providedIn: 'root'
})
export class AlertserviceService {
  constructor(private snackBar: MatSnackBar) { }

  Success(message: string) {
    this.snackBar.open(message, '', {
      duration: 3000, horizontalPosition: 'center',
      verticalPosition: 'top',panelClass: ["alertsuccessclass"]
    });
  }
  Fail(message: string) {
    this.snackBar.open(message, '', {
      duration: 1000, horizontalPosition: 'center',
      verticalPosition: 'top', panelClass: ["alertfailclass"]
    });
  }
}
