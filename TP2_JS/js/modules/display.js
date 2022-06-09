let displayList = (function(){

    let listSize = meal.length;

    function addName(ul, i){                // Ajout d'une ligne de nom de plat dans une liste
        let li = createLine.nameLine(i);
        li.style.fontWeight = 'bold';
        ul.appendChild(li);
    }

    function addIngredients(ul, i){         // Ajout d'une ligne d'ingrédients dans une liste
        let li = createLine.ingLine(i);
        li.style.fontStyle = 'italic';
        ul.appendChild(li);
    }

    function addPreparationTime(ul, i){     // Ajout d'une ligne de temps de préparation dans une liste
        let li = createLine.prepLine(i);
        li.style.fontStyle = 'italic';
        ul.appendChild(li);
    }

    function addList(){                     // Création d'une liste de plat et affichage de celle-ci
        let list = document.getElementById('list');
        
        for(let i = 0; i < listSize; i++){
            let ul = document.createElement('ul')
            addName(ul, i);
            addIngredients(ul, i);
            addPreparationTime(ul, i);
            ul.classList.add('list-group')
            list.appendChild(ul);
        }




    }


    return{
        insertList: () => addList()
    }

})();

let displayTab = (function(){

    let tabSize = ingredients.length;
    let newLine = () => document.createElement('tr');

    function addTabLine(){        // Ajout d'une ligne dans le tableau contenant les infos d'un ingrédient
        let tab = document.getElementById('tab');

        for (let i = 0; i < tabSize; i++){
            let tr = newLine();
            tab.appendChild(tr);

            let th = createTabLine.nameTabLine(i);
            tr.appendChild(th);

            th = createTabLine.localTabLine(i);
            tr.appendChild(th);

            th = createTabLine.priceTabLine(i);
            tr.appendChild(th);

        }
        
    }
    return{
        insertTabLine: () => addTabLine()
    }
})();