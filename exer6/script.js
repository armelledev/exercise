


let clickbutton= document.querySelector('button');

clickbutton.addEventListener('click',
    ()=>{
    let nombre=parseInt(prompt("entre un nombre"))

    if(nombre % 2 === 0){
        alert("le nombre est pair");
    }else{
        alert("le nombre est impair");
    }
     document.write("le nombre est :" +nombre)
    })     