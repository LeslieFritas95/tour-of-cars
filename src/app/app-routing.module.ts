import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CarDetailComponent } from './components/car-detail/car-detail.component';
import { CarListComponent } from './components/car-list/car-list.component';
import { DashboardComponent } from './dashboard/dashboard.component';


const routes: Routes = [
  {path: 'cars', component: CarListComponent},
  {path: 'dashboard', component: DashboardComponent},
  {path: '', redirectTo: '/cars', pathMatch: 'full'},
  {path: 'detail/:id', component: CarDetailComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
