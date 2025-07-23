


let clickbutton =document.querySelector('button');

clickbutton=addEventListener('click',

    ()=>{

     let montant =prompt("entre un montant en euro") ;
     let taux =1.10;

     montant = parseFloat(montant)
     taux = parseFloat(taux)

     resultat = montant*taux

     alert("le montant en dollar est :" +resultat.toFixed(2)+ "$");

     document.write("1euro = 1.10 dollar");


    }

)