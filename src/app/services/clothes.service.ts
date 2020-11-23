import { from } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable()

export class ClothesService{
    public clothe= 'Cowboy pants';

    test(clothe:string){
        return clothe; 
    }
}
