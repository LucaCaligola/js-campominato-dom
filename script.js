// Consegna
// L'utente clicca su un bottone che genererà una griglia di gioco quadrata.
// Ogni cella ha un numero progressivo, da 1 a 100.
// Ci saranno quindi 10 caselle per ognuna delle 10 righe.
// Quando l'utente clicca su ogni cella, la cella cliccata si colora di azzurro ed 
// emetto un messaggio in console con il numero della cella cliccata.


// prendiamo dove inserire i quadrati
const mainContainer = document.getElementById("#content")
const button = document.getElementById("play")

// creaiamo una funzione per creare i quadrati

function getSquare() {
    const newSquareElement = document.createElement('div')
    
    newSquareElement.classList.add('square');
    return newSquareElement;
}




// creiamo un ciclo per inserire i quadrati e i numeri
button.addEventListener("click", function(){

    content.innerHTML = '';

    
    
    for (let i = 1; i <= 100; i++) {

        let quadrati = getSquare();
        quadrati.innerHTML = `<span> ${i} </span>`;
        
        content.appendChild(quadrati)

        quadrati.addEventListener('click', function(){

            quadrati.classList.toggle('clicked');
            console.log(i)
        });
    }
    




})

   

let generatedNumber = [];

function getRandomNumber(min,max) {
    
    return Math.floor(Math.random() * 100) + 1;
    
}





while (generatedNumber.length < 16){

    let randomNumber = getRandomNumber(1,100);

    if (!generatedNumber.includes(randomNumber)){
        
        generatedNumber.push(randomNumber)}
    
}


// controllare se randomnumber è nell'array generatednumber

console.log(generatedNumber)


