import mongoose from "mongoose";
import bcrypt from "bcrypt";
const saltRounds = 8;

const userSchema = new mongoose.Schema({
    email : {
        type : String,
        required : true,
        unique : true
    },
    password : {
        type : String,
        required : true
    },
    name : {
        type : String,
        required : true
    }
}, {timestamps : true});


userSchema.pre('save' , function(next){
    const salt = bcrypt.genSaltSync(saltRounds);
    const hashedPassword = bcrypt.hashSync(this.password, salt);
    this.password = hashedPassword;
    next();
})

const User = mongoose.model('User' , userSchema);

export default User;