class Type{
    static all_types=[];
    constructor(type,effect){
        this._type = type;
        this._effect = effect;  
    }
    toString(){console.table(this._type);console.table(this._effect)};
    get type(){return this._type;};
    get effect(){return this._effect};
    set effect(effect){this._effect=effect};
    
    
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