


let clickbutton=document.querySelector('button');
clickbutton= addEventListener('click',

    ()=>{
   
        let soldecompte ="20000";

     let montant =prompt("entre un montant");
     if(montant <= soldecompte){
        alert("retraite authoriser")
     }else{
        alert("solde insuffisant");
     }

    }
)
