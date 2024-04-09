import { Component, OnInit } from '@angular/core';
import { ClotheslistserviceService } from '../service/clotheslistservice.service';
@Component({
  selector: 'app-objectslist',
  templateUrl: './objectslist.component.html',
  styleUrls: ['./objectslist.component.scss']
})
export class ObjectslistComponent implements OnInit{
  clotheslist: any[] = []  
  constructor(private clotheslistservice: ClotheslistserviceService) {}
  ngOnInit(): void {
    this.callClothes();
  }
  callClothes() {
    this.clotheslistservice.getGames().subscribe((data) => {
      this.clotheslist = data;
      console.log(this.clotheslist);
    });
  };
}
