const jokes1 = require('one-liner-joke');
const fs=require('fs');
const { Console } = require('console');
require('dotenv').config();


const amountJoke=process.env.JOKE_AMOUNT || 50;
const subjectJoke=process.env.JOKE_SUBJECT;

function jokes() {
    for(let i = 0; i < amountJoke; i++){
        let getWithTag = jokes1.getRandomJokeWithTag(subjectJoke);
        let conversion=JSON.stringify(getWithTag);
   fs.readFile('jokes.txt', 'utf8',function (err,date) {
      if(date.includes(conversion)) throw err; 
    fs.appendFile('jokes.txt', ` This is my text: ${conversion}\n`,function(err){
      if(err) throw err;
      })
    })
   }
 }

  
  if(amountJoke < 50){
    console.log('block not fun')
} else {
    jokes();  
}
