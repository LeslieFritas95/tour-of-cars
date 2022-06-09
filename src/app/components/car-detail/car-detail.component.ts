import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Car } from 'src/app/model/car';
import { CarApiService } from '../car-list/services/car-api.service';

@Component({
  selector: 'app-car-detail',
  templateUrl: './car-detail.component.html',
  styleUrls: ['./car-detail.component.scss']
})
export class CarDetailComponent implements OnInit {

  car?: Car;

  constructor(private route: ActivatedRoute, private carService: CarApiService, private location: Location) { }

  ngOnInit(): void {
    this.getCar();
  }

  getCar(){
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.carService.getCar(id).subscribe({
      next: car => this.car = car,
      error: err => console.log(err)
    })
  }

  goBack(){
    this.location.back()
  }
}
