let fs = require("fs");

class DemoCallabck2{

    readFiveFiles(){

        fs.readFile("src/main.js", {"encoding": "utf8"}, function(err, data){
            console.log(data);

            fs.readFile("src/index.js", {"encoding": "utf8"}, function(err, data){
                console.log(data);

                fs.readFile("src/index.1.js", {"encoding": "utf8"}, function(err, data){
                    console.log(data);

                    fs.readFile("src/main.js", {"encoding": "utf8"}, function(err, data){
                        console.log(data);
                    });            
                });            
            });            
    
        });            
    }

}

module.exports = DemoCallabck2;