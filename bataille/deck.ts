import { Card } from "./card"
import { Color } from "./color"
import { Player } from "./player"
import { Value } from "./valeur"

export class Deck {
    public cards: Card[]
    public player1: Player
    public player2: Player

    constructor(cards: Card[], player1: Player = new Player("Player 1"), player2: Player = new Player("Player 2")) {
        this.cards = cards
        this.player1 = player1
        this.player2 = player2
    }
    public createDeck(){

    }
    public shuffle() {

    }
    public deal() {
        
    }
}