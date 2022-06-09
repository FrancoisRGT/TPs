class TicTacToeView {

    constructor(game, name) {

        this.game = game;
        this.name = name;
        this.tab = document.getElementById("morpion");
        document.querySelectorAll("td").forEach(e => e.addEventListener("click", e => this.clicker(e)));
        this.textPlayer = document.getElementById('currentPlayer');
    }

    clicker(elem) {

        let elt = elem.path[0];

        let x = Math.floor((elt.getAttribute("data") - 1) / 3);
        let y = Math.floor((elt.getAttribute("data") - 1) % 3);

        if (this.game.getCaseState(x, y) === undefined && !this.game.isFinished()) {
            this.game.play(x, y);
            this.display();
        } else {
            if (this.game.isFinished()) {
                this.game.reset();
                this.display();
            }
        }
    }


    display() {

        if (this.game.currentPlayer == false) {
            this.textPlayer.innerHTML = "C'est au joueur 1";
        }
        else {
            this.textPlayer.innerHTML = "C'est au joueur 2";
        }
        for (let x = 0; x < 3; x++) {
            for (let y = 0; y < 3; y++) {
                if (this.game.grid[x][y] === '0') {
                    this.tab.firstElementChild.children[x].children[y].innerHTML = 'O';
                }
                else if (this.game.grid[x][y] === '1') {
                    this.tab.firstElementChild.children[x].children[y].innerHTML = 'X';
                }
                else this.tab.firstElementChild.children[x].children[y].innerHTML = '';
            }
        }

        if (this.game.isFinished()) {
            if (this.game.hasWinner()) {
                let winner;

                if (this.game.getWinner() == 0){
                    winner = 1;
                }
                else winner = 2;
                this.textPlayer.innerHTML = "Victoire du joueur " + winner + " !";
            }
            else this.textPlayer.innerHTML = "Egalité !";
        }
    }










}

