
    function import_pokemon(){
    const liste_gen=[];
    for(const [key,values] of Object.entries(generation)){
        liste_gen.push(values)
        }
    for(key in type_effectiveness){
        Type.all_types.push(new Type(key,type_effectiveness[key]));
    }
    for(var i=0;i<pokemon.length;i++){
        var poketype=[]
        var pokeattack= []
        if(pokemon[i]["form"]=="Normal"){
            var feur=0
            for(key in pokemon_moves[i]){
                if(feur<4){
                    for(var b=0;b<pokemon_moves[i][key].length;b++){
                        for(var a=0;a<charged_moves.length;a++){
                            if(feur==0 || feur==1){
                                if(charged_moves[a]["name"]==pokemon_moves[i][key][b]){
                                    if(Attack.exist(pokemon_moves[i][key][b])==1){
                                        Attack.all_attacks.push(new Attack(pokemon_moves[i][key][b], key,Type.all_types[Type.find(charged_moves[a]["type"])],charged_moves[a]["critical_chance"],charged_moves[a]["duration"],charged_moves[a]["energy_delta"],charged_moves[a]["move_id"],charged_moves[a]["power"],charged_moves[a]["stamina_loss_scaler"]));
                                    }
                                }   
                            }
                        }
                        for(var a=0;a<fast_moves.length;a++){    
                            if(feur==2 || feur==3){
                                if(fast_moves[a]["name"]==pokemon_moves[i][key][b]){
                                    if(Attack.exist(pokemon_moves[i][key][b])==1){
                                        Attack.all_attacks.push(new Attack(pokemon_moves[i][key][b],key,Type.all_types[Type.find(fast_moves[a]["type"])],fast_moves[a]["critical_chance"],fast_moves[a]["duration"],fast_moves[a]["energy_delta"],fast_moves[a]["move_id"],fast_moves[a]["power"],fast_moves[a]["stamina_loss_scaler"]));
                                    }
                                }
                            }
                        
                        }pokeattack.push(Attack.all_attacks[Attack.find(pokemon_moves[i][key][b])]);
                    }
            }
            feur++;
            }
            let poketype=[];
            for(let j=0;j<pokemon_type[i]["type"].length;j++){
                poketype.push(Type.all_types[Type.find(pokemon_type[i]["type"][j])])
            }
            var genZ = 0;
            for(let g=0;g<liste_gen.length;g++){
                for(let p=0;p<liste_gen[g].length;p++){
                    if(liste_gen[g][p]["id"]==pokemon[i]["pokemon_id"]){
                        genZ=liste_gen[g][p]["generation_number"]
                    }
                }
            }
            Pokemon.all_pokemons.push(new Pokemon(pokemon[i]["pokemon_id"],pokemon[i]["pokemon_name"],genZ,pokemon[i]["form"],pokemon[i]["base_attack"],pokemon[i]["base_defense"],pokemon[i]["base_stamina"],poketype,pokeattack));
        }    
    }
}
import_pokemon();