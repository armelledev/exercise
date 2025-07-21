

let clickbutton= document.querySelector('button');

clickbutton.addEventListener('click',
    ()=>{
   let nombre1= prompt("entrez un nombre");
   let nombre2= prompt("entrez un second nombre");
   nombre1 =parseInt(nombre1);
   nombre2 =parseInt(nombre2);
   somm = nombre1 + nombre2;
   alert("le resultat est : " +somm)
  if(somm>100){

document.write("la somme est tres eleve");
  }else{
    document.write("somme normal");
  }

   } )
