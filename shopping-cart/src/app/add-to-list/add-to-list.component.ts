import { Component, OnInit } from '@angular/core';
import { FooditemsService } from '../fooditems.service';

@Component({
  selector: 'app-add-to-list',
  templateUrl: './add-to-list.component.html',
  styleUrls: ['./add-to-list.component.scss']
})
export class AddToListComponent implements OnInit {
  foodItems: any[] = [];
  constructor(private fooditemsService: FooditemsService) { }

  ngOnInit(): void {
    this.foodItems = this.fooditemsService.getItems();
  }
  onClickMe(): void{
    this.fooditemsService.dataToServer();
    this.fooditemsService.addItems();
    this.foodItems = this.fooditemsService.getItems();
  }

}
