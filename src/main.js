let Employee = require("./day12/employee");
let Person = require("./day12/person");
let UserDao = require("./day12/user/user.dao");
let DemoOverloading = require("./day13/demo.overloading");
let DemoCallback = require("./day13/demo.callback");

class Hello {
    static main(){
        try{
            console.log("Hello World");

            let a=10;
            let b=20;

            let list = ["MUKESH", 1000000000];

            let ref = new DemoOverloading();
            ref.helloOverloading();
            ref.helloOverloading(a);
            ref.helloOverloading(a, "Helo");
            ref.helloOverloading(list);

            ref.myoperation(1);

            // CALLBACK DEMO
            let ref1 = new DemoCallback();
            ref1.makeNetworkCall(function(data){
                console.log(data);
            });

            // jQuery get Simulations
            let $ = new DemoCallback();
            $.get(function(xyz){
                console.log(xyz);
            });

        }catch(err){
            console.log(err);
        }
    }

    sayHi(){
        console.log("Hello...i m not static!!!");
    }
}

Hello.main();

