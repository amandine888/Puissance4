$(document).ready(function() {
    // Insert your JQuery code for the menu

// Bouton pour afficher les règles du jeu : 
 $("#boutonRules").on("click", function(){
     $("#descriptif").fadeToggle(); 
 })

// Bouton pour rediriger vers la page de jeu :  
 $("#boutonJeu").on("click", function(){
    window.location="file:///Users/amandinedivay/Documents/Web%20dev/Projets/Puissance4/game.html" 
})


})
