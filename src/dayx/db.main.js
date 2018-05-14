let mysql = require("mysql");

let Promise = require("bluebird");
Promise.promisifyAll(require("mysql/lib/Connection").prototype);
Promise.promisifyAll(require("mysql/lib/Pool").prototype);

let config = {
    "host": "localhost",
    "user": "root",
    "password": "",
    "database": "test"
};

class DBSample{

    static main(){
        let connection = mysql.createConnection(config);

        // STEP 3
        connection.connect();

        // SETP 4
        var sql = "SELECT * FROM sample";
        var param = [1, "CDAC"];
        connection.query(sql, function(err, results) {
            console.log(results);
        });
        connection.end();
    }

    static main1(){
        let connection = mysql.createConnection(config);
        
        let promise = connection.connectAsync();
        promise.then((data)=>{

            let sql = "SELECT * FROM SAMPLE";
            return connection.queryAsync(sql);
        }).then((data)=>{

            console.log(data);
            return connection.endAsync();
        }).then((data)=>{

            console.log("Connection Closed!!");
        }).catch(function(err){
            console.log(err);
        });
    }
}

DBSample.main1();