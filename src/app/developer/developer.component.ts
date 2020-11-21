import { Component } from '@angular/core';
import { Developer } from './developer';

@Component({
    selector: 'developer',
    templateUrl: './developer.component.html',    
})
export class DeveloperComponent {
    public title: string = 'Developer component';
    public developer:Developer;  
    
    constructor(){
        this.developer = new Developer('Fabian Ramirez', 31, 'Web Full Stack Developer', true);    
    }
       
    ngOninit() {
        console.log(this.developer)
    }
}

