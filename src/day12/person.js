module.exports = class Person {

    constructor(name, email, mobile){
        this.name = name;
        this.email = email;
        this.mobile = mobile;
    }

    getName() {
        return this.name;
    }

    getEmail(){
        return this.email;
    }
}