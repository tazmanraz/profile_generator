const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


rl.question('What is your name or nickname? ', (name) => {
  rl.question('What is your superpower? ', (power) => {
    rl.question('Who is your favourite musician or band? ', (band) => {
      rl.question('What is your favourite pokemon? ', (pokemon) => {
        rl.question('What would be your catchphrase? ', (phrase) => {
          console.log(`Hi ${name}. Your super power is ${power}, and your catchphrase is "${phrase}". You seem to like music by ${band} and your favourite pokemon is ${pokemon}`);
          rl.close()
        });
      });
    });
  });
});


