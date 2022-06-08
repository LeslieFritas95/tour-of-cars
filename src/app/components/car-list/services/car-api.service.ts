import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { CARS } from 'src/app/model/mock-cars';

@Injectable({
  providedIn: 'root'
})
export class CarApiService {


  constructor() { }

  getCars() {
    const cars = CARS;
    return of(cars)
  }
}
