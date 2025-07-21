
let clickbutton= document.querySelector('button');

clickbutton.addEventListener('click',
    ()=>{
     let motpasse =prompt("entre un mot passe");
let motdepasse = "124590";
     if(motpasse === motdepasse ){

        alert("acces authoriser")
     }else{
        alert("access refuse");
     }
    })
