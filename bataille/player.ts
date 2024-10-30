import { Card } from "./card";
import { Deck } from "./deck";

export class Player {
    private name: string
    private deck: Deck

    constructor(name: string) {
        this.name = name
        this.deck= new Deck();
    }
    
    public getName(): string {
        return this.name
    }

    public getNbCards():number{
        return this.deck.getNbCards();
    }

    public addCard(card:Card):void{
        this.deck.addCard(card);
    }

    public retrieveCards(d:Deck):void{

    }

    public play():Card|undefined{
        return this.deck.drawCard();
    }

    public display():string{
        return this.deck.displayDeck();
    }

}