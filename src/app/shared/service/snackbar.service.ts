import { Injectable } from "@angular/core";
import { MatSnackBar } from "@angular/material/snack-bar";

@Injectable({
    providedIn: 'root'
})
export class SnackbarrService{
    constructor(private _snackbar: MatSnackBar){

    }

    openSnackbar(msg : string){
        this._snackbar.open(msg, 'Close', {
            duration: 2500,
            horizontalPosition: 'center',
            verticalPosition: 'bottom'
        })
    }
}