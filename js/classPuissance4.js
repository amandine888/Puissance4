
// Classe : 
class Puissance4 {

// Constructeur : 
    constructor (grid_dimension = {x:7, y:6}) {
        this.grid_dimension = grid_dimension; 
        this.player1 = 1; 
        this.player2 = 2; 
        this.turn = 1; //this.player1;
        this.max_turn = this.grid_dimension.x * this.grid_dimension.y; 
        this.count_turn = 0; 
        this.winner = null;
        this.grid = []; 

// Générer ma grille grâce à la méthode en dehors du constructor :  
        this.generate_grid();

// Le click est dans le constructeur il défini le reste : 
        $("td").click((e)=>this.handleClick(e));
// Appelle la fonction qui restart la partie : 
        $("#boutonRestart").click((e)=>this.click_reset(e)); 
}

// Méthodes :  
    generate_grid(){
        for (let h = 0; h<this.grid_dimension.y; h++){
            this.grid[h] = [];
            for (let l = 0; l<this.grid_dimension.x; l++) {
                this.grid[h][l] = 0;
            }
        }    
        console.log(this.grid)
    }

    handleClick(e){
        console.log($(e.target).parent());
        let x = parseFloat($(e.target).parent().attr("data-col")); // y devient un integer, il était en chaîne de caractère. Inverse: parse.int 
        let y = this.check_last_index(x);

        console.log(y,x);

        this.grid[y][x] = this.turn;

        console.log(this.grid);

        this.add_token(y,x);

        this.turn = (this.turn === this.player1) ? this.player2 : this.player1; 

        console.log(this.check_win(x, y, this.player1, this.player2));
    }

    check_last_index(x){
        for(let h = this.grid_dimension.y - 1; h>=0; h--){
            if (this.grid[h][x]===0){
                return h;
            }
        }
    }
    
    add_token(y,x) {
        if(this.turn === this.player1){
        $("tr:nth-child(" + (y+1) + ") td:nth-child(" + (x+1) + ") img").attr("src", "./img/Ada.png")}
            else {this.player2
            $("tr:nth-child(" + (y+1) + ") td:nth-child(" + (x+1) + ") img").attr("src", "./img/Hedy.png")}
        this.count_turn++;
        console.log("countTurn",this.count_turn)
        if(this.count_turn === this.max_turn){
            if (window.alert("Égalité !")); 
        }
    }

    check_win(y, x, player1, player2) { //On peut mettre le check win dans le add jeton. 

        // Horizontal pour player 1 : 
        let count = 0;
        for (let l = 0; l < this.grid_dimension.x  ; l++) {
            count = (this.grid[x][l] == player1) ? count + 1 : 0; //ternaire, comme une condition mais écrite différement
            if (count >= 4){
                window.alert("Player1 Win");
                this.winner = true;
                return true;
            }
        }

        // Horizontal pour player 2 : 
        count = 0;
        for (let l = 0; l < this.grid_dimension.x  ; l++) {
            count = (this.grid[x][l] == player2) ? count + 1 : 0;
            if (count >= 4){
                window.alert("Player2 Win");
                return true;
            }
        
        } 
        
        // Vertical pour player 1 :     
        count = 0;
        for (let h = 0; h < this.grid_dimension.y  ; h++) {
            count = (this.grid[h][y] == player1) ? count + 1 : 0;
            if (count >= 4){
                window.alert("Player1 Win");
                return true;
            }
        }

        // Vertical pour player 2 :     
        count = 0;
        for (let h = 0; h < this.grid_dimension.y  ; h++) {
            count = (this.grid[h][y] == player2) ? count + 1 : 0;
            if (count >= 4){
                window.alert("Player2 Win");
                return true;
            }
        }
        // Diagonal pour player 1: 

        count = 0;
        var shift = x - y;
        for (let d = Math.max(shift, 0); d < Math.min(this.grid_dimension.y, this.grid_dimension.x + shift); d++) {
            count = (this.grid[d][d - shift] == player1) ? count + 1 : 0;
            console.log("count diago", count)
            if (count >= 4){
                window.alert("Player1 Win");
                return true;}
        }

        // Diagonal pour player 2: 

        count = 0;
        var shift = x - y;
        for (let d = Math.max(shift, 0); d < Math.min(this.grid_dimension.y, this.grid_dimension.x + shift); d++) {
            count = (this.grid[d][d - shift] == player2) ? count + 1 : 0;
            console.log("count diago", count)
            if (count >= 4){
                window.alert("Player2 Win");
                return true;}
        }
    

        // Anti-diagonal pour player 1:

        count = 0;
        var shiftSecond = y + x;
        for (let i = Math.max(shiftSecond - this.grid_dimension.x + 1, 0); i < Math.min(this.grid_dimension.y, shiftSecond + 1); i++) {
            count = (this.grid[i][shiftSecond - i] == player1) ? count + 1 : 0;
            console.log("count antidiago", count)
            if (count >= 4){
            window.alert("Player1 Win");
            return true;}
    
        }

        // Anti-diagonal pour player 2:

        count = 0;
        var shiftSecond = y + x;
        for (let i = Math.max(shiftSecond - this.grid_dimension.x + 1, 0); i < Math.min(this.grid_dimension.y, shiftSecond + 1); i++) {
            count = (this.grid[i][shiftSecond - i] == player2) ? count + 1 : 0;
            console.log("count antidiago", count)
            if (count >= 4){
            window.alert("Player2 Win");
            return true;}
    
        }
    }
    
    // Reset du jeu au clic sur bouton restart : 
    click_reset() {
        
        for (let h = 0; h < this.grid_dimension.y; h++) {
            for (let l = 0; l < this.grid_dimension.x; l++) {
            $("tr:nth-child(" + (h+1) + ") td:nth-child(" + (l+1) + ") img").attr("src", "./img/Grille1.png");
            $("tr:nth-child(" + (h+1) + ") td:nth-child(" + (l+1) + ") img").attr("src", "./img/Grille1.png") 
            }
        } 
        this.turn = 1;
        this.count_turn = 0; 
        this.generate_grid();
        this.winner = null; 
    }
    
}