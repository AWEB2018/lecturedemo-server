let DemoCallabck1 = require("./day13/demo.callback1");

class MainProgram {

    static main(){
        try{
            console.log("Lets learn callback...!!!");

            let ref = new DemoCallabck1();
            let res = ref.sayHi();
            console.log(res);
            
        }catch(error){
            console.log(error);
        }
    }
    
}


MainProgram.main();