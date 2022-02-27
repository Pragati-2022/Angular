import { Injectable } from "@angular/core";

@Injectable({
    providedIn : 'root'
})

export class NumlistService{

    numList : number[]= [25];

    constructor() {
        
    }

    addNumber(num: number){
        this.numList.push(num);
    }

    getNumber(){
        return this.numList;
    }
}