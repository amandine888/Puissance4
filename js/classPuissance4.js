
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

        this.check_col(y);

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
        $("tr:nth-child(" + (y+1) + ") td:nth-child(" + (x+1) + ") img").attr("src", "./img/Jeton.png")}
            else {this.player2
            $("tr:nth-child(" + (y+1) + ") td:nth-child(" + (x+1) + ") img").attr("src", "./img/jetonalien.png")}
        this.count_turn++;
        console.log("countTurn",this.count_turn)
        if(this.count_turn === this.max_turn){
            if (window.alert("Égalité !")){
                window.reset; // à changer
            }
        }
    }

    check_col(y){
        
    }


}

 //cibler et placer jeton sur img, mettre condition pour changer jeton en fonction du joueur. 
        //alterner joueur courant (this.turn)
        //compter les tours (this.count_turn ++)
        //update grille 1 ou 2 en fonction du joueur. A partir des coordonnées. 

        //check
        //regarder si victoire ou pas ou null