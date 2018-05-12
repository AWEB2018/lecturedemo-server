class DemoOverloading {

    helloOverloading(){
        console.log(arguments);
        if(arguments.length == 0){
            arguments[0] = 100;
        }
        arguments[0] = 100;
        console.log("Hello World");
    }

    myoperation(p1, p2) {
        
        return p1 + p2;
    }
}

module.exports = DemoOverloading;