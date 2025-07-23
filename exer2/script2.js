



let clickbutton =document.querySelector('button')
clickbutton=addEventListener('click',
    ()=>{

  let noms = ["Alice", "Bob", "Charlie", "David", "Eva"];

   document.write(noms);
 let nomSaisi = prompt("Entrez un nom :");

    if (noms.includes(nomSaisi)) {
      alert("Nom trouvé");
    } else {
      alert("Nom non trouvé");
    }
  
 })
   


