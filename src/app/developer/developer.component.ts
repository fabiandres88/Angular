import { Component } from '@angular/core';
import { Developer } from './developer';

@Component({
    selector: 'developer',
    templateUrl: './developer.component.html',    
})
export class DeveloperComponent {
    public title: string = 'Developer component';
    public developer:Developer;
    public coworkers: Array<Developer>;
    public outterWorker:boolean;
    public color:string;
    public colorSelected:string;
    
    constructor(){
        this.developer = new Developer('Fabian Ramirez', 31, 'Web Full Stack Developer', true);
        this.coworkers=[
            new Developer('Carolina Jaimes', 29, 'Commercial Assesor', true),
            new Developer('German Ramirez', 29, '.NET Full Stack Developer', true),
            new Developer('Paco Suarez', 21, 'Web Full Stack Developer', true),
            new Developer('Pepito Perez', 41, 'Web Full Stack Developer', true),
            new Developer('Juan Gomez', 37, 'Web Full Stack Developer', false),
        ];
        this.outterWorker = true;
        this.color = 'blue';
        this.colorSelected = '#ccc';
    }
       
    ngOnInit() {
        console.log(this.coworkers)
    }

    changeOutter(value:boolean){
        this.outterWorker=value;
    }
}

