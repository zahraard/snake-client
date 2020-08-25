let connection;
const setupInput = function(conn) {
  connection = conn;
  const stdin = process.stdin;
  stdin.setRawMode(true);
  stdin.setEncoding('utf8');
  stdin.resume();
  
  let handleUserInput = function(){
    stdin.on('data', input => {
      //console.log(input)
      if (input === '\u0003') {
        process.exit();
      }
      if(input === 'w'){
        connection.write("Move: up")
      }
      if(input === 'a'){
        connection.write("Move: left")
      }
      if(input === 'd'){
        connection.write("Move: right")
      }
      if(input === 's'){
        connection.write("Move: down")
      }
    });
  }
  handleUserInput()
  return stdin;
}

module.exports = { setupInput };