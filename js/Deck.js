/*
 * Deck of cards
 */

var Deck = function () {
    this.listing = [
        "White_c_2.svg", "White_c_3.svg", "White_c_4.svg", "White_c_5.svg",
        "White_c_6.svg", "White_c_7.svg", "White_c_8.svg", "White_c_9.svg",
        "White_c_10.svg", "White_c_j.svg", "White_c_q.svg", "White_c_k.svg",
        "White_c_a.svg",
        "White_d_2.svg", "White_d_3.svg", "White_d_4.svg", "White_d_5.svg",
        "White_d_6.svg", "White_d_7.svg", "White_d_8.svg", "White_d_9.svg",
        "White_d_10.svg", "White_d_j.svg", "White_d_q.svg", "White_d_k.svg",
        "White_d_a.svg",
        "White_h_2.svg", "White_h_3.svg", "White_h_4.svg", "White_h_5.svg",
        "White_h_6.svg", "White_h_7.svg", "White_h_8.svg", "White_h_9.svg",
        "White_h_10.svg", "White_h_j.svg", "White_h_q.svg", "White_h_k.svg",
        "White_h_a.svg",
        "White_s_2.svg", "White_s_3.svg", "White_s_4.svg", "White_s_5.svg",
        "White_s_6.svg", "White_s_7.svg", "White_s_8.svg", "White_s_9.svg",
        "White_s_10.svg", "White_s_j.svg", "White_s_q.svg", "White_s_k.svg",
        "White_s_a.svg",
        "White_jk_b.svg", "White_jk_r.svg"
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

Deck.prototype.getSizePercent = function () {
    return Math.floor(100 * this.dealingShoe.length / 54)
}