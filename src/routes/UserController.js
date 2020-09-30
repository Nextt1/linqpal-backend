const Database = require("./../database");
const Helper = require("./../helper");

exports.create = async(req, res) => {
    
    res.send({data: {}, message: "", status: "success"});
}

exports.store = async(req, res) => {

    const {firstName, lastName, phoneNumber, address1, address2, city, state, zipCode, ssn} = req.body;

    if(firstName && lastName && phoneNumber && ssn && address1 && city && state && zipCode) {
        const user = new Database.User({
            firstName,
            lastName,
            phoneNumber,
            address1,
            address2,
            city,
            state,
            zipCode,
            ssn: Helper.encryptSsn(ssn)
        });

        user.save(function(err, u) {
            if(err) res.send({data: {}, message: "Error Occurred", status: "error"});

            res.send({data: {}, message: "User Information added successfully", status: "success"});
        });
    }
}