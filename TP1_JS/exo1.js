// Fonction Addition + Test
function addition(x, y){
    return x+y;
}
console.log(addition(5, 2));

// Fonction Soustraction + Test
function soustraction(x , y){
    return x-y;
}
console.log(soustraction(5, 2));

// Fonction Multiplication + Test
function multiplication(x, y){
    return x*y;
}
console.log(multiplication(5, 2))

// Fonction Division + Test
function division(x, y){
    if (y == 0){
        return ("On ne divise pas par zéro");
    }
    return x/y;
}
console.log(division(5, 2));

// Fonction Mise au carré + Test
function miseCarre(x){
    return Math.pow(x, 2);
}
console.log(miseCarre(5));