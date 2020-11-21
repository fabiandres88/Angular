import { Component } from '@angular/core';

@Component({
    selector: 'fruit',
    templateUrl: './fruit.component.html'
})
export class FruitComponent {
    public component_name = 'Fruit component';
    public fruits_list = 'Orange, Apple, Pear and Watermelon';
    public name: string;
    public age: number;
    public Old: boolean;
    public interest: Array<any> = ['Development', 'Football', 5];
    anyProperty: any;

    constructor() {
        this.name = 'Fabian Ramirez';
        this.age = 31;
        this.Old = false;
        this.anyProperty = 'Web developer';
    }

    ngOnInit() {
        this.helloWorld(this.name);
        this.changeName();
        console.log(this.name);
    }

    helloWorld(name: string) {
        alert(`Fisrt Angular Method used by: ${name}`);
    }

    changeName() {
        this.name = 'Carolina Jaimes';
    }
}