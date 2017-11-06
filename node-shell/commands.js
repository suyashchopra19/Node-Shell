var fs = require('fs');

module.exports = {
	pwd : function(){
		process.stdout.write(process.cwd()+"\n");

	},
	date: function(){
		process.stdout.write(new Date().toString()+ "\n");
	},

	ls: function(){
		fs.readdir('.', function(err, files) {//'.'=path ... look at everything
  		if (err) throw err;
  		files.forEach(function(file) {
    	process.stdout.write(file.toString() + "\n");
  		})
  		process.stdout.write("prompt > ");
		});
	},

	echo: function(echoInput){
		process.stdout.write(echoInput.slice(1).join(' ')+"\n");
	},

	cat: function(file){
		fs.readFile(file,'utf-8', function(err, data){
  		if (err) throw err;
  		process.stdout.write(data);
		});
	}

}