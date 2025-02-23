var bcrypt = require('bcryptjs'); // hash password import
var salt = bcrypt.genSaltSync(10); // mixing salt to the password 10 to the power password like 2^10
let UserCollection = require("../models/Usermodel")

const createUser = async (req,res)=>{
const {name,email,password} = req.body; // destructuring of objects or data 
// res.send("create user api is running good")

try{
    let hashesPassword = bcrypt.hashSync(password, salt);
    let data = await UserCollection.create({
        name:name,
        email,
        password:hashesPassword
    })
    
    res.json({msg:"user registered successfully", success:true})
    } catch (error){
        res.json({msg:"error in creating user", success:false,error:error.message})
    }
}



const loginUser = async (req, res) => {
    let { email, password } = req.body;

    try {
        let findUser = await UserCollection.findOne({ email });

        if (!findUser) {
            return res.json({ msg: "User not found", success: false });
        }

        let comparePassword = bcrypt.compareSync(password, findUser.password);

        if (comparePassword) {
            // Convert document to an object and remove password
            let userObject = findUser.toObject();
            delete userObject.password; 

            return res.json({ msg: "User logged in successfully", success: true, user: userObject });
        } else {
            return res.json({ msg: "Invalid password", success: false });
        }

    } catch (error) {
        res.json({ msg: "Error in logging user", success: false, error: error.message });
    }
};


const updateUser = async (req,res)=>{
// res.send("update user api is running good")
const {name,password} = req.body


try{
    let userId = req.params._id;


if(password){
    var hashesPassword = bcrypt.hashSync(password,salt) //covert password into hash after updation
}

let user = await UserCollection.findByIdAndUpdate(userId,{$set:{name,password:hashesPassword}})
res.json({msg:"user updated successfully",success:false})
}
   catch (error){
    res.json({msg:"error in updating user",success:false,error:error.message})
   } 
}





const deleteUser = async (req,res)=>{
// res.send("delete user api is running good")

let userId = req.params._id;
let user = await UserCollection.findByIdAndDelete(userId)
res.json({msg:"user deleted successfully"})
    
}

module.exports = {
    createUser,
    loginUser,
    updateUser,
    deleteUser
}
