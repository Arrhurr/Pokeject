
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


