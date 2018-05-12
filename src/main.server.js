let express = require("express");

class Main{
    static main(){

        //let app = new express();
        let app = express();
        app.listen(4000);
    };
}
Main.main();