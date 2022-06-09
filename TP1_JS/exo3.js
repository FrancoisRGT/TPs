// Fonction triant les nombres d'un tableau dans l'ordre croissant 
function tri(tab){      
    let compare = (x, y) => x-y;     
    tab = tab.sort(compare);
    return tab;
}

// Fonction qui extrait les nombres impairs d'un tableau et les trie
function odd(tab){
    let odds = tab.filter(value => 0 != value%2 );
    return tri(odds);
}

// Fonction générant le sinus des valeurs d'un tableau
function sin(tab){
    let sin = tab.map(value => Math.sin(value));
    return sin;
}

// Fonction renvoyant la quantité de nombres dont le logarithme en base 10 correspond à leurs indices dans le tableau
function nbLog(tab){
    let count = 0;
    for (let i = 0; i < tab.length; i++){
        Math.log10(tab[i]) == i ? count++ : '';
    }
    
    return count;
}


// Définition du tableau et test des fonctions
var myArray = [157, 10, 81, 1000, 4, 1024, 16, 492, 9, 287, 0];

console.log(odd(myArray));
console.log(sin(myArray));
console.log(nbLog(myArray));