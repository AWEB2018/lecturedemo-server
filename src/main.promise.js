let DemoPromise = require("./day13/demo.promise");

class Hello {
    static main(){
        try{
            
            let ref = new DemoPromise();
            ref.helloPromise();
            
        }catch(err){
            console.log(err);
        }
    }
}

Hello.main();

