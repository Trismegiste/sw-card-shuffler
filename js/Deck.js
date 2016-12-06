/*
 * Deck of cards
 * https://www.random.org/sequences/?min=1&max=52&col=1&format=plain&rnd=new
 */

var Deck = function () {
    this.listing = [
        "2_of_clubs.svg", "2_of_diamonds.svg", "2_of_hearts.svg", "2_of_spades.svg",
        "3_of_clubs.svg", "3_of_diamonds.svg", "3_of_hearts.svg", "3_of_spades.svg",
        "4_of_clubs.svg", "4_of_diamonds.svg", "4_of_hearts.svg", "4_of_spades.svg",
        "5_of_clubs.svg", "5_of_diamonds.svg", "5_of_hearts.svg", "5_of_spades.svg",
        "6_of_clubs.svg", "6_of_diamonds.svg", "6_of_hearts.svg", "6_of_spades.svg",
        "7_of_clubs.svg", "7_of_diamonds.svg", "7_of_hearts.svg", "7_of_spades.svg",
        "8_of_clubs.svg", "8_of_diamonds.svg", "8_of_hearts.svg", "8_of_spades.svg",
        "9_of_clubs.svg", "9_of_diamonds.svg", "9_of_hearts.svg", "9_of_spades.svg",
        "10_of_clubs.svg", "10_of_diamonds.svg", "10_of_hearts.svg", "10_of_spades.svg",
        "jack_of_clubs2.svg", "jack_of_diamonds2.svg", "jack_of_hearts2.svg", "jack_of_spades2.svg",
        "queen_of_clubs2.svg", "queen_of_diamonds2.svg", "queen_of_hearts2.svg", "queen_of_spades2.svg",
        "king_of_clubs2.svg", "king_of_diamonds2.svg", "king_of_hearts2.svg", "king_of_spades2.svg",
        "ace_of_clubs.svg", "ace_of_diamonds.svg", "ace_of_hearts.svg", "ace_of_spades.svg",
        "black_joker.svg",
        "red_joker.svg"
    ]
    this.dealingShoe = []
}

Deck.prototype.shuffle = function () {
    var self = this
    return new Promise(function (fulfill, reject) {
        fetch('https://www.random.org/sequences/?min=0&max=53&col=54&format=plain&rnd=new').then(function (response) {
            return response.text()
        }).then(function (content) {
            var extracted = content.split("\t");
            for (var k = 0; k < 54; k++) {
                self.dealingShoe[k] = parseInt(extracted[k]);
            }
            fulfill(self)
        })
    })
}

Deck.prototype.draw = function () {
    if (!this.isEmpty()) {
        return this.listing[this.dealingShoe.pop()]
    } else {
        throw new Error('End of deck')
    }
}

Deck.prototype.isEmpty = function () {
    return this.dealingShoe.length === 0
}
