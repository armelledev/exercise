
  let clickbutton= document.querySelector('button');

clickbutton.addEventListener('click',
    ()=>{
    let temp = prompt("Entrez une température :");
    temp = parseFloat(temp); // Convertir en nombre décimal

    if (!isNaN(temp)) {
      if (temp > 30) {
        alert("Chaud");
      } else {
        alert("Froid");
      }

      
      document.write("<h3>Température saisie : " + temp + "°C</h3>");
    } else {
      alert("Valeur invalide !");
    }
  }
)
