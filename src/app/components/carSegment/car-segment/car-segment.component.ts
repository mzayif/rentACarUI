import { CarSegmentService } from './../../../services/car-segment.service';
import { Component, OnInit } from '@angular/core';
import { CarSegmentListModel } from 'src/app/models/carSegments/segmentListModel';

@Component({
  selector: 'app-car-segment',
  templateUrl: './car-segment.component.html',
  styleUrls: ['./car-segment.component.css']
})
export class CarSegmentComponent implements OnInit {

  segments: CarSegmentListModel[] = [];
  dataLoaded: boolean = false;

  constructor(private carSegmentService: CarSegmentService) { }

  ngOnInit(): void {
    this.getBrands();
  }

  getBrands(){
    this.carSegmentService.getAll().subscribe(response=>{
      this.dataLoaded = false;
      if (response.success)
        this.segments = response.data;
      
      this.dataLoaded = true;
    })
  }

}
