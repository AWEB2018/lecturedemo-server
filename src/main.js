let Employee = require("./day12/employee");
let Person = require("./day12/person");
let UserDao = require("./day12/user/user.dao");

class Hello {
    static main(){
        try{
            console.log("Hello World");

            let emp1 = new Employee("CDAC", 1);        
            let name = emp1.getName();
            console.log(name);

            let p1 = new Person("Mukesh");
            let pname = p1.getName();
            console.log(pname);

            let userDao = UserDao.getInstance();
            userDao.createUser();
        }catch(err){
            console.log(err);
        }
    }

    sayHi(){
        console.log("Hello...i m not static!!!");
    }
}

Hello.main();

