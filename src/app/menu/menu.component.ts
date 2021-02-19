import { Component, OnInit } from '@angular/core';
import {Dish} from '../shared/dish';
import { DISHES } from '../shared/dishes';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss']
})
export class MenuComponent implements OnInit {

  
  dishes: Dish[] = DISHES;

  selectedDish: Dish;

  
  constructor(selectedDish:Dish) 
  {
    this.selectedDish = selectedDish;
   }

  ngOnInit(): void {
    
  }

  onSelect(dish: Dish) {
    this.selectedDish = dish;
  }
}
