class Attack{
    static all_attacks = [];
    constructor(att_name, genre_move,type_move, critical_chance, duration, energy_delta, move_id,power, stamina_loss_scaler){
        this._att_name = att_name;       //nom de l'attaque
        this._type_move = type_move;  //type de l'attaque
        this._genre_move = genre_move; //attaque chargées ou rapide
        this._critical_chance = critical_chance;
        this._duration = duration;
        this._energy_delta = energy_delta;
        this._move_id = move_id;
        this._power = power;
        this._stamina_loss_scaler = stamina_loss_scaler;


    }
    
    toString(){console.table(this._att_name, this._type_move, this._genre_move)};

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