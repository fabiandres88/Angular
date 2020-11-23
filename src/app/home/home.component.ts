import { Component } from '@angular/core';
import { ClothesService } from '../services/clothes.service';

@Component({
    selector: 'home',
    templateUrl: './home.component.html',
    providers: [ClothesService]   
}) 
export class HomeComponent {
    public title = 'Main page';

    constructor(
        private _clothesService: ClothesService
    ){}

    ngOnInit(){
        console.log(this._clothesService.test('Nike T-Shirt'));
    }
}


