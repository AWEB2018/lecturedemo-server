let DemoPromise = require("./day13/demo.promise");

class Hello {
    static main(){
        try{
            
            let ref = new DemoPromise();
            ref.readFiveFile();

        }catch(err){
            console.log(err);
        }
    }
}

Hello.main();

