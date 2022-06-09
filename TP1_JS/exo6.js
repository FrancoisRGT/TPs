// Définition des valeurs 
var myArray = [20, 1, 13, 8, 10, 6, 15, 25, 2, 10, 14, 18, 9];

// Fonction créant l'histogramme d'un tableau + Test
function histogram(tab){
    let histo = [];             // Mise en place des paramètres du tableau
    let max = Math.max(...tab);
    let size = tab.length;

    for (let i = max; i > 0; i--){ // On créé un deuxième tableau dans lequel on place les caractères
        let tab2 = [];

        for (let y = 0; y < size; y++){
            if (i <= tab[y]){
                tab2.push("☔");
            }
            else{
                tab2.push("  ");
            }
        }
        histo.push(tab2); // On insère le tableau temporaire dans le tableau principal
    }

    console.table(histo); // On affiche un tableau à 2 dimensions
}

histogram(myArray);
