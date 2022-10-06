//Creo un elemento del tipo a ANCHOR con la variable Anchor
let div = document.getElementById('scripti')
let anchor = document.createElement('a');
anchor.href = 'https://google.com'
anchor.innerText = "Mi hipervinculo"
anchor.title = 'Te lleva a google'
//document.body.append(anchor);
div.innerHTML = anchor.outerHTML
