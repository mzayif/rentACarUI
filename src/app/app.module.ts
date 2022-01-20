
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ToastrModule } from "ngx-toastr";

import { CarouselModule } from 'primeng/carousel';
import { PasswordModule } from 'primeng/password';
import { CardModule } from 'primeng/card';
import { DataViewModule } from 'primeng/dataview';
import { PanelModule } from 'primeng/panel';
import { InputTextModule } from 'primeng/inputtext';
import { RatingModule } from 'primeng/rating';
import { ButtonModule } from 'primeng/button';
import { TabViewModule } from 'primeng/tabview';
import { TabMenuModule } from 'primeng/tabmenu';
import { DropdownModule } from 'primeng/dropdown';
import { DialogModule } from 'primeng/dialog';
import { RippleModule } from 'primeng/ripple';
import { MenubarModule } from 'primeng/menubar';


import { BrandService } from './services/brand.service';
import { CarService } from './services/car.service';
import { ColorService } from './services/color.service';

import { BrandComponent } from './components/brand/brand.component';
import { ColorComponent } from './components/color/color.component';
import { CarComponent } from './components/car/car.component';
import { NaviComponent } from './components/navi/navi.component';
import { HomeComponent } from './components/home/home.component';
import { CarDteailComponent } from './components/car/car-dteail/car-dteail.component';
import { BrandDetailComponent } from './components/brand/brand-detail/brand-detail/brand-detail.component';
import { ColorDetailComponent } from './components/color/color-detail/color-detail/color-detail.component';
import { BrandAddComponent } from './components/brand/brand-add/brand-add.component';
import { ColorAddComponent } from './components/color/color-add/color-add.component';
import { CarAddComponent } from './components/car/car-add/car-add.component';
import { CarSegmentComponent } from './components/carSegment/car-segment/car-segment.component';
import { CarSegmentAddComponent } from './components/carSegment/car-segment-add/car-segment-add.component';

@NgModule({
  declarations: [
    AppComponent,
    BrandComponent,
    ColorComponent,
    CarComponent,
    NaviComponent,
    HomeComponent,
    CarDteailComponent,
    BrandDetailComponent,
    ColorDetailComponent,
    BrandAddComponent,
    ColorAddComponent,
    CarAddComponent,
    CarSegmentComponent,
    CarSegmentAddComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    HttpClientModule,
    CarouselModule,
    PasswordModule,
    CardModule,
    DataViewModule,
    PanelModule,
    InputTextModule,
    RatingModule,
    ButtonModule,
    TabViewModule,
    TabMenuModule,
    DropdownModule,
    DialogModule,
    RippleModule,
    MenubarModule,
    FormsModule,
    ReactiveFormsModule,
    ToastrModule.forRoot({
      positionClass:"toast-bottom-right"
    })
  ],
  providers: [ColorService, CarService, BrandService],
  bootstrap: [AppComponent]
})
export class AppModule { }
