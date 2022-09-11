//Week 6 War card game.
//I'll be playing my game using prompts.


//////////////////First, I'll create a Deck class that will return a shuffled deck to this.DeckArray.
class Deck {
    constructor() {
        this.DeckArray = [];
    }
    //buildDeck will create a deck of 52 unique cards.
    buildDeck() {
        this.suit = ["Diamonds", "Clubs", "Hearts", "Spades"];
        this.rank = ['2', '3', '4', '5', '6', '7', '8', '9', '10', 'Jack', 'Queen', 'King', 'Ace'];
        this.value = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];//Assigning ranks to face cards lets us compare them to numerical cards.
        
        for (let x = 0; x < this.suit.length; x++){
            for (let i= 0; i < this.value.length; i++)
            //Now I'm pushing the cards to my DeckArray
            this.DeckArray.push([this.value[i]] + ' of ' +this.suit[x], this.value[i]);
        }
    }
    //Below is my shuffleDeck method. Had to look this one up.
    shuffleDeck() {
        let i = 0;
        let t = 0;
        let temp = 0;
        for (i = this.DeckArray.length - 1; i > 0; i--) {
            t = Math.floor(Math.random() * (i + 1));
            temp = this.DeckArray[i];
            this.DeckArray[i] = this.DeckArray[t];
            this.DeckArray[t] = temp;
        }
    }
    //The returnDeck method will return the deck we built to DeckArray after shuffling it.
    returnDeck() {
        return this.DeckArray
    }
    //dealACard will take a card from my DeckArray and move it to my player's hand array.
    dealACard() {
        return this.DeckArray.pop();
    }
}

////////////////////Next, I'll create my Player class. A lot of the tools to play the game are here.
class Player {
    constructor(name) {
        this.name = name;
        //Each instance of Player's score starts at 0.
        this.score = 0;
        //Each instance of player needs an array to hold 26 cards (half the deck).
        this.hand = [];
    }
    //This method takes a card and puts in the Player's hand array.
    takeOneCard(card) {
        this.hand.push(card);
    }
    //This method updates the hand array with cards dealt.
    returnHand() {
        return this.hand;
    }
    //This method will play one card from the Player's hand in our game loop. It changes our array.
    playCard() {
        return this.hand.pop();
    }
    //This method will update the Player's score.
    updatedScore() {
        this.score++;
    }
    //This method will show us the final score of the game.
    returnScore() {
        return this.score;
    }
    //returnedCardValue will show us the value of our cards later in our loop for our game.
    //This allows us to compare face cards with numerical cards.
    returnCardValue(card) {
        if (card[0].startsWith("2")){
			return 1;
		}

		else if (card[0].startsWith("3")){
			return 2;
		}

		else if (card[0].startsWith("4")){
			return 3;
		}

		else if (card[0].startsWith("5")){
			return 4;
		}

		else if (card[0].startsWith("6")){
			return 5;
		}

		else if (card[0].startsWith("7")){
			return 6;
		}

		else if (card[0].startsWith("8")){
			return 7;
		}

		else if (card[0].startsWith("9")){
			return 8;
		}

		else if (card[0].startsWith("10")){
			return 9;
		}

		else if (card[0].startsWith("Jack")){
			return 10;
		}

		else if (card[0].startsWith("Queen")){
			return 11;
		}

		else if (card[0].startsWith("King")){
			return 12;
		}

		else if (card[0].startsWith("Ace")){
			return 13;
		}
    }
}

/////////////////////Now I need a Game class. This will include the prompts that allow the game to be played.

class Game {
    constructor() {
        this.players = [];
        this.selectedPlayer = null;
    }
    start() {//This assigns the user selection to a variable. This was similar to the week 5 assignment.
        let selection = this.showMainMenuOptions();
        while (selection != 0) {
            switch (selection) {
                case '1':
                    this.createPlayers();
                    break;                
                case '2':
                    this.dealDeck();
                    break;
                case '3':
                    this.playWar();
                    break;
                default:
                    selection = 0;
            }
            selection = this.showMainMenuOptions();
        }
        alert('See you next time!')
    }
    //Here is the interface that the user starts from.
    showMainMenuOptions() {
        return prompt(`
        0) Exit
        1) Create Players
        2) Deal Deck
        3) Play War
        `);
    }
    //Starting with my createPlayers method. I need user to input name. Returns this back to my players array.
    createPlayers() {
        const player1 = new Player(prompt(`What is Player 1's name?`));
        const player2 = new Player(prompt(`What is Player 2's name?`));
       
        //Now I push these instances of Player to my players array.
        this.players.push(player1);
        this.players.push(player2);
    }
    //My dealDeck method will use a few of my above methods to build, shuffle, and deal to both instances of Player.
    dealDeck() {
        const gameDeck = new Deck();
        //We have a new instance of deck, we need to build it, shuffle it, and return it.
        gameDeck.buildDeck();
        gameDeck.shuffleDeck();
        gameDeck.returnDeck();

        let player1Deck = [];
        let player2Deck = [];
        
        //Using our Deck class methods, we can deal the cards and split our gameDeck in half.
        for (let x = 0; x < 26; x++) {
            this.players[0].takeOneCard(gameDeck.dealACard());
            this.players[1].takeOneCard(gameDeck.dealACard());

            player1Deck.push(this.players[0].hand[x][0]);
            player2Deck.push(this.players[1].hand[x][0]);
            //Each Player has the necessary cards at this point. I indexed into an object with multiple arrays.
        }
    }
    playWar() {//This method will process the cards from each instance of Player's hand the show us who won with what score!
        for (let x = 0; x < 26; x++) {

            let player1Card = this.players[0].playCard();
            let player2Card = this.players[1].playCard();

            if (this.players[0].returnCardValue(player1Card) > this.players[1].returnCardValue(player2Card)) {
                console.log(`Player one wins this round ${player1Card} beats ${player2Card}.`);
                this.players[0].updatedScore();
            }
            else if (this.players[0].returnCardValue(player1Card) < this.players[1].returnCardValue(player2Card)) {
                console.log(`Player two wins! ${player2Card} beats ${player1Card}.`);
                this.players[1].updatedScore();
            }
            else {
                console.log("This round is tied " + player1Card + " ties with " + player2Card);
            }  
        }
        if (this.players[0].score > this.players[1].score) {
            console.log(`${this.players[0].name} wins with a score of ${this.players[0].score}!`);
            alert(`${this.players[0].name} wins with a score of ${this.players[0].score}!`);            
        } else {
            console.log(`${this.players[1].name} wins with a score of ${this.players[1].score}!`);
            alert(`${this.players[1].name} wins with a score of ${this.players[1].score}!`);            
        }
    }
}

const game = new Game();
game.start();