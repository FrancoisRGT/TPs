let recupNb = (function(){

    var nb = [];

    function place(){

        let ind = 0;
        let tab = inputN.show();
    

        for(let i = 0; i < tab.length; i++){  // On détecte si le nombre est un entier ou non
            let y = 0;
            if(tab[i] == '.'){
                ind = i;
                y++;
                if(y > 1){
                    screen.innerHTML = 'Nombre incorect';
                    inputN.reset();
                    inputN.resetb();
                }

            }
        }
    
        if (ind != 0){  // Ici, le tableau obtenu est remplacé par un nombre soit décimal
            let tmp = 0;
            for(let i = 0; i < ind; i++){
                let exp = ind-1-i;
                tmp += tab[i] * Math.pow(10, exp)
            }
            for(let i = ind+1; i < tab.length; i++){
                let exp = -1;
                tmp += tab[i] * Math.pow(10, exp);
                exp--;
            }
            nb.push(tmp);
        }
        else{                                   // Soit entier
            let tmp = 0;
            for(let i = 0; i < tab.length; i++){
                let exp = tab.length-i-1;
                tmp += tab[i] * Math.pow(10, exp);
            }
            nb.push(tmp);
        }

        inputN.reset();
        console.log(nb);
    }

    function verif(){           // On vérifie si 2 nombres ont bien été tappés
        if (nb.length == 2){
            return 1;
        }
        else return 0;
    }


    function new_(i){  // On réatribu un nombre calculé au nombre sur lequel effectuer l'opération
        nb[0] = i;
        nb.pop();
    }


    return{
        placing: () => place(),
        verifying: () => verif(),
        newNb: tab => new_(tab),
        showNb: () => nb,
        reset: () => nb = []
    }

})();












