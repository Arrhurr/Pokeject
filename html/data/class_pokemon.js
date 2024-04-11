class Pokemon{
    static all_pokemons = []
    constructor(id,nom,generation,form,attaque,defense,endurance,type,move){
        this._id = id;
        this._nom = nom;
        this._generation=generation;
        this._form = form;
        this._attaque =attaque;
        this._defense =defense;
        this._endurance = endurance;
        this._type=type;
        this._move = move;
    }    //ajouter this._attaque dans le tostring
    toString(){console.table(this._id);console.table(this._nom);console.table(this._form);console.table(this._attaque);console.table(this._defense);console.table(this._endurance);console.table(this._type);};
    get id(){return this._id;};
    get nom(){return this._nom;};
    get generation(){return this._generation;};
    get form(){return this._form;};
    get defense(){return this._defense;};
    get type(){return this._type;};
    get attaque(){return this._attaque;};
    get move(){return this._move;};
    get endurance(){return this._endurance;};
    static pokemonByName(name){for(var i=0;i<Pokemon.all_pokemons.length;i++){if(Pokemon.all_pokemons[i].nom==name){return Pokemon.all_pokemons[i];}}}

    static pokemonById(id){for(var i=0;i<this.all_pokemons.length;i++){
        if(this.all_pokemons[i].id==id){return this.all_pokemons[i];}}
    }

}