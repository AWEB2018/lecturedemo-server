let fs = require('fs');

class DemoFileIO{

    demoReadFileSync(){
        try{
            return fs.readFileSync("src/main.js", {"encoding":"utf8"});
        }catch(err){
            console.log(err);
        }
    }


    demoReadFileASync(cb){
        try{
            return fs.readFile("src/main.js", {"encoding":"utf8"}, cb);
        }catch(err){
            console.log(err);
        }
    }

}

module.exports = DemoFileIO;