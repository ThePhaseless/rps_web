import { Injectable } from '@angular/core';
import {
  AbstractControl,
  AsyncValidator,
  ValidationErrors,
} from '@angular/forms';
import { catchError, map, Observable, of } from 'rxjs';
import { DefaultService } from '../../../api';

@Injectable({ providedIn: 'root' })
export class GameExistsValidator implements AsyncValidator {
  constructor(private apiService: DefaultService) {}
  validate(control: AbstractControl): Observable<ValidationErrors | null> {
    return this.apiService.getGameGameGameIdGet(control.value).pipe(
      map(() => null),
      catchError(() => of({ gameExists: true }))
    );
  }
}
