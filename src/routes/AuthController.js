const Helper = require("./../helper");

exports.login = async(req, res) => {

    const {email, password} = req.body;

    if(email === "admin@linqpal.com" && password.length >= 6){
        res.send({
            data: { 
                token: Helper.generateSessionToken(email)
            }, 
            message: "Welcome back!",
            status: "success"
        });
    }
    
    res.send({data: {}, message: "Not a valid credentials", status: "error"});
}