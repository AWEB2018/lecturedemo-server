let Employee = require("./day12/employee");
let Person = require("./day12/person");
let UserDao = require("./day12/user/user.dao");
let DemoOverloading = require("./day13/demo.overloading");

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
        }catch(err){
            console.log(err);
        }
    }

    sayHi(){
        console.log("Hello...i m not static!!!");
    }
}

Hello.main();

