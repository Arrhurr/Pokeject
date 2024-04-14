
    var body = document.getElementsByTagName("body")[0];
    var tbl = document.getElementsByTagName("table")[0];
    var select1= document.getElementById("gen-select");
    var filtreGen="basic";
    var filtreType="basic";
    var filtreTexte="";
    select1.addEventListener("change",function(){
        filtreGen=this.value
        filtre(filtreGen,filtreType,filtreTexte)
    });

    var select2= document.getElementById("type-select");
    select2.addEventListener("change",function(){
        filtreType=this.value;
        filtre(filtreGen,filtreType,filtreTexte)
    });

    var textarea= document.getElementById("nom");
    textarea.addEventListener("input",function(){
        filtreTexte=this.value;
        filtre(filtreGen,filtreType,filtreTexte);
    })



    var tblHead = document.createElement("thead");
    var tblBody = document.createElement("tbody");
    var btnSuivant = document.getElementById("Suivant");
    var btnPrecedant = document.getElementById("Precedant");
    var texte = document.getElementById("Page");
    var pop_up_charged = document.getElementById("charged");
    var pop_up_fast = document.getElementById("fast");
    var pokemon_img_pop = document.getElementsByClassName("modal-container2")
    var max=25;
    var page=1;

    var optionsgen=[];
    var optionType=[];
    for(var i=0; i<Pokemon.all_pokemons.length; i++){
        var gen=true;
        for(var j=0; j<optionsgen.length; j++){
            if(Pokemon.all_pokemons[i].generation ==optionsgen[j]){
                gen=false;
            }
        }
        if(gen){
            optionsgen.push(Pokemon.all_pokemons[i].generation)
        }
        var type=true;
        for(var j=0; j<optionType.length; j++){
            if(Pokemon.all_pokemons[i].type[0].type ==optionType[j]){
                type=false;
                }
            }
        if(type){
            optionType.push(Pokemon.all_pokemons[i].type[0].type);
        }
    }

    for(var i=0; i<optionsgen.length;i++) {
        var option=document.createElement("option")
        option.text=optionsgen[i]
        option.value=optionsgen[i]
        select1.add(option);
    }
    for(var i=0; i<optionType.length;i++) {
        var option=document.createElement("option")
        option.text=optionType[i]
        option.value=optionType[i]
        select2.add(option);
    }

    var filtri =[];

    for(var i=0; i<Pokemon.all_pokemons.length; i++){
        filtri.push(Pokemon.all_pokemons[i]);
    }
function tableau(tab){
    if(tab.length%25==0){
        var page_max=tab.length/25;
    }
    else{
        var page_max=((tab.length-(tab.length%25))/25)+1;
    }
    if(page==1){
        btnPrecedant.disabled=true;
      }
    if(page==page_max){
        btnSuivant.disabled=true;
      }
    if(page>1 && page<page_max){
        btnPrecedant.disabled=false;
        btnSuivant.disabled=false;
      }
      texte.innerHTML=page+"/"+page_max
    while(tblBody.firstChild){
        tblBody.removeChild(tblBody.firstChild);
        }
    for(var i=max-25;i<max;i++){
    var row = document.createElement("tr");
    var cell1 = document.createElement("th");
    var cell2 = document.createElement("th");
    var cell3 = document.createElement("th");
    var cell4= document.createElement("th");
    var cell5= document.createElement("th");
    var cell6= document.createElement("th");
    var cell7= document.createElement("th");
    var cell8= document.createElement("th");
    let déjavu = false;
    if(tab[i].id<10){
        var img = document.createElement('img');
            img.src =
'../webp/thumbnails/00'+tab[i].id.toString()+".webp";
    }
    else if(tab[i].id<100){
        var img = document.createElement('img');
            img.src =
'../webp/thumbnails/0'+tab[i].id.toString()+".webp";
    }
    else{
        var img = document.createElement('img');
            img.src =
'../webp/thumbnails/'+tab[i].id.toString()+".webp";
    }
    cell1.appendChild(img);
    
        row.appendChild(cell1);
        var cellId = document.createTextNode(tab[i].id.toString());
        cell2.appendChild(cellId);
        row.appendChild(cell2);
        var cellNom = document.createTextNode(tab[i].nom.toString());
        cell3.appendChild(cellNom);
        row.appendChild(cell3);
        var cellGeneration = document.createTextNode(tab[i].generation.toString());
        cell4.appendChild(cellGeneration);
        row.appendChild(cell4);
        if(tab[i].type.length > 1){
            var cellType = document.createTextNode(tab[i].type[0].type.toString()+" , "+tab[i].type[1].type.toString());
            cell5.appendChild(cellType);
            row.appendChild(cell5);
        }
        else{
            var cellType = document.createTextNode(tab[i].type[0].type.toString());
            cell5.appendChild(cellType);
            row.appendChild(cell5);
        }
        var cellEndurance = document.createTextNode(tab[i].endurance.toString());
        cell6.appendChild(cellEndurance);
        row.appendChild(cell6);
        var cellAttaque = document.createTextNode(tab[i].attaque.toString());
        cell7.appendChild(cellAttaque);
        row.appendChild(cell7);
        var cellDefense = document.createTextNode(tab[i].defense.toString());
        cell8.appendChild(cellDefense);
        row.appendChild(cell8);
        row.setAttribute('id',i+1)

    // add the row to the end of the table body
    tblBody.appendChild(row);
    }

  // put the <tbody> in the <table>
  tbl.appendChild(tblBody);

}





