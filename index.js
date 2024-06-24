const mathLib = require('./lib/math');
const quoteLib = require('./lib/quote.js');


const app = {};

app.config ={
    timeBetween : 2000,
}

app.printAQuote = function getRandomNumber(){

    const Quote = quoteLib.Quote();
    const length= Quote.length;
    const randomNumber = mathLib.randomNumber(0,length);
    const selectedQuote = Quote[randomNumber-1];

    console.log(selectedQuote);
}

app.infinteLoop = function infinteLoop(){
    setInterval(app.printAQuote, app.config.timeBetween);
}

app.infinteLoop();