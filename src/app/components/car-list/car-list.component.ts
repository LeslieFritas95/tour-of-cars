import { Component, OnInit } from '@angular/core';
import { Car } from 'src/app/model/car';
import { CarApiService } from './services/car-api.service';

@Component({
  selector: 'app-car-list',
  templateUrl: './car-list.component.html',
  styleUrls: ['./car-list.component.scss']
})
export class CarListComponent implements OnInit {

  carsArray: Car[] = [];

  constructor(private carService: CarApiService) { }

  ngOnInit(): void {
    this.getCars()
  }

  getCars(): void{
    this.carService.getCars().subscribe({
      next: cars => this.carsArray = cars,
      error: err => console.log(err),
    })
  }


}
