

let clickbutton=document.querySelector('button')

clickbutton=addEventListener('click',
    ()=>{

  let panier = [];

    let article = prompt("Entrez le nom de l'article à ajouter :");

    if (article) {
      panier.push(article); // Ajoute l'article dans le tableau
      alert("Article ajouté");

      // Affiche le panier dans la page
      document.write("<h3>Panier actuel :</h3>");
      document.write("<ul>");
      for (let i = 0; i < panier.length; i++) {
        document.write("<li>" + panier[i] + "</li>");
      }
      document.write("</ul>");
    } else {
      alert("Aucun article saisi !");
    }
     }
    
)
