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
import { TableModule } from 'primeng/table';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { ConfirmationService } from 'primeng/api';
import { MessageService } from 'primeng/api';
import { ToastModule } from 'primeng/toast';
import { CalendarModule } from 'primeng/calendar';
import { SliderModule } from 'primeng/slider';
import { MultiSelectModule } from 'primeng/multiselect';
import { ContextMenuModule } from 'primeng/contextmenu';
import { ProgressBarModule } from 'primeng/progressbar';
import { FileUploadModule } from 'primeng/fileupload';
import { ToolbarModule } from 'primeng/toolbar';
import { RadioButtonModule } from 'primeng/radiobutton';
import { InputNumberModule } from 'primeng/inputnumber';
import { InputTextareaModule } from 'primeng/inputtextarea';
import { StepsModule } from 'primeng/steps';




import { BrandService } from './services/brand.service';
import { CarService } from './services/car.service';
import { ColorService } from './services/color.service';

import { ColorComponent } from './components/color/color.component';
import { CarComponent } from './components/car/car.component';
import { NaviComponent } from './components/navi/navi.component';
import { HomeComponent } from './components/home/home.component';
import { CarDteailComponent } from './components/car/car-dteail/car-dteail.component';
import { BrandAddComponent } from './components/brand/brand-add/brand-add.component';
import { CarAddComponent } from './components/car/car-add/car-add.component';
import { CarSegmentComponent } from './components/carSegment/car-segment/car-segment.component';
import { CarSegmentAddComponent } from './components/carSegment/car-segment-add/car-segment-add.component';
import { BrandListComponent } from './components/brand/brand-list/brand-list.component';
import { BrandDetailComponent } from './components/brand/brand-detail/brand-detail.component';
import { CreditCardAddComponent } from './components/CreditCard/credit-card-add/credit-card-add.component';
import { CreditCardDetailComponent } from './components/CreditCard/credit-card-detail/credit-card-detail.component';
import { CreditCardListComponent } from './components/CreditCard/credit-card-list/credit-card-list.component';
import { IndividualCustomerAddComponent } from './components/customer/individual-customer-add/individual-customer-add.component';
import { CorporateCustomerAddComponent } from './components/customer/corporate-customer-add/corporate-customer-add.component';
import { CustomerListComponent } from './components/customer/customer-list/customer-list.component';
import { InvoiceAddComponent } from './components/invoice/invoice-add/invoice-add.component';
import { InvoiceDetailComponent } from './components/invoice/invoice-detail/invoice-detail.component';
import { InvoiceListComponent } from './components/invoice/invoice-list/invoice-list.component';
import { RentalAddComponent } from './components/rental/rental-add/rental-add.component';
import { RentalDetailComponent } from './components/rental/rental-detail/rental-detail.component';
import { RentalListComponent } from './components/rental/rental-list/rental-list.component';
import { CityComponent } from './components/city/city.component';
import { AdditionalServiceComponent } from './components/additionalServices/additional-service/additional-service.component';
import { CarMaintenanceDetailComponent } from './components/carMaintenance/car-maintenance-detail/car-maintenance-detail.component';
import { CarMaintenanceListComponent } from './components/carMaintenance/car-maintenance-list/car-maintenance-list.component';
import { CarDamagesComponent } from './components/car/car-damages/car-damages.component';
import { RentalStepsComponent } from './components/rental/rental-steps/rental-steps.component';



@NgModule({
  declarations: [
    AppComponent,
    ColorComponent,
    CarComponent,
    NaviComponent,
    HomeComponent,
    CarDteailComponent,
    BrandAddComponent,
    BrandDetailComponent,
    CarAddComponent,
    CarSegmentComponent,
    CarSegmentAddComponent,
    BrandListComponent,
    CreditCardAddComponent,
    CreditCardDetailComponent,
    CreditCardListComponent,
    IndividualCustomerAddComponent,
    CorporateCustomerAddComponent,
    CustomerListComponent,
    InvoiceAddComponent,
    InvoiceDetailComponent,
    InvoiceListComponent,
    RentalAddComponent,
    RentalDetailComponent,
    RentalListComponent,
    CityComponent,
    AdditionalServiceComponent,
    CarMaintenanceDetailComponent,
    CarMaintenanceListComponent,
    CarDamagesComponent,
    RentalStepsComponent
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
    TableModule,
    ConfirmDialogModule,
    ToastModule,
    CalendarModule,
    SliderModule,
    MultiSelectModule,
    ContextMenuModule,
    ProgressBarModule,
    FileUploadModule,
    ToolbarModule,
    RadioButtonModule,
    InputNumberModule,
    InputTextareaModule,
    StepsModule,
    
    DialogModule,
    RippleModule,
    MenubarModule,
    FormsModule,
    ReactiveFormsModule,
    ToastrModule.forRoot({
      positionClass:"toast-bottom-right"
    })
  ],
  providers: [ColorService, CarService, BrandService, MessageService, ConfirmationService],
  bootstrap: [AppComponent]
})
export class AppModule { }
