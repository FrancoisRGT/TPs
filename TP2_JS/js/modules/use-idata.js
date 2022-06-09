let useIData = (function(){
    
    const data = ingredients;

    function getObjectById(id) {  // On séléctionne un ingrédient en particulier selon son indice
        let searchedIng = data.filter(obj => obj.idIng == id);
        return searchedIng[0];
    }


    return{
        selectTab: () => data,  // Retour de tous les ingrédients
        selectByID: id => getObjectById(id), // Retour d'un ingrédient 
        showName: id => getObjectById(id).name, // Retour du nom d'un ingrédient
        showIfLocal: id => getObjectById(id).local, // Retour  de la localité d'un ingrédient
        showPrice: id => getObjectById(id).prix  // Retour du prix d'un ingrédient
    }
})();

