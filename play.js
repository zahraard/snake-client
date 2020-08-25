const connect = require('./client');

console.log('Connecting ...');
connect();

const setupInput = function() {
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  let handleUserInput = function(){
    stdin.on('data', input => {
      if (input === '\u0003') {
        process.exit();
      }
    });
  }
  handleUserInput()
  return stdin;
}

setupInput()