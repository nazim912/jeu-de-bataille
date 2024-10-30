import { Card } from "./card";
import { Deck } from "./deck";
import { Player } from "./player";

export class Game {
    public player1: Player
    public player2: Player

    constructor(player1: string, player2: string) {
        this.player1 = new Player(player1)
        this.player2 = new Player(player2)
    }

    private compareCard(card1: Card, card2: Card): void {
        console.log(`Le joueur 1 joue : ${card1.display()}`)
        console.log(`Le joueur 2 joue : ${card2.display()}`)

        if (card1.getValue() > card2.getValue()) {
            this.player1.addCard(card1)
            this.player1.addCard(card2)
            console.log("Joueur 1 remporte la manche")

        } else if (card1.getValue() < card2.getValue()) {
            this.player2.addCard(card1)
            this.player2.addCard(card2)
            console.log("Joueur 2 remporte la manche")

        } else {
            this.bataille()
        }
    }

    public getPlayers():Player[]{
        return [this.player1,this.player2];
    }
    
    public play(): void {
        this.deal();
        this.gameloop();        
    }

    public deal(): void {
        let deck: Deck = new Deck();
        deck.createDeck();
        deck.shuffle()
        while (!deck.isEmpty()) {
            let card1 = deck.drawCard()
            let card2 = deck.drawCard()
            if (card1 != undefined) {
                this.player1.addCard(card1)
            }
            if (card2 != undefined) {
                this.player2.addCard(card2)
            }
        }
        return
    }

    private gameloop():Player{
        let winner : Player|undefined = undefined
        while (winner == undefined) {
            let card1 = this.player1.play()
            let card2 = this.player2.play()

            if (card1 && card2 != undefined) {
                this.compareCard(card1, card2)
            }

            winner = this.win();
        }

        return winner;
    }

    private bataille(): void {
        let cardFaceCache1 = this.player1.play()
        let cardFaceCache2 = this.player2.play()
        let cardFace1 = this.player1.play()
        let cardFace2 = this.player2.play()

        if (cardFaceCache1 && cardFaceCache2 && cardFace1 && cardFace2 != undefined) {
            console.log(`Les deux joueurs jouent 1 carte face cachée`)
            console.log(`Le joueur 1 joue : ${cardFace1.getValue()} et le joueur 2 joue : ${cardFace2.getValue()}`)

            if (cardFace1.getValue() > cardFace2.getValue()) {
                console.log("Le joueur 1 remporte la bataille")
                this.player1.addCard(cardFaceCache1)
                this.player1.addCard(cardFaceCache2)
                this.player1.addCard(cardFace1)
                this.player1.addCard(cardFace2)

            } else if (cardFace1.getValue() < cardFace2.getValue()) {
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
        if (this.player1.getNbCards() < 2) {
            console.log("Le joueur 1 n a plus de carte le joueur 2 gagne");
        } else if (this.player2.getNbCards() < 2) {
            console.log("Le joueur 2 n'a plus de cartes le joueur 1 gagne");
        }
        return
    }

    public win(): Player | undefined {
        if (this.player1.getNbCards() == 0) {
            return this.player2;

        } else if (this.player2.getNbCards() == 0) {
            return this.player1
        }

        return undefined;
    }
}