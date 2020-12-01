import { Component } from '@angular/core';
import { Car } from './car';

@Component({
    selector: 'cars',
    templateUrl: './cars.component.html'
})
export class CarsComponent{
    public car:Car
    public cars:Array<Car>

    constructor(){
        this.car = new Car("","","","");
        this.cars = [
            new Car("Sandero","Renault","2020","1200"),
            new Car("Mustang","Ford","2020","1800")    
        ]
    }

    onSubmit(){        
        console.log(this.car);
    }
}