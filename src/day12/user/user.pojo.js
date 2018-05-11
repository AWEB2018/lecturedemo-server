class User {

    constructor(name, id, email, mobile){
        this.name;
        this.id;
        this.email = email;
        this.mobile = mobile;
    }

    setName(name){
        this.name = name;
    }

    getName() {
        return this.name;
    }
}

module.exports = User;