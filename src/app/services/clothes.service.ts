import { Injectable } from '@angular/core';

@Injectable()

export class ClothesService{
    public clothe= 'Cowboy pants';
    public setClothes= ['White pants','Red shirt'];

    test(clothe:string){
        return clothe; 
    }

    addClothe(nameClothe:string){
        this.setClothes.push(nameClothe);
        this.getClothe();
    }

    getClothe(){
        return this.setClothes;
    }

    deleteClothe(index:number){
        this.setClothes.splice(index,1);
    }
}
