class UserDao {

    static getInstance(){
        if(this.userDao == undefined){
            this.userDao = new UserDao();
        }

        return this.userDao;
    }

    createUser() {
        console.log("Create User");
    }

    insertUser() {
        console.log("Insert USER LOGIC");
    }

    selectAllUser() {
        console.log("Select All USER");
    }
}

module.exports = UserDao;