import {Pipe, PipeTransform} from '@angular/core';

@Pipe({name:'capitalize'})

export class CapitalizePipe implements PipeTransform{
    transform(text){
        return text&&text.slice(0,1).toUpperCase()+text.slice(1);
    }
}