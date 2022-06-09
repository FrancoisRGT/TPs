let inputN = (function(){

    var a = [];
    var b = 0;

    function setNumbers(num){  // Ici un tableau prends est rempli avec les chiffres tappés par l'utilisateur
        if (b == 1){
            screen.innerHTML = '';
            b = 0;
        }

        a.push(num);

        if (a.length > 20){
            screen.innerHTML = 'Trop de nombres';
            a = [];
            b = 1;
        }

        console.log(a);
    }
    


    return{
        one: () => setNumbers(1),  // On rempli le tableau selon le chiffre tappé
        two: () => setNumbers(2),
        three: () => setNumbers(3),
        four: () => setNumbers(4),
        five: () => setNumbers(5),
        six: () => setNumbers(6),
        seven: () => setNumbers(7),
        height: () => setNumbers(8),
        nine: () => setNumbers(9),
        zero: () => setNumbers(0),
        point: () => setNumbers('.'),
        show: () => a,                  // Fonctions pour manipuler le tableau
        reset: () => a = [],
        resetb: () => b = 1
    }


})();

let inputO = (function(){

    var b = 0;


    return{
        sum: () => b = '+',  // On récupère l'opérateur utilisé pour le calcul
        sub: () => b = '-',
        div: () => b = '/',
        mult: () => b = '*',
        res: () => b = '=',
        show: () => b,
        reset: () => b = 0
    }



})();

function start() {  // Mise en place du clavier cliquable
    one.addEventListener('click', inputN.one);
    two.addEventListener('click', inputN.two);
    three.addEventListener('click', inputN.three);
    four.addEventListener('click', inputN.four);
    five.addEventListener('click', inputN.five);
    six.addEventListener('click', inputN.six);
    seven.addEventListener('click', inputN.seven);
    height.addEventListener('click', inputN.height);
    nine.addEventListener('click', inputN.nine);
    zero.addEventListener('click', inputN.zero);
    point.addEventListener('click', inputN.point);
    sum.addEventListener('click', inputO.sum);
    sub.addEventListener('click', inputO.sub);
    div.addEventListener('click', inputO.div);
    mult.addEventListener('click', inputO.mult);
}