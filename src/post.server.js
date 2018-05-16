let express = require('express');
let cors = require('cors');
var bodyParser = require('body-parser');


let PostModule = require("./postmodule/post.module");

class PostServer {
    static main(){

        let app = express();
        
        // CROSS ORIGIN HANDLE
        app.use(cors());

        // WORKING WITH POST
        app.use(bodyParser.json()); // for parsing application/json
        app.use(bodyParser.urlencoded({ extended: true })); 


        app.get("/readallpost", (req, res)=>{

            PostModule.readAllPost(function(data){
                res.json(data);
            });
        });


        app.post("/insertpost", (req, res)=>{

            let post = req.body;
            PostModule.insertPost(post);

            res.json({"msg": "Post saved successfully!!!"});
        });



        app.listen(4000, ()=>{
            console.log("SERVER STARTED!!!");
        });

    }
}

PostServer.main();