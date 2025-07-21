let clickbutton= document.querySelector('button');

clickbutton.addEventListener('click',
    ()=>{

        let nombre1= prompt("entre un nombre");
        let nombre2= prompt("entre un second nombre");
        let nombre3= prompt("entre un triossemme nombre");
        nombre1= parseInt(nombre1);
        nombre2= parseInt(nombre2);
        nombre3= parseInt(nombre3);

        somme = nombre1 + nombre2 + nombre3;
        moy = somme/3
        if(moy>10){
            document.write("moyenne elevee qui est :"+moy);
        }else{
      document.write("moyenne faible qui est :" +moy);
        }
        
    })