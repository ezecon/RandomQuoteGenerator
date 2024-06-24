const fs = require('fs');
const quote ={}

quote.Quote = function Quote(){
    const temp = fs.readFileSync(`${__dirname}/quote.txt`,'utf-8');
    const flag= temp.split(/\r?\n/);
    return flag;
}

module.exports = quote;