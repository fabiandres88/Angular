import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'conversor'})
export class ConversorPipe implements PipeTransform{
    transform(value1:any, value2:any){
        let value_one = parseInt(value1);
        let value_two = parseInt(value2);
        let total= (value_one*value_two);
        let result = "The multiplication: " +value_one+ " X " + value_two + " = " + total;
        return result;       
    }
}