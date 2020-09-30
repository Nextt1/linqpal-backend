const mongoose = require("mongoose");
mongoose.connect(process.env.DATABASE_URL, {useNewUrlParser: true});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
const Schema = mongoose.Schema;

const userSchema = new Schema({
    firstName: String,
    lastName: String,
    phoneNumber: Number,
    ssn: String,
    address1: String,
    address2: String,
    city: String,
    zipCode: Number,
    state: String,
    createdAt: {type: Date, default: Date.now}
});

let User = mongoose.model('User', userSchema);

exports.User = User;