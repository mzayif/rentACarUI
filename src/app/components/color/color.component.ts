import { ColorService } from './../../services/color.service';
import { Component, OnInit } from '@angular/core';
import { ColorListModel } from 'src/app/models/colors/colorListModel';

@Component({
  selector: 'app-color',
  templateUrl: './color.component.html',
  styleUrls: ['./color.component.css']
})
export class ColorComponent implements OnInit {

  colors: ColorListModel[] = [];
  dataLoaded: boolean = false;

  constructor(private coloService: ColorService) { }

  ngOnInit(): void {
    this.getAll();
  }

  getAll(){
    this.coloService.getAll().subscribe(response=>{
      this.dataLoaded = false;
      if (response.success) {
        this.colors = response.data;
        console.warn(response.data);
      }
      
      this.dataLoaded = true;
    })
  }

}
