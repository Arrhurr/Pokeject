/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////:
class Pokemon{
    static all_pokemons = []
    constructor(id,nom,form,attaque,defense,endurance,type,move){
        this._id = id;
        this._nom = nom;
        this._form = form;
        this._attaque =attaque;
        this._defense =defense;
        this._endurance = endurance;
        this._type=type;
        this._move = move;
////        this._attackability=attackability;
    }    //ajouter this._attaque dans le tostring
    toString(){console.log(this._id);console.log(this._nom);console.log(this._form);console.log(this._attaque);console.log(this._defense);console.log(this._endurance);console.log(this._type);};
    get id(){return this._id;};
    get nom(){return this._nom;};
    get form(){return this._form;};
    get defense(){return this._defense;};
    get type(){return this._type;};
    get attaque(){return this._attaque;};
    get move(){return this._move;};
///    get attackability(){return this._attackability;};
    static pokemonById(id){for(var i=0;i<this.all_pokemons.length;i++){
        if(this.all_pokemons[i].id==id){return this.all_pokemons[i];}}
    }

}
/////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////:


class Type{
    static all_types=[];
    constructor(type,effect){
        this._type = type;
        this._effect = effect;  
    }
    toString(){console.log(this._type);console.log(this._effect)};
    get type(){return this._type;};
    get effect(){return this._effect};
    set effect(effect){this._effect.push([effect,type_effectiveness[this._type][effect]]);};
    
    
    static exist(type){
        let vrai=1;
        for(var i=0;i<Type.all_types.length;i++){
            if(Type.all_types[i].type==type){
                vrai=0;
            }
        }
        return vrai;
    };
    static find(type){
        if(Type.exist(type)==1){
            return -1;
        }
        else{
            for(var i=0;i<Type.all_types.length;i++){
                if(Type.all_types[i].type==type){
                    return i;
                }
            }
        }
    }
}

class Attack{
    static all_attacks = [];
    constructor(att_name, type_move, critical_chance, duration, energy_delta, move_id,power, stamina_loss_scaler){
        this._att_name = att_name;       //nom de l'attaque
        this._type_move = type_move;  //type de l'attaque
        this._genre_move; //attaque chargées ou rapide
        this._critical_chance = critical_chance;
        this._duration = duration;
        this._energy_delta = energy_delta;
        this._move_id = move_id;
        this._power = power;
        this._stamina_loss_scaler = stamina_loss_scaler;


    }
    
    toString(){console.log(this._att_name, this._type_move, this._genre_move)};

    get att_name(){return this._att_name};
    get type_move(){return this._type_move};
    get genre_move(){return this._genre_move};

    static exist(att_name){
        let vrai=1;
        for(var i=0;i<Attack.all_attacks.length;i++){
            if(Attack.all_attacks[i].att_name==att_name){
                vrai=0;
            }
        }
        return vrai;
    };
    static find(att_name){
        if(Attack.exist(att_name)==1){
            return -1;
        }
        else{
            for(var i=0;i<Attack.all_attacks.length;i++){
                if(Attack.all_attacks[i].att_name==att_name){
                    return i;
                }
            }
        }
    }
    

}
///////////////////////////////////////////////////////////////////////////////
function import_pokemon(){
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
                                        Attack.all_attacks.push(new Attack(pokemon_moves[i][key][b],Type.all_types[Type.find(charged_moves[a]["type"])],charged_moves[a]["critical_chance"],charged_moves[a]["duration"],charged_moves[a]["energy_delta"],charged_moves[a]["move_id"],charged_moves[a]["power"],charged_moves[a]["stamina_loss_scaler"]));
                                    }
                                }   
                            }
                        }
                        for(var a=0;a<fast_moves.length;a++){    
                            if(feur==2 || feur==3){
                                if(fast_moves[a]["name"]==pokemon_moves[i][key][b]){
                                    if(Attack.exist(pokemon_moves[i][key][b])==1){
                                        Attack.all_attacks.push(new Attack(pokemon_moves[i][key][b],Type.all_types[Type.find(fast_moves[a]["type"])],fast_moves[a]["critical_chance"],fast_moves[a]["duration"],fast_moves[a]["energy_delta"],fast_moves[a]["move_id"],fast_moves[a]["power"],fast_moves[a]["stamina_loss_scaler"]));
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
            Pokemon.all_pokemons.push(new Pokemon(pokemon[i]["pokemon_id"],pokemon[i]["pokemon_name"],pokemon[i]["form"],pokemon[i]["base_attack"],pokemon[i]["base_defense"],pokemon[i]["base_stamina"],poketype,pokeattack));
        }
        
              
        
        
    
             
    }
}
///////////////////////////////////////////////////////////////
import_pokemon();
