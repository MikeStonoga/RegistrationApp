import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatSnackBarModule} from "@angular/material/snack-bar";
import { MspSnackbarService } from './msp-snackbar.service';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatSnackBarModule
  ],
  providers: [
    MspSnackbarService
  ]
})
export class MspSnackbarModule { }
