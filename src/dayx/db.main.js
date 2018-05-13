let mysql = require("mysql");

class DBSample{

    static main(){
        let config = {
            "host": "localhost",
            "user": "root",
            "password": "",
            "database": "test"
        };

        let connection = mysql.createConnection(config);

        // STEP 3
        connection.connect();

        // SETP 4
        var sql = "SELECT * FROM sample";
        var param = [1, "CDAC"];
        connection.query(sql, function(err, results) {
            console.log(results);

            // STEP LAST
            connection.end();
        });
    }
}

DBSample.main();