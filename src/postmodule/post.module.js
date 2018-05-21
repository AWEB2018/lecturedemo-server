let mysql = require('mysql');

let config = {
    "host" : "localhost",
    "user" : "root",
    "password" : "",
    "database" : "DAC2018"
};

class PostModule {

    static readAllPost(cb){
        try{
            let connection = mysql.createConnection(config);

            connection.connect();

            let sql = "SELECT * FROM POST ORDER BY ID DESC";
            connection.query(sql, (err, data)=> {
                console.log(data);

                cb(data);
            });

            connection.end();
        }catch(err){
            console.log(err);
        }
    }


    static insertPost(post) {
        try{
            let connection = mysql.createConnection(config);

            connection.connect();

            let sql = "INSERT INTO POST (POST, LIKE_COUNT, DISLIKE_COUNT) VALUES (?, ?, ?)";
            connection.query(sql, [post.POST, post.LIKE_COUNT, post.DISLIKE_COUNT]);

            connection.end();

        }catch(err){
            console.log(err);
        }
    }

}


module.exports = PostModule;
