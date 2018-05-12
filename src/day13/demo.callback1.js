class DemoCallback1{

    sayHi(name){
        return "Helloo!! " + name;
    }


    callNetwork(){

        setTimeout(function(){
            console.log("Afte N-Seconds");
            return "Hello Netowrk";
        }, 20000)

        return "Network!!"
    }



    callNetworkUsingCallback(cb){

        setTimeout(function(){
            try{
                console.log("Afte N-Seconds");
            
                let output = "Hello Netwrok!!!!"
                let output1 = 1000;
                
                cb(output, output1);
            }catch(err){
                console.log(err);
            }
        }, 10000)
    }


    callNetworkUsingCallbackHandleError(cb){

        setTimeout(function(){
            try{
                console.log("Afte N-Seconds");
            
                let output = "Hello Netwrok!!!!"
                let output1 = 1000;
                cb(output, output1);
            }catch(err){
                console.log(err);
            }
        }, 10000)
    }
}

module.exports = DemoCallback1;