
function attackByType(typeName){
    var garde = [];
    for(var i=0; i<Attack.all_attacks.length; i++){
        if(Attack.all_attacks[i].type_move.type == typeName){
            garde.push(Attack.all_attacks[i]);
        }

    }
    return garde;
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
    for(var i=0; i<poke.type[0].effect.length; i++){
        if(poke.type.length==1){
            if(poke.type[0].effect[poke.type.effect.at(i)]<poke.type[0].effect[min[0]]){
                min=[]
                min.push(poke.type.effect.at(i))
            }
            else if(poke.type[0].effect[poke.type.effect.at(i)]==poke.type[0].effect[min[0]]){
                min.push(poke.type.effect.at(i))
            }
        }
        else{
            if(poke.type[0].effect[poke.type.effect.at(i)] * poke.type[1].effect[poke.type.effect.at(i)]<poke.type[0].effect[min[0]] * poke.type[1].effect[min[0]]){
                min=[]
                min.push(poke.type.effect.at(i))
            }
            else if(poke.type[0].effect[poke.type.effect.at(i)] * poke.type[1].effect[poke.type.effect.at(i)]==poke.type[0].effect[min[0]] * poke.type[1].effect[min[0]]){
                min.push(poke.type.effect.at(i))
            }
        }
    }
    return min;
}


