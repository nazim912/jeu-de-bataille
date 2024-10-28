import { Card } from "./card";
import { Deck } from "./deck";

export class Player {
    private name: string
    public deck: Deck

    constructor(name: string) {
        this.name = name
        this.deck = new Deck([])
    }

    public getName(): string {
        return this.name
    }

    public addCard(card: Card): void {
        this.deck.cards.push(card)
    }

    public drawCard(): Card | undefined {
        return this.deck.cards.pop()
    }
}