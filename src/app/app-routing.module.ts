import { CarAddComponent } from './components/car/car-add/car-add.component';
import { ColorAddComponent } from './components/color/color-add/color-add.component';
import { BrandAddComponent } from './components/brand/brand-add/brand-add.component';
import { ColorDetailComponent } from './components/color/color-detail/color-detail/color-detail.component';
import { BrandDetailComponent } from './components/brand/brand-detail/brand-detail/brand-detail.component';
import { HomeComponent } from './components/home/home.component';
import { CarComponent } from './components/car/car.component';
import { CarDteailComponent } from './components/car/car-dteail/car-dteail.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BrandComponent } from './components/brand/brand.component';
import { ColorComponent } from './components/color/color.component';

const routes: Routes = [
  { path: 'car/add', component: CarAddComponent },
  { path: 'car/:carId', component: CarDteailComponent },
  { path: "car", component: CarComponent },
  { path: 'brand/add', component: BrandAddComponent },
  { path: 'brand/:brandId', component: BrandDetailComponent },
  { path: "brands", component: BrandComponent },
  { path: "color/add", component: ColorAddComponent },
  { path: 'color/:colorId', component: ColorDetailComponent },
  { path: "colors", component: ColorComponent },
  { path: "", component: HomeComponent },
  { path: "home", component: HomeComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
