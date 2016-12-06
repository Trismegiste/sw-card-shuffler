<spa>
    <div class="pure-g">
        <div class="pure-u-1-3">
            <section>
                <img if="{draw.length > 0}" src="./assets/{draw[draw.length-1]}" class="pure-img"/>
            </section>
            <form class="pure-form" onsubmit="{onDraw}">
                <button class="pure-button pure-input-1">Draw</button>
            </form>
        </div>
        <div class="pure-u-2-3">
            <section>
                <div class="pure-g">
                    <div class="pure-u-1-3" each="{item in draw}">
                        <img src="./assets/{item}" class="pure-img"/>
                    </div>
                </div>
            </section>
            <form class="pure-form" onsubmit="{onNewRound}">
                <button class="pure-button pure-input-1">New</button>
            </form>
        </div>
    </div>

    <script>
        this.service = deckService
        this.draw = []
        var self = this

        onDraw() {
            self.draw.push(self.service.draw())
        }

        onNewRound() {

        }
    </script>
</spa>
