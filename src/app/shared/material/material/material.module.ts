import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {MatCardModule} from "@angular/material/card"
import {MatButtonModule} from "@angular/material/button"
import {MatDividerModule} from "@angular/material/divider"
import {MatSnackBarModule} from "@angular/material/snack-bar"



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    MatCardModule,
    MatButtonModule,
    MatDividerModule,
    MatSnackBarModule
  ],
  exports: [
    MatCardModule,
    MatButtonModule,
    MatDividerModule,
    MatSnackBarModule
  ]
})
export class MaterialModule { }
