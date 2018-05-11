class Hello {
    static dada(){
        try{
            console.log("Hello World");

            let ref = new Hello();
            ref.sayHi();
        }catch(err){
            console.log(err);
        }
    }

    sayHi(){
        console.log("Hello...i m not static!!!");
    }
}

Hello.dada();

