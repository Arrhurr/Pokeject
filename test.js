function getPokemonsByType(typeName){
    var types_found =[]
    if(Type.exist(typeName)==0){
        for(var i=0;i<Pokemon.all_pokemons.length;i++){
            for(var y=0;y<Pokemon.all_pokemons[i].type.length;y++){    
                if(Pokemon.all_pokemons[i].type[y].type==typeName){
                    types_found.push(Pokemon.all_pokemons[i]);
                }  
            }
        }  
    }
    else{
        console.log("Erreur le type entré est invalide")
    }
   
    return types_found
}


function getPokemonsByAttack(attackName){
    var attack_found= [];
        for(var i=0;i<Pokemon.all_pokemons.length;i++){
            for(var y=0;y<Pokemon.all_pokemons[i].attaque.length;y++){
                if(Pokemon.all_pokemons[i].attaque[y].att_name==attackName){
                    attack_found.push(Pokemon.all_pokemons[i])
                }
            }
        }
    return attack_found
}

function sortPokemonByName(){
    var liste_noms= []
    for(var i=0;i<Pokemon.all_pokemons.length;i++){
        liste_noms.push(Pokemon.all_pokemons[i].nom)
    }
    return liste_noms.sort()
}

function  getWeakestEnemies(attack){
    var ennemis_faibles= []
    for(var i=0; i<Type.all_types;i++){
        
    }
}