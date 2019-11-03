
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

        this.check_win(x, y, this.player1, this.player2);

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
            $("tr:nth-child(" + (y+1) + ") td:nth-child(" + (x+1) + ") img").attr("src", "./img/Hedi.png")}
        this.count_turn++;
        console.log("countTurn",this.count_turn)
        if(this.count_turn === this.max_turn){
            if (window.alert("Égalité !")); 
        }
    }

    check_win(row, column, player1, player2) {

        // Horizontal pour player 1 : 
        let count = 0;
        for (let j = 0; j < this.grid_dimension.x  ; j++) {
            count = (this.grid[column][j] == this.player1) ? count + 1 : 0;
            if (count >= 4){
                window.alert("Player1 Win");
            }
        }

        // Horizontal pour player 2 : 
        count = 0;
        for (let j = 0; j < this.grid_dimension.x  ; j++) {
            count = (this.grid[column][j] == this.player2) ? count + 1 : 0;
            if (count >= 4){
                window.alert("Player2 Win");
            }
        
        } 
        
        // Vertical pour player 1 :     
        count = 0;
        for (let i = 0; i < this.grid_dimension.y  ; i++) {
            count = (this.grid[i][row] == this.player1) ? count + 1 : 0;
            if (count >= 4){
                window.alert("Player1 Win");
            }
        }

        // Vertical pour player 2 :     
        count = 0;
        for (let i = 0; i < this.grid_dimension.y  ; i++) {
            count = (this.grid[i][row] == this.player2) ? count + 1 : 0;
            if (count >= 4){
                window.alert("Player2 Win");
            }
        }
      
        // Diagonal pour player 1: 

        count = 0;
        let shift = row - column;
        for (let i = Math.max(shift, 0); i < Math.min(this.row, this.column + shift); i++) {
          count = (this.grid[i][i - shift] == this.player1) ? count+1 : 0;
            if (count >= 4) return true;
            console.log(count);
        }
        
        // Anti-diagonal
    } 
    

    
    // click_reset (e){
    //     for(let i = 0; i< this.grid_dimension.x; i++){
    //         for(let j = 0; j<this.grid_dimension.y; j++){
    //             this.grid_dimension[j][i] = 0; 
    //         }
    //     }
    // }

    
 //cibler et placer jeton sur img, mettre condition pour changer jeton en fonction du joueur. 
        //alterner joueur courant (this.turn)
        //compter les tours (this.count_turn ++)
        //update grille 1 ou 2 en fonction du joueur. A partir des coordonnées. 

        //check
        //regarder si victoire ou pas ou null

}