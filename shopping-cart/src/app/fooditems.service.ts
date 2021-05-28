import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

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

  constructor(private httpClient: HttpClient) { }

  getItems() {
    return (this.fooditems);
  }
  addItems(){
    this.fooditems.push({
      name: 'aaa',
      price: 22
    })
  }
  getSum(){
    let sum = 0;
    this.fooditems.map(x => { sum += x.price });
    return sum;
  }
  dataToServer() {
    this.httpClient
      .put('https://fir-trial-b74cc-default-rtdb.europe-west1.firebasedatabase.app/food.json', this.fooditems)
      .subscribe(
        () => {
          console.log('Enregistrement terminé !');
        },
        (error) => {
          console.log('Erreur ! : ' + error);
        }
      );
  }
}
