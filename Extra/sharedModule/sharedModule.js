class User{
    constructor(usrn, pwd){
        this.usrn = usrn;
        this.pwd = pwd;
    }

    info(){
        console.log(`${this.usrn}: ${this.pwd}`);
        return `${this.usrn}: ${this.pwd}`;
    }

    login(pwd){
        (this.pwd == pwd)? 
            console.log("Login successful") :
            console.log("Incorrect password");
    }
}

if( typeof module != 'undefined'){
    module.exports = User;
}

