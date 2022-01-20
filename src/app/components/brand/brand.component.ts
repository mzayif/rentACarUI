import { BrandService } from './../../services/brand.service';
import { Component, OnInit } from '@angular/core';
import { BrandListModel } from 'src/app/models/brands/brandListModel';

@Component({
  selector: 'app-brand',
  templateUrl: './brand.component.html',
  styleUrls: ['./brand.component.css']
})
export class BrandComponent implements OnInit {

  brands: BrandListModel[] = [];
  dataLoaded: boolean = false;

  constructor(private brandService: BrandService) { }

  ngOnInit(): void {
    this.getBrands();
  }

  getBrands(){
    this.brandService.getAll().subscribe(response=>{
      this.dataLoaded = false;
      if (response.success)
        this.brands = response.data;
      
      this.dataLoaded = true;
    })
  }
}