document.getElementById('modal').style.display = 'none'

document.getElementById('modal-close').addEventListener('click', function(e) {
    document.getElementById('modal').style.display = 'none'
    pop_up_charged.innerHTML = "";
    pop_up_fast.innerHTML = "";
})


function v3(){
  const ligne = document.querySelectorAll('tr');
const pokemon_img = document.querySelectorAll('table img');

  for (const f of ligne) {
    
    f.addEventListener('click', function() {
        document.getElementById('modal').style.display = 'block'
        for (var y=0;y<Pokemon.pokemonById(this.getAttribute('id')).move.length;y++){
            if(Pokemon.pokemonById(this.getAttribute('id')).move[y].genre_move == "charged_moves"){
                var ligne_pop_charged = document.createElement("li");
                var pop = document.createTextNode(Pokemon.pokemonById(this.getAttribute('id')).move[y].att_name);
                ligne_pop_charged.appendChild(pop);
                pop_up_charged.appendChild(ligne_pop_charged);
            }
            else{
                var ligne_pop_fast = document.createElement("li");
                var pop = document.createTextNode(Pokemon.pokemonById(this.getAttribute('id')).move[y].att_name);
                ligne_pop_fast.appendChild(pop);
                pop_up_fast.appendChild(ligne_pop_fast);
            }
        }   
    });
  }
    for(const p of pokemon_img) {
        p.addEventListener('mouseenter', function(){
            document.getElementById('modal2').style.display = 'block'    
            var image_grande = document.createElement("img");
            var image_grande2 = document.querySelectorAll("img")
            image_grande.src= '../webp/images/' + p.src.substr(-8,8);
            console.log(image_grande);
            const imageContainer = document.getElementById('modal2').querySelector('.modal-container2');
            imageContainer.appendChild(image_grande);
        })
        p.addEventListener('mouseleave', function(){
            setTimeout(() => {
              }, "5000");
            document.getElementById('modal2').style.display = 'none' 
            const imageContainer = document.getElementById('modal2').querySelector('.modal-container2');
            imageContainer.innerHTML = "";   
        })
    }




  // appends <table> into <body>
  // sets the border attribute of tbl to 2;
  tbl.setAttribute("border", "2");
  
}
tableau(filtri);
v3();



function filtre(gen,type,text){
    filtri=[]
    for(const objet of Pokemon.all_pokemons){
        var garder =true;
        if(gen!="basic"){
            if(gen!=objet.generation){
                garder = false;
            }
        }
        if(type!="basic"){
            if(objet.type.length>1){
                if(type!=objet.type[0].type && type!=objet.type[1].type){
                    garder=false;
                }
            }
            else{
                if(type!=objet.type[0].type){
                    garder=false;
                }
            }
        }
        if(text!=""){
            if(!(objet.nom.includes(text))){
                garder=false;
            }
        }
        if(garder){
            filtri.push(objet);
        }
    }
    max=25
    page=1
    tableau(filtri);
    v3();
}
function suivant(){
    page=page+1;
    max=max+25;
    tableau(filtri);
    v3();
}

function precedant(){
    page=page-1;
    max=max-25;
    tableau(filtri);
    v3();
}

