
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
        console.table("Erreur le type entré est invalide")
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

function DeuxTypes(t1,t2){
    p1 = getPokemonsByType(t1);
    p2 = getPokemonsByType(t2);
    result=[]
    for(var i=0;i<p1.length;i++){
        for(var y=0;y<p2.length;y++){
            if(p1[i]==p2[y]){
                result.push(p1[i]);
            }
        }
    }
    return result;
}

function getWeakestEnemies(attack){
    var ennemis_faibles= []
    var max=0
    var obj_attack
    var max_type=[]
    var result=[]
    var result2=[]
    for(var z=0; z<Attack.all_attacks.length;z++){
        if(attack == Attack.all_attacks[z].att_name){
            obj_attack=Attack.all_attacks[z]
        }
    }
    for(key in obj_attack.type_move.effect){
        if (max<obj_attack.type_move.effect[key]){
            max = obj_attack.type_move.effect[key];
        }
        
    }
    for(key in obj_attack.type_move.effect){
        if(obj_attack.type_move.effect[key]==max){
            max_type.push(key)   
        }    
    }
    for(var y=0;y<max_type.length;y++){
        for(var i=y;i<max_type.length;i++){
            if(max_type[y]!=max_type[i] && max_type.length>1){
                result.push(DeuxTypes(max_type[y],max_type[i]));
            }
            if(max_type.length == 1){
                result.push(getPokemonsByType(max_type[0]))
            }
        }
    }
    for(var z=0;z<result.length;z++){
        for(var q=0;q<result.length;q++){
            if(result[z].length!=0 && result[z][q]!=null){
                result2.push(result[z][q])
            }
        } 
    }
    if(max_type.length == 1){
        result2 = result[0]
    }
    return result2;
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

function getBestAttackTypesForEnnemy(name){
    var poke=Pokemon.pokemonByName(name);
    var max=["Bug"];
    var vide=[]
    for(key in poke.type[0].effect){
        if(key!="Bug"){
            if(poke.type.length==1){

                if(type_effectiveness[key][poke.type[0].type]>type_effectiveness[max[0]][poke.type[0].type]){
                    max=[]
                    max.push(key)
                }
                else if(type_effectiveness[key][poke.type[0].type]==type_effectiveness[max[0]][poke.type[0].type]){
                    max.push(key)
                }
            }
            else{

                if(type_effectiveness[key][poke.type[0].type] * type_effectiveness[key][poke.type[1].type]>type_effectiveness[max[0]][poke.type[0].type] * type_effectiveness[max[0]][poke.type[1].type]){
                    max=[]
                    max.push(key)
                }
                else if(type_effectiveness[key][poke.type[0].type] * type_effectiveness[key][poke.type[1].type]==type_effectiveness[max[0]][poke.type[0].type] * type_effectiveness[max[0]][poke.type[1].type]){
                    max.push(key)
                }
            }
        
        }
    }
    return max;
}