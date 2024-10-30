import { Card } from "./card";
import { Color } from "./color";
import { Deck } from "./deck";
import { Game } from "./game";
import { Player } from "./player";
import { Value } from "./valeur";

//1

// let card=new Card(Object.values(Value)[Value.deux] as Value,Object.values(Color)[Color.coeur] as Color)
// console.log(card)

//2
 
// let deck1=new Deck()
// deck1.createDeck()
// deck1.shuffle()
// console.log(deck1.displayDeck())

// 3
// let game=new Game("player1","player2")
// game.deal()
// let players : Player[] = game.getPlayers();
// console.log(players[0].getNbCards(),players[0].display());
// console.log("--------------------------------");

// console.log(players[1].getNbCards(),players[1].display());

//4
let game=new Game("p1","p2")
game.play()
console.log(game)
