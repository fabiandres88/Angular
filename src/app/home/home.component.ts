import { Component } from '@angular/core';
import { ClothesService } from '../services/clothes.service';

@Component({
    selector: 'home',
    templateUrl: './home.component.html',
    providers: [ClothesService]   
}) 
export class HomeComponent {
    public title = 'Main page';
    public listClothes!: Array<string>;
    public newClothe!:string;

    constructor(
        private _clothesService: ClothesService        
    ){}

    ngOnInit(){
        this.listClothes= this._clothesService.getClothe();        
        console.log(this._clothesService.test('Nike T-Shirt'));        
    }

    addClothe(){
        this._clothesService.addClothe(this.newClothe);
        this.newClothe= "";
    }

    removeClothe(index:number){
        this._clothesService.deleteClothe(index);
    }
}


