// Définition de notre chaîne de caractères
let fact = "Vérité sur Chuck Norris : Hulk s'est battu contre Chuck Norris une fois. Depuis, il fait de la pub pour du maïs.";

// Fonction remplaçant le mot "Chuck Norris" par "Valentin Bequart" + Test
var replaceChuck = string => string.split("Chuck Norris").join("Valentin Bequart");
console.log(replaceChuck(fact));

// Fonction calculant la taille moyenne des mots d'une chaine de caractère + Test
function lengthAverage (string){
    let words = string.split(' ');  // On place chaque mot dans un tableau
    let count =  0;                 // Initialisation du compteur

    for (let i = 0; i < words.length; i++){  // On compte le nombre de caractère de chaque mot
        count += words[i].length;
    }

    let average = count / words.length;  // On calcule la taille moyenne des mots du texte
    return average;
}
console.log(lengthAverage(fact));

// Fonction qui supprime les caractères apparaissant 2 fois dans la chaine et tri le reste 
// dans l'odre alphabétique + Test
function removeDuplicates(string) {
    let seen = [];
    let seen2 = [];
    let result = [];

    for (let i = 0; i < string.length; i++) { // On scan tout les caractères et note ceux présents en double
        let char = string.charAt(i);

        if (char in seen) {
            seen2[char] = true;
        } 
        else {
            seen[char] = true;
        }
    }

    for (let i = 0; i < string.length; i++) {  // On isole les caractères uniques
        let char = string.charAt(i);

        if (char in seen2) {
            continue;
        } 
        else {
            seen[char] = true;
            result.push(char);
        }
    }
    return result.sort();
}
console.log(removeDuplicates(fact.toLowerCase()));
