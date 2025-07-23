let clickbutton= document.querySelector('button');

clickbutton.addEventListener('click',
    ()=>{
 
    let nom = prompt("Entrez votre nom :");
    let email = prompt("Entrez votre email :");

    if (email.includes("@")) {
      alert("Formulaire valide");
    } else {
      alert("Formulaire invalide");
    }

    // Affichage des informations
    document.write("<h3>Informations utilisateur :</h3>");
    document.write("<p>Nom : " + nom + "</p>");
    document.write("<p>Email : " + email + "</p>");
  }
)
