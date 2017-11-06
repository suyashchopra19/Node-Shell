var commands= require('./commands.js')


// Output a prompt
process.stdout.write('prompt > ');

// The stdin 'data' event fires after a user types in a line
process.stdin.on('data', function (data) {
  
  var cmd = data.toString().trim(); // remove the newline
  var cmd_split = cmd.split(' ');
  var cmd_remaining = cmd.split(' ').slice(1);
  // console.log(cmd_remaining)
  // console.log(cmd);
  // process.stdout.write('You typed: ' + cmd);
  // process.stdout.write('\nprompt > ');

  if(cmd_split[0]=== 'pwd'){
    commands.pwd();
  	// return process.stdout.write(process.cwd()+"\n");
  };
  if(cmd_split[0]==='date'){
    commands.date();
  	// return process.stdout.write(new Date().toString()+ "\n");
  };
  if(cmd_split[0]==='ls'){
    commands.ls();
    // return process.stdout.write(new Date().toString()+ "\n");
  };
  if(cmd_split[0]==='echo'){
    // console.log('I am here');
    commands.echo(cmd_split);
  };
  if(cmd_split[0]==='cat'){
    // console.log(cmd_remaining[0]);
    commands.cat(cmd_split[1]);
  }



  process.stdout.write('You typed: ' + cmd);
  
  // console.log(new Date().toString());
});

