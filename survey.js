const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let answers = []

rl.question('What is your name or nickname? ', (name) => {
  rl.question('What is your favourite food? ', (food) => {
    console.log(name + " " + food);
    rl.close();
  });
});


