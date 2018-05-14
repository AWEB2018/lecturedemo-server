let mysql = require('mysql');

class DBConnectionCheck {

    static checkConnection(){
        try{
            // STEP-1 :: DECALRE ALL CONFIGUATION/AUTH
            let config = {
                "host" : "localhost",
                "port" : 3306,
                "user" : "root",
                "password": "",
                "database" : "DAC2018"
            };

            // STEP-2 
            let connection = mysql.createConnection(config);

            // STEP-3
            connection.connect(function(err){
                if(err){
                    console.log("DATABSE CONNECTION ERROR!!!");
                }

                else {
                    console.log("DATABASER CONNECTION SUCCESS!!");
                }
            });
            

            // SETP LAST
            connection.end();
        }catch(err){
            console.log(err);
        }
    }


    
}

DBConnectionCheck.checkConnection();