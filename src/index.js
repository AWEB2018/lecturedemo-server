let DemoCallabck1 = require("./day13/demo.callback1");

class MainProgram {

    static main(){
        try{
            console.log("Lets learn callback...!!!");

            let ref = new DemoCallabck1();

            //let res1 = ref.callNetwork();
            //console.log(res1);

            ref.callNetworkUsingCallback();

            ref.callNetworkUsingCallback(function(p1, p2){
                console.log("I will be called; ");
            });

        }catch(error){
            console.log(error);
        }
    }
    
}


MainProgram.main();