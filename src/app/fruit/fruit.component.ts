import { Component } from '@angular/core';

@Component({
    selector: 'fruit',
    templateUrl: './fruit.component.html'
})
export class FruitComponent{
    public component_name = 'Fruit component';
    public fruits_list = 'Orange, Apple, Pear and Watermelon';
    public name:string = 'Fabian Ramirez';
    public age:number = 31;
    public Old:boolean = true;
    public interest:Array<any> = ['Development','Football',5];
    anyProperty:any = 'Web Developer';
}