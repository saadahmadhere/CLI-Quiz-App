var readlineSync = require('readline-sync');
const chalk = require('chalk');

var name = readlineSync.question("What is your name? ");

console.log("\n\nWelcome "+name+ " to " +chalk.bgYellow("The science quiz"));

console.log(chalk.bgRed("\n\nRules for the quiz: ")+" \n\n 0. The quiz consits of 2 levels, having 5 questions each. \n 1. To answer any question, just type the option number (a,b,c) and press enter. \n 2. For every right answer, you will be awarded +1 point and 0.5 point will be deducted for every wrong answer. \n 3. To reach Level 2, you must answer more than 3 questions correctly in Level 1.");

if (readlineSync.keyInYN("\n\nAre you ready for the quiz? \n")) {

console.log(chalk.yellowBright("\n ***LEVEL 1***"));

var score = 0;
var color;

function final(){
   console.log(chalk.bgYellow("\n Quiz over! your score is "+score));
};


function abc(array){

function quiz(question,answer){

var userAnswer = readlineSync.question(question);

 if(userAnswer.toLowerCase() === answer){
    score = score + 1;
    color=chalk.green;
  }else{
    score = score - 0.5;
     color = chalk.red;
  };

};


for(var i=0; i<array.length; i++){
  quiz(array[i].question,array[i].answer);
  console.log(color("The correct answer is: " +array[i].answer ));
  var exit = readlineSync.keyIn("Press e to exit the quiz or press any other key to continue \n", {limit:'$<a-z>'})
  
  if(exit === "e"){
    break;
  }else{
    continue;
  }
}

};

var level1 = [
  {question: "\nQ1. Who discoverd that the world is round? \n a. Nicolaus Copernicus \n b. Eratosthenes \n c. Johannes Kepler \n",
  answer:"b"},

  {question:"\nQ2. Light-year is the unit of ______.\n a. Distance \n b. Intensity of Light \n c. Angle \n",
  answer:"a"
  },

  {question:"\nQ3. What was the name of first manned mission to the Moon? \n a. Crew Dragon \n b. Maven \n c. Apollo 8 \n",
  answer:"c"
  },

{question: "\nQ4. Who discovered particle nature of light? \n a. Albert Einstein \n b. Issac Newton \n c. Christiaan Huygens \n",
answer:"b"},

{question:"\nQ5. Who proposed that the sun was stationary in the center of the universe and the earth revolves around it? \n a. Nicolaus Copernicus \n b. Johannes Kepler \n c. Galileo Galilei \n",
answer:"a"},
];

abc(level1);

if(score>=3.5){

  console.log(chalk.bgGreenBright("\n Your score is "+ score)+ chalk.green("\n\n Congratulations! You have reached level 2.") + chalk.yellowBright("\n\n***LEVEL 2***"));

 
 var level2 =[

   {
     question:"\nQ1. Who discovered penicillin? \n a. Louis Pasteur \n b. Amalia Fleming \n c. Alexander Fleming \n",
   answer: "c"},
   {
     question:"\nQ2. Who discovered telephone? \n a. Alexander Graham Bell \n b. Marconi \n c. George Eastman \n",
     answer:"a"
   },
   {
     question: "\nQ3. Who proposed the Big Bang theory? \n a. Max Planck \n b. Georges Lemaître \n c. Albert Einstein \n",
     answer: "b"
   },
   {question: "\n Q4. Tesla is the unit of _______ . \n a. Current \n b. Magnetic flux \n c. Magnetic flux density  \n",
   answer:"c"},
   {question: "\n Q5. Mirage is related to _______. \n a. Mirrors \n b. Deserts \n c. Lens \n",
   answer:"b"},

 ];

abc(level2);

final();

}
else{
final();
};

}

else{
  console.log("\nThank you "+name+" for showing up.🙏")
};