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
            for(var y=0;y<Pokemon.all_pokemons[i].move.length;y++){
                if(Pokemon.all_pokemons[i].move[y].att_name==attackName){
                    attack_found.push(Pokemon.all_pokemons[i])
                }
            }
        }
    return attack_found
}


function attackByType(typeName){
    var garde = [];
    for(var i=0; i<Attack.all_attacks.length; i++){
        if(Attack.all_attacks[i].type_move.type == typeName){
            garde.push(Attack.all_attacks[i]);
        }
    }
    return garde;
}

function sortPokemonByName(){
    var liste_noms= []
    for(var i=0;i<Pokemon.all_pokemons.length;i++){
        liste_noms.push(Pokemon.all_pokemons[i].nom)
    }
    return liste_noms.sort()
}

function getWeakestEnemies(attack){
    var ennemis_faibles= []
    var max=0
    var obj_attack
    var max_type = []
    for(var z=0; z<Attack.all_attacks.length;z++){
        if(attack == Attack.all_attacks[z].att_name){
            obj_attack=Attack.all_attacks[z]
        }
    }
    for(key in obj_attack.type_move.effect){
        if(max<=obj_attack.type_move.effect[key]){
            max = obj_attack.type_move.effect[key];
            max_type.push(max,key);
        }
        key++;
    }
    for(i in obj_attack.type_move){
        if(obj_attack.type_move[i]==1.6){
            console.log(obj_attack.type_move[0])
        }
    }

    //ennemis_faibles.push(getPokemonsByType(max_type))
    
    return max_type;
}

function sortPokemonByStamina(){
    var sorted=Pokemon.all_pokemons;
    for(var i=0; i<sorted.length; i++){
        var pokemonCourant=i;
        for(var j=i; j<sorted.length; j++){
            if(Pokemon.all_pokemons[pokemonCourant].endurance<Pokemon.all_pokemons[j].endurance){
                pokemonCourant=j;
            }
        }
        if(pokemonCourant!=i){
            var temp=sorted[pokemonCourant];
            sorted[pokemonCourant] =sorted[i];
            sorted[i]=temp;
        }
        
    }
    return sorted;
}

function getAttackTypesForEnnemy(name){
    var poke=Pokemon.pokemonByName(name);
    var min=["Bug"];
    console.log(poke.type[0].effect)
    for(key in poke.type[0].effect){
        if(key!="Bug"){
            console.log("AAAAA")
            if(poke.type.length==1){
                console.log("oui")
                if(poke.type[0].effect[key]>poke.type[0].effect[min[0]]){
                    min=[]
                    min.push(key)
                }
                else if(poke.type[0].effect[key]==poke.type[0].effect[min[0]]){
                    min.push(key)
                }
                console.table(poke.type[0].effect)
            }
            else{
                console.log("non")
                if(poke.type[0].effect[key] * poke.type[1].effect[key]>poke.type[0].effect[min[0]] * poke.type[1].effect[min[0]]){
                    min=[]
                    min.push(key)
                }
                else if(poke.type[0].effect[key] * poke.type[1].effect[key]==poke.type[0].effect[min[0]] * poke.type[1].effect[min[0]]){
                    min.push(key)
                }
            }
        
        }
    }
    return min;
}

