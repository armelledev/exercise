let clickbutton= document.querySelector('button');

clickbutton.addEventListener('click',
    ()=>{


        let articles =[];
            
        let nouvellearticle =prompt("entre une nouvelle article");
        if(nouvellearticle){
            articles.push(nouvellearticle);
        }
        for(let i = 0; i<articles.length; i++ ){
         document.write("les articles sont " +articles[i])   
        }
    })