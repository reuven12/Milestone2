const jokes1 = require('one-liner-joke');
const fs=require('fs');
const { Console } = require('console');
require('dotenv').config();


const AmountJoke=process.env.JOKE_AMOUNT || 50;
const SubjectJoke=process.env.JOKE_SUBJECT;
console.log(AmountJoke);


function jokes() {
    for(let i = 0; i < AmountJoke; i++){
        let getWithTag = jokes1.getRandomJokeWithTag(SubjectJoke);
        let conversion=JSON.stringify(getWithTag);
   fs.readFile('jokes.txt', 'utf8',function (err,date) {
      if (date.includes(conversion)) throw err; 
    fs.appendFile('jokes.txt', ` This is my text: ${conversion}\n`,function(err){
        if(err) throw err;
    })
      })
    }
  }

  if(AmountJoke < 50){
    console.log('block not fun')
} else {
    jokes();  
}