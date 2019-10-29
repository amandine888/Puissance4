
class Puissance4 {

    constructor (grid_dimension = {x:7, y:6}) {
        this.grid_dimension = grid_dimension; 
        this.player1 = 1; 
        this.player2 = 2; 
        this.turn = 1; //this.player1;
        this.max_turn = this.grid_dimension.x * this.grid_dimension.y; 
        this.count_turn = 0; 
        this.winner = null;
        this.grid = [];


        this.generate_grid();
        this.handle_click(e)
        this.check_case();

        $("#puissance4").click(function(){ 
        })

    }
     
    generate_grid(){
        for (let h = 0; h<this.grid_dimension.y; h++){
            this.grid[h] = [];
            for (let l = 0; l<this.grid_dimension.x; l++) {
                this.grid[h][l] = 0;
            }
        }    
        console.log(this.grid)
    }
    check_case(){

    }
    
        }


