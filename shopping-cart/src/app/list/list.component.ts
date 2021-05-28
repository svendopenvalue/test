import { Component, OnInit } from '@angular/core';
import { FooditemsService } from '../fooditems.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {
  foodItems: any[] = [];

  constructor(private fooditemsService: FooditemsService) { }

  ngOnInit(): void {
    this.foodItems = this.fooditemsService.getItems();
  }

}
