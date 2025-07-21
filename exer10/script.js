


let clickbutton= document.querySelector('button');
clickbutton =addEventListener('click',
    ()=>{

      let mois=prompt("entre un mois");
        
       
       let season=""
      if(mois === "janvier" || mois === "decembre" || mois ==="fevrier" || mois ==="mars".toUpperCase){
       alert ("dry saison");
        document.write("le numero du mois est " +mois);
      }if(mois === "avril" || mois === "mai" || mois === "juin" || mois === "juillet" 
        || mois === "aout" || mois === "septembre" || mois === "octobre" || mois === "novembre")
        {
         alert ("raining saison");
        document.write("le numero du mois est " +mois);
        }
    }

)
