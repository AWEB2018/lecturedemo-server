let fs = require("fs");

class DemoPromise{

    readFiveFile(){
        let parentThis = this;

        let promise = parentThis.readFileUsingPromise("src/main.js");
        promise.then(function(data){

            console.log(this);
            console.log(data);
            return parentThis.readFileUsingPromise("src/main.js");
        }).then(function(data){

            console.log(data);
            return parentThis.readFileUsingPromise("src/main.js");
        }).then(function(){

            console.log(data);
        }).catch(function(err){

            console.log(err);
        });
    }


    readFileUsingPromise(fileName){
        
        return new Promise((resolve, reject)=>{
            fs.readFile(fileName, {"encoding":"utf8"}, function(err, data){

                resolve(data);
            });
        });
        
    }
}

module.exports = DemoPromise;