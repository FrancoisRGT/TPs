class TicTacToe extends Observable {


    constructor() {
        super();
        this.currentPlayer = false;
        this.grid = new Array(3)
        for(let i = 0; i < 3; i++){
            this.grid[i] = new Array(3);
        }
        this.winner;
        this.isWinner = false;
    }



    play(nb1, nb2) {
        if (this.currentPlayer == false){

            this.grid[nb1][nb2] = '0';
            this.currentPlayer = true;
        }
        else{
            this.grid[nb1][nb2] = '1';
            this.currentPlayer = false;
        } 
    }

    reset() {
        
        for(let i = 0; i < 3; i++){
            for(let y = 0; y < 3; y++){

                delete this.grid[i][y];

            }
        }

        this.currentPlayer = false;
        this.winner = undefined;
        this.isWinner = false
    }

    getCurrentPlayer() {
        
        return this.currentPlayer;

    }

    getCaseState(nb1, nb2) {

        return this.grid[nb1][nb2];

    }



    winColumn() {
        
        if(this.grid[0][0] == 0 && this.grid[0][1] == 0 && this.grid[0][2] == 0){
            this.winner = 0;
            this.isWinner = true;
        }
        else if(this.grid[1][0] == 0 && this.grid[1][1] == 0 && this.grid[1][2] == 0){
            this.winner = 0;
            this.isWinner = true;
        }
        else if(this.grid[2][0] == 0 && this.grid[2][1] == 0 && this.grid[2][2] == 0){
            this.winner = 0;
            this.isWinner = true;
        }
        else if(this.grid[0][0] == 1 && this.grid[0][1] == 1 && this.grid[0][2] == 1){
            this.winner = 1;
            this.isWinner = true;
        }
        else if(this.grid[1][0] == 1 && this.grid[1][1] == 1 && this.grid[1][2] == 1){
            this.winner = 1;
            this.isWinner = true;
        }
        else if(this.grid[2][0] == 1 && this.grid[2][1] == 1 && this.grid[2][2] == 1){
            this.winner = 1;
            this.isWinner = true;
        }
    }

    winLine() {
        
        if(this.grid[0][0] == 0 && this.grid[1][0] == 0 && this.grid[2][0] == 0){
            this.winner = 0;
            this.isWinner = true;
        }
        else if(this.grid[0][1] == 0 && this.grid[1][1] == 0 && this.grid[2][1] == 0){
            this.winner = 0;
            this.isWinner = true;
        }
        else if(this.grid[0][2] == 0 && this.grid[1][2] == 0 && this.grid[2][2] == 0){
            this.winner = 0;
            this.isWinner = true;
        }
        else if(this.grid[0][0] == 1 && this.grid[1][0] == 1 && this.grid[2][0] == 1){
            this.winner = 1;
            this.isWinner = true;
        }
        else if(this.grid[0][1] == 1 && this.grid[1][1] == 1 && this.grid[2][1] == 1){
            this.winner = 1;
            this.isWinner = true;
        }
        else if(this.grid[0][2] == 1 && this.grid[1][2] == 1 && this.grid[2][2] == 1){
            this.winner = 1;
            this.isWinner = true;
        }
    }

    winDiag() {
        
        if (this.grid[0][0] == 0 && this.grid[1][1] == 0 && this.grid[2][2] == 0){
            this.winner = 0;
            this.isWinner = true;
        }
        else if (this.grid[0][0] == 1 && this.grid[1][1] == 1 && this.grid[2][2] == 1){
            this.winner = 1;
            this.isWinner = true;
        }
        else if (this.grid[0][2] == 0 && this.grid[1][1] == 0 && this.grid[2][0] == 0){
            this.winner = 0;
            this.isWinner = true;
        }
        else if (this.grid[0][2] == 1 && this.grid[1][1] == 1 && this.grid[2][0] == 1){
            this.winner = 1;
            this.isWinner = true;
        }
        
    }

    isFinished() {

        let empty = false;
        let finished = false;
        this.winColumn();
        this.winLine();
        this.winDiag();

        if (this.isWinner == true){
            return true;
        }

        for (let i = 0; i < 3; i++){
            for (let y = 0; y < 3; y++){
                if (this.grid[i][y] == undefined){
                    empty = true
                }
            }
        }

        if (empty == true){
            return false
        }
        else return true
    }

    hasWinner() {

        return this.isWinner;

    }

    getWinner() {
        
        return this.winner;

    }



}