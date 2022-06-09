let useMData = (function(){
    
    const data = meal;

    function getObjectById(id) {  // On sélectionne un plat en particulier selon son indice
        let searchedMeal = data.filter(obj => obj.idMeal == id);
        return searchedMeal[0];
    }

    return{
        selectTab: () => data, // Retour  de tous les plats
        selectByID: id => getObjectById(id),  // Retour d'un plat
        showName: id => getObjectById(id).name, // Retour du nom d'un plat
        showPreparationTime: id => getObjectById(id).preparationTime, // Retour du temps de préparation d'un plat
        showIngredients: id => getObjectById(id).ingredients,  // Retour des ingrédients d'un plat
        showPreparationPrice: id => getObjectById(id).preparationPrice  // Retour du prix de préparation d'un plat
    }
})();

