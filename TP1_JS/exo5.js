var participants = 250;
var nbCocktails = (250 * 0.78)

console.log("Il faudrait",nbCocktails,"cocktails si il y avait vraiment 250 participants.");
console.log("Prenons maintenant en compte la marge d'erreur en simulant plusieurs soirées.");


// Fonction simulant x soirées afin d'obtenir une moyenne du nombre de cocktails nécessaires
function simulation(nbsoirees, participants){
    let tests = [];
    let somme = 0;

    for (let i = 0; i < nbsoirees; i++){   // On simule x soirées et note le nombre de cocktails dans un tableau
        let rand = Math.floor(Math.random() * (50 + 50 + 1)) - 50
        let participantS =  participants + rand;
        tests.push((participantS * 0.78));
    }

    tests.forEach(value => somme += value); // On additionne toutes les valeurs entre elles
    
    return (somme / tests.length); // Puis on retourne la moyenne
}

var vraiNbCocktails = Math.floor(simulation(100000, 250)); // On procède à la simulation

console.log("Il faudra donc environ", vraiNbCocktails, "pour satisfaire tout le monde sans gaspillage.")