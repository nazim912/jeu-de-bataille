import { Color } from "./color"
import { Value } from "./valeur"


export class Card{
    public value : Value
    public color: Color
    constructor(value:Value,color: Color){
        this.value=value
        this.color=color
    }
public getValue(){
    return this.value
}
public getColor(){
    return this.color
}
}