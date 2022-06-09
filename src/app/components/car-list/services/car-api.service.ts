import { Injectable } from '@angular/core';
import { CARS } from 'src/app/model/mock-cars';
import { Observable, of } from 'rxjs';
import { Car } from 'src/app/model/car';
import { MessageService } from './message/message.service';

@Injectable({
  providedIn: 'root'
})
export class CarApiService {


  constructor(private messageService: MessageService) { }

  getCars(): Observable<Car[]> {
    const heroes = of(CARS);
    this.messageService.add('CarsService: fetched cars');
    return heroes;
  }

  getCar(id:number): Observable<Car>{
    const car = CARS.find(c => c.id === id)!;
    this.messageService.add('ID')
    return of(car)
  }



}
