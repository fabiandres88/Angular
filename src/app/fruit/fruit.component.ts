import { Component } from '@angular/core';

@Component({
    selector: 'fruit',
    templateUrl: './fruit.component.html'
})
export class FruitComponent{
    public component_name = 'Fruit component';
    public fruits_list = 'Orange, Apple, Pear and Watermelon';
}