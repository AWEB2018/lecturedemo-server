let mysql = require('mysql');

let config={
    "host":"localhost",
    "user":"root",
    "password":"",
    "database":"DAC2018"
}

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


    static readAllEmployee() {
        try{
            let config = {
                "host" : "localhost",
                "user" : "root",
                "password" : "",
                "database" : "DAC2018"
            }

            let connection = mysql.createConnection(config);
            connection.connect(function(err){
                if(err){
                    console.log(err);
                }

                else {
                    console.log("CONNECTION DONE!!");
                }
            });

            let sql = "SELECT * FROM EMPLOYEE";
            connection.query(sql, function(err, results){
                if(err){
                    console.log(err);
                } else {
                    console.log(results);
                }
            });
            

            // CLOSING THE CONNECTION
            connection.end();
        }catch(err){
            console.log(err);
        }
    }


    static insertEmployee(){
        try{
            let config ={
                "host":"localhost",
                "user":"root",
                "password":"",
                "database":"DAC2018"
            }
            let connection =mysql.createConnection(config);

            connection.connect(function(err){
                if(err){
                    console.log(err);
                }
                else{
                    console.log("connection created");
                }
            });

            let sql="INSERT INTO EMPLOYEE (NAME,SALARY,DEPT) VALUES('Deadpool',1000000,'CEO')"

            connection.query(sql, (error,data)=>{
                if(error){
                    console.log(error);
                }else{
                    console.log(data);
                }

            });

            connection.end();

        }catch(err){
            console.log(err);
        }
    }


    static updateEmployee(){
        try{
            let connection=mysql.createConnection(config);

            connection.connect();

            let sql="UPDATE EMPLOYEE SET NAME='SANTOSH' WHERE ID=1";
            connection.query(sql);

            connection.end();
        }catch(err){
            console.log(err);
        }
    }


    static updateEmployeeVer1(name, id){
        try{
            let connection=mysql.createConnection(config);

            connection.connect();

            let sql="UPDATE EMPLOYEE SET NAME='" + name + "' WHERE ID=" + id;
            connection.query(sql);

            connection.end();
        }catch(err){
            console.log(err);
        }
    }


    static updateEmployeeVer2(name, id){
        try{
            let connection=mysql.createConnection(config);

            connection.connect();

            let sql="UPDATE EMPLOYEE SET NAME=? WHERE ID=?";
            connection.query(sql, [name, id]);

            connection.end();
        }catch(err){
            console.log(err);
        }
    }

    static updateEmployeeVer3(emp){
        try{
            let connection=mysql.createConnection(config);

            connection.connect();

            let sql="UPDATE EMPLOYEE SET NAME=?, DEPT=? WHERE ID=?";
            connection.query(sql, [emp.name, emp.dept, emp.id]);

            connection.end();
        }catch(err){
            console.log(err);
        }
    }
    static insertEmployeeVer1(emp){
        try{
            let connection=mysql.createConnection(config);

            connection.connect();

            let sql="INSERT INTO EMPLOYEE(NAME,SALARY,DEPT) VALUES(?,?,?)";

            connection.query(sql,[emp.name,emp.salary,emp.dept]);

            connection.end();
        }
        catch(err){
            console.log(err);
        }
        
    }

}

let emp = {
    "name" : "KHYATI",
    "id" : 1,
    "dept" : "CS",
    "salary" : 100000
}
DBConnectionCheck.insertEmployeeVer1(emp);