import { Component, OnInit } from '@angular/core';
import { of, interval, Observable } from 'rxjs';
import { FooditemsService } from '../fooditems.service';

@Component({
  selector: 'app-total',
  templateUrl: './total.component.html',
  styleUrls: ['./total.component.scss']
})
export class TotalComponent implements OnInit {
  total: number;

  constructor(private fooditemsService: FooditemsService) {
    this.total = 0;
  }

  ngOnInit(): void {
    const myObservable = of(42, 18);
    interval(0).subscribe(
      (value) => {
        this.total = this.fooditemsService.getSum();
      },
      (error) => {
        console.log('Uh-oh, an error occurred! : ' + error);
      },
      () => {
        console.log('Observable complete!');
      }
    );
    this.total = this.fooditemsService.getSum();
  }

  onClickMe(): void{
    this.total = this.fooditemsService.getSum();
  }

}
