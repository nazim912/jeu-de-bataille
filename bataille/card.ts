import { Color } from "./color"
import { Value } from "./valeur"


export class Card{
    private value : Value
    private color: Color
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
    public display():string{
        return `${Value[this.value]} de ${Color[this.color]}`
    }
}