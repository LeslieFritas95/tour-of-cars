import { Component, OnInit } from '@angular/core';
import { Car } from 'src/app/model/car';
import { CarApiService } from '../components/car-list/services/car-api.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
   cars: Car[] = [];

  constructor(private carService: CarApiService) { }

  ngOnInit(): void {
    this.getCars()
  }

  getCars(): void{
    this.carService.getCars().subscribe({
      next: cars => this.cars = cars.slice(1, 5),
      error: err => console.log(err)
    })
  }
}
