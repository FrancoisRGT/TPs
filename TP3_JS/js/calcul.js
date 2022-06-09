let calcul = (function(){

    var res = 0;

    function calc(){

        let tmp = 0;
        let nb = recupNb.showNb();

        if (recupNb.verifying() == 1){  // Ici, si on possède 2 nombres, le calcul est effectué
            if (inputO.show() == '+'){  // Le nombre obtenu est ensuite replacé en premier
                tmp = nb[0]+nb[1];
                recupNb.newNb(tmp);
            }
            else if (inputO.show() == '-'){
                tmp = nb[0]-nb[1];
                recupNb.newNb(tmp);
            }
            else if (inputO.show() == '/'){
                tmp = Math.round((nb[0]/nb[1]) * 10000) / 10000;
                recupNb.newNb(tmp);
            }
            else if (inputO.show() == '*'){
                tmp = nb[0]*nb[1];
                recupNb.newNb(tmp);
            }
        }

        console.log(tmp);
    }

    function result(){

        let nb = recupNb.showNb();

        if (recupNb.verifying() == 1){  // Ici, on gère le égal afin d'afficher correctement un résultat
            if (inputO.show() == '+'){
                res = nb[0]+nb[1];
                recupNb.newNb(res);
            }
            else if (inputO.show() == '-'){
                res = nb[0]-nb[1];
                recupNb.newNb(res);
            }
            else if (inputO.show() == '/'){
                res = Math.round((nb[0]/nb[1]) * 10000) / 10000;
                recupNb.newNb(res);
            }
            else if (inputO.show() == '*'){
                res = nb[0]*nb[1];
                recupNb.newNb(res);
            }
        }
        else res = nb[0];

        return res;
    }

    return{
        findRes: () => calc(),
        showRes: () => result()
    }





})();

function operating(){  // Ces fonctions et évènements permettent, dès que l'on clique sur un opérateur,
    recupNb.placing(); // de réaliser le calcul, sans forcément l'afficher
    calcul.findRes();
}

sum.addEventListener('click', operating);
sub.addEventListener('click', operating);
div.addEventListener('click', operating);
mult.addEventListener('click', operating);



