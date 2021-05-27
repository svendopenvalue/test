import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FooditemsService {
  fooditems = [
    {
      name: 'Machine à laver',
      price: 23
    },
    {
      name: 'Frigo',
      price: 23
    },
    {
      name: 'Ordinateur',
      price: 23
    }
  ];

  constructor() { }
}
