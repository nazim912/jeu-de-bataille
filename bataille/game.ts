import { Card } from "./card";
import { Deck } from "./deck";
import { Player } from "./player";

export class Game {
    public player1: Player
    public player2: Player
    public deck: Deck

    constructor(player1name: string, player2name: string, deck: Deck) {
        this.player1 = new Player(player1name)
        this.player2 = new Player(player2name)
        this.deck = deck
    }
    public compareCard(card1: Card, card2: Card): void {
        console.log(`Le joueur 1 joue : ${card1.value}de ${card1.color}`)
        console.log(`Le joueur 2 joue : ${card2.value}de ${card2.color}`)
        if (card1.value > card2.value) {
            this.player1.addCard(card1)
            this.player1.addCard(card2)
            console.log("Joueur 1 remporte la manche")
        } else if (card1.value < card2.value) {
            this.player2.addCard(card1)
            this.player2.addCard(card2)
            console.log("Joueur 2 remporte la manche")
        } else {
            this.bataille()
        }
    }
    public win(): string | undefined {
        if (this.player1.deck.cards.length == 0) {
            return "Le joueur 2 a gagné"
        } else if (this.player2.deck.cards.length == 0) {
            return "Le joueur 1 a gagné"
        }
    }
    bataille(): void {
        let cardFaceCache1 = this.player1.drawCard()
        let cardFaceCache2 = this.player2.drawCard()
        let cardFace1 = this.player1.drawCard()
        let cardFace2 = this.player2.drawCard()

        if (cardFaceCache1 && cardFaceCache2 && cardFace1 && cardFace2 !=undefined) {
            console.log(`Le joueur 1 joue : ${cardFace1.value} et le joueur 2 joue : ${cardFace2.value}`)

            if (cardFace1.value > cardFace2.value) {
                console.log("Le joueur 1 remporte la bataille")
                this.player1.addCard(cardFaceCache1)
                this.player1.addCard(cardFaceCache2)
                this.player1.addCard(cardFace1)
                this.player1.addCard(cardFace2)

            } else if (cardFace1.value < cardFace2.value) {
                console.log("Le joueur 2 remporte la bataille")
                this.player2.addCard(cardFaceCache1)
                this.player2.addCard(cardFaceCache2)
                this.player2.addCard(cardFace1)
                this.player2.addCard(cardFace2)
                
            } else {
                console.log("égalité, une autre bataille commence")
                this.bataille()
            }
        } else {
            console.log("Un joueur n a plus de cartes")

        }

            if (this.player1.deck.cards.length < 2) {
                console.log("Le joueur 1 n a plus de carte le joueur 2 gagne");
            } else if (this.player2.deck.cards.length < 2) {
                console.log("Le joueur 2 n a plus de cartes le joueur 1 gagne");
            }
            return
        }
}