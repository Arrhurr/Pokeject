
    var body = document.getElementsByTagName("body")[0];
    var tbl = document.getElementsByTagName("table")[0];
    var tblHead = document.createElement("thead");
    var tblBody = document.createElement("tbody");
    var btnSuivant = document.getElementById("Suivant");
    var btnPrecedant = document.getElementById("Precedant");
    var texte = document.getElementById("Page");
    var max=25;
    var page=1;
    if(Pokemon.all_pokemons.length%25==0){
        var page_max=Pokemon.all_pokemons.length/25;
    }
    else{
        var page_max=((Pokemon.all_pokemons.length-(Pokemon.all_pokemons.length%25))/25)+1;
    }
function tableau(){
    if(max<=25){
        btnPrecedant.disabled=true;
        btnSuivant.disabled=false;
      }
      else if(max>Pokemon.all_pokemons.length){
        btnPrecedant.disabled=false;
        btnSuivant.disabled=true;
      }
      else{
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
    if(Pokemon.all_pokemons[i].id<10){
        var img = document.createElement('img');
            img.src =
'../webp/thumbnails/00'+Pokemon.all_pokemons[i].id.toString()+".webp";
    }
    else if(Pokemon.all_pokemons[i].id<100){
        var img = document.createElement('img');
            img.src =
'../webp/thumbnails/0'+Pokemon.all_pokemons[i].id.toString()+".webp";
    }
    else{
        var img = document.createElement('img');
            img.src =
'../webp/thumbnails/'+Pokemon.all_pokemons[i].id.toString()+".webp";
    }
    cell1.appendChild(img);
    
        row.appendChild(cell1);
        var cellId = document.createTextNode(Pokemon.all_pokemons[i].id.toString());
        cell2.appendChild(cellId);
        row.appendChild(cell2);
        var cellNom = document.createTextNode(Pokemon.all_pokemons[i].nom.toString());
        cell3.appendChild(cellNom);
        row.appendChild(cell3);
        var cellGeneration = document.createTextNode(Pokemon.all_pokemons[i].generation.toString());
        cell4.appendChild(cellGeneration);
        row.appendChild(cell4);
        if(Pokemon.all_pokemons[i].type.length > 1){
            var cellType = document.createTextNode(Pokemon.all_pokemons[i].type[0].type.toString()+" , "+Pokemon.all_pokemons[i].type[1].type.toString());
            cell5.appendChild(cellType);
            row.appendChild(cell5);
        }
        else{
            var cellType = document.createTextNode(Pokemon.all_pokemons[i].type[0].type.toString());
            cell5.appendChild(cellType);
            row.appendChild(cell5);
        }
        var cellEndurance = document.createTextNode(Pokemon.all_pokemons[i].endurance.toString());
        cell6.appendChild(cellEndurance);
        row.appendChild(cell6);
        var cellAttaque = document.createTextNode(Pokemon.all_pokemons[i].attaque.toString());
        cell7.appendChild(cellAttaque);
        row.appendChild(cell7);
        var cellDefense = document.createTextNode(Pokemon.all_pokemons[i].defense.toString());
        cell8.appendChild(cellDefense);
        row.appendChild(cell8);

    // add the row to the end of the table body
    tblBody.appendChild(row);
    }

  // put the <tbody> in the <table>
  tbl.appendChild(tblBody);

}
tableau();

  // appends <table> into <body>
  // sets the border attribute of tbl to 2;
  tbl.setAttribute("border", "2");

function suivant(){
    page=page+1;
    max=max+25;
    tableau();
}
function precedant(){
    page=page-1;
    max=max-25;
    tableau();
}
