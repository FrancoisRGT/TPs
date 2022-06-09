let displayNb = (function(){

    return{
        displayOne: () => screen.innerHTML += '1',  // Affichage sur l'écran des nombres
        displayTwo: () => screen.innerHTML += '2',
        displayThree: () => screen.innerHTML += '3',
        displayFour: () => screen.innerHTML += '4',
        displayFive: () => screen.innerHTML += '5',
        displaySix: () => screen.innerHTML += '6',
        displaySeven: () => screen.innerHTML += '7',
        displayHeight: () => screen.innerHTML += '8',
        displayNine: () => screen.innerHTML += '9',
        displayZero: () => screen.innerHTML += '0',
        displayPoint: () => screen.innerHTML += '.'
    }
})();





let displayOp = (function(){


    return{
        displaySum: () => screen.innerHTML = 'Rep + ', // Affichage sur l'écran des opérateurs
        displaySub: () => screen.innerHTML = 'Rep - ',
        displayDiv: () => screen.innerHTML = 'Rep / ',
        displayMult: () => screen.innerHTML = 'Rep * '
    }


})();

let displayRes = (function(){

    function display(){
        screen.innerHTML = calcul.showRes();
    }

    return{
        displayResult: () => display()   // Affichage sur l'écran du résultat
    }

})();

function finalResult(){
    recupNb.placing();
    calcul.showRes();
    displayRes.displayResult();
}

res.addEventListener('click', finalResult);




function displayClick(){   // Mise en place de l'affichage au clique sur clavier
    one.addEventListener('click', displayNb.displayOne);
    two.addEventListener('click', displayNb.displayTwo);
    three.addEventListener('click', displayNb.displayThree);
    four.addEventListener('click', displayNb.displayFour);
    five.addEventListener('click', displayNb.displayFive);
    six.addEventListener('click', displayNb.displaySix);
    seven.addEventListener('click', displayNb.displaySeven);
    height.addEventListener('click', displayNb.displayHeight);
    nine.addEventListener('click', displayNb.displayNine);
    zero.addEventListener('click', displayNb.displayZero);
    point.addEventListener('click', displayNb.displayPoint);
    sum.addEventListener('click', displayOp.displaySum);
    sub.addEventListener('click', displayOp.displaySub);
    div.addEventListener('click', displayOp.displayDiv);
    mult.addEventListener('click', displayOp.displayMult);

}

function displayInput(e){  // Mise en place de l'affichage et des paramètres à l'appuie d'un chiffre
    if (e.keyCode == 48){
        displayNb.displayZero();
        inputN.zero();
    }
    else if (e.keyCode == 49){
        displayNb.displayOne();
        inputN.one();
    }
    else if (e.keyCode == 50){
        displayNb.displayTwo();
        inputN.two();
    }
    else if (e.keyCode == 51){
        displayNb.displayThree();
        inputN.three();
    }
    else if (e.keyCode == 52){
        displayNb.displayFour();
        inputN.four();
    }
    else if (e.keyCode == 53){
        displayNb.displayFive();
        inputN.five();
    }
    else if (e.keyCode == 54){
        displayNb.displaySix();
        inputN.six();
    }
    else if (e.keyCode == 55){
        displayNb.displaySeven();
        inputN.seven();
    }
    else if (e.keyCode == 56){
        displayNb.displayHeight();
        inputN.height();
    }
    else if (e.keyCode == 57){
        displayNb.displayNine();
        inputN.nine();
    }
}

addEventListener('keydown', displayInput);



