class DemoCallBack {

    makeNetworkCall(cb){
        console.log("START");
        setTimeout(function(){
            console.log("AFTER 5 SECONDS");

            let output = 10000000;
            cb(output);
        }, 15000);
        console.log("END");
    }

    get(cb){
        console.log("START");
        setTimeout(function(){
            console.log("AFTER 15 SECONDS");

            let output = "SOME RESPONSE";
            cb(output);
        }, 15000);
        console.log("END");
    }
}

module.exports = DemoCallBack;