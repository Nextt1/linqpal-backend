const Database = require("./../database");
const Helper = require("./../helper");

exports.home = async(req, res) => {
    
    Database.User.find((err, users) => {
        if (err) res.send({data: {}, message: "Error occured", status: "error"});

        users.map(eachUser => {
            eachUser.ssn = Helper.decryptSsn(eachUser.ssn);
        });

        res.send({data: users, message: "Records fetched", status: "success"});
    });
}