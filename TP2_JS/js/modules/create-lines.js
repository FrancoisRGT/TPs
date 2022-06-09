let createLine = (function(){
    
    let countIng = (id) => useMData.showIngredients(id).length;
    let line = () => document.createElement('li');


    function MealPrice(id){     // Calcul du prix total d'un plat
    
        let mealPrice = 0;
    
        mealPrice += parseFloat(useMData.showPreparationPrice(id));
    
        for (let i = 0; i < countIng(id); i++){
            let idIng = useMData.showIngredients(id)[i];
            mealPrice += parseFloat(useIData.showPrice(idIng));
        }
    
        return mealPrice;
    }
   
    function nLine(id){     // Création d'une ligne de liste contenant nom + prix d'un plat

        let li = line();
        li.innerHTML += useMData.showName(id);
        li.innerHTML += ' ';
        li.innerHTML += MealPrice(id);
        li.innerHTML += '€';
        li.classList.add('list-group-item', 'list-group-item-dark')

        return li;
    }

    function IngList(id){  // On place la liste des ingrédients dans un tableau

        let list = [];
    
        for (let i = 0; i < countIng(id); i++){
            let ingRef = useMData.showIngredients(id)[i];
            let ingName = useIData.showName(ingRef);
            list.push(ingName);
        }
        
        return list;
    }

    function iLine(id){  // Création d'une ligne de liste contenant les ingrédients d'un plat
        let li = line();
        li.innerHTML = IngList(id);
        li.classList.add('list-group-item')

        return li;
    }

    function pLine(id){  // Création d'une ligne de liste contenant le temps de préparation d'un plat
        let li = line();
        li.innerHTML = useMData.showPreparationTime(id);
        li.innerHTML += ' min';
        li.classList.add('list-group-item')

        return li;
    }

    return{
        nameLine: id => nLine(id),
        ingLine: id => iLine(id),
        prepLine: id => pLine(id)
    }
})();


let createTabLine = (function(){


    let tabLine = () => document.createElement('th');

    function nTabLine(id){   // Création d'une case de tableau contenant le nom d'un ingrédient
        let th = tabLine();
        th.innerHTML = useIData.showName(id); 
        return th;
    }

    function lTabLine(id){   // Création d'une case de tableau contenant la localité ou non d'un ingrédient
        let th = tabLine();
        if(useIData.showIfLocal(id) == 1) th.innerHTML = 'X';
        th.classList.add('text-center');
        return th;
    }

    function pTabLine(id){  // Création d'une case de tableau contenant le prix d'un ingrédient
        let th = tabLine();
        th.innerHTML = useIData.showPrice(id);
        th.innerHTML += ' €';
        th.classList.add('text-center');
        return th;
    }
    
    return{
        nameTabLine: id => nTabLine(id),
        localTabLine: id => lTabLine(id),
        priceTabLine: id => pTabLine(id)
    }

})();


