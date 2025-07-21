
let clickbutton= document.querySelector('button');

clickbutton.addEventListener('click',
    ()=>{
   let confirmation = confirm("vous voulez confirme cette information?");
    if(confirmation){
       alert("action confirmee") ;
    }else{
       alert("action annuler");
    }
    })
