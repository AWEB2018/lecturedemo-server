let fs = require(fs);

class DemoPromise{

    readFiveFile(){
        let promise = this.readFileUsingPromise("src/main.js");
        promise.then(function(data){

            console.log(data);
            return this.readFileUsingPromise("src/main.js");
        }).then(function(data){

            console.log(data);
            return this.readFileUsingPromise("src/main.js");
        }).then(function(){
            
            console.log(data);
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