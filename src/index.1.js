let DemoCallback2 = require("./day13/demo.callback2");

class MainProgram {

    static main(){
        try{
            let ref = new DemoCallback2();
            ref.readFiveFiles();
        }catch(error){
            console.log(error);
        }
    }
    
}


MainProgram.main();