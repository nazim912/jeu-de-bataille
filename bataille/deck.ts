import { Card } from "./card"
import { Color } from "./color"
import { Value } from "./valeur"

export class Deck {
    private cards: Card[]
    constructor() {
        this.cards = []
    }

    public getNbCards():number{
        return this.cards.length;
    }

    public isEmpty():boolean{
        return this.cards.length == 0;
    }
    
    public createDeck():void{
        for(let i=0;i<13;i++){
            for(let j=0;j<4;j++){
            this.cards.push(new Card(i as Value,j as Color))
        }
    }
    }
    public shuffle(): void {
        for (let i = this.cards.length-1; i > 0; i--) {
            let j =Math.floor(Math.random() * i);
            let a=this.cards[i]
            this.cards[i]=this.cards[j]
            this.cards[j]=a
        }
    }
    public addCard(card: Card): void {
        this.cards.push(card)
    }
    public drawCard(): Card | undefined {
        return this.cards.shift()
    }
    public displayDeck(): string {
        let display:string=""
        for (let i = 0; i < this.cards.length; i++) {            
            display+=this.cards[i].display()+'\n'
        }
        return display
    }
}