import UserService  from "../services/user-service.js";

const userService = new UserService();

export const signup = async (req,res) => {
    try {
        const result = await userService.signup({
            email : req.body.email,
            password : req.body.password,
            name : req.body.name
        });
        return res.status(201).json({
            message : 'sucessfully created a new user',
            data : result,
            sucess : true,
            err : {}
        })
    } catch (error) {
        return res.status(500).json({
            message : 'something went wrong',
            data : {},
            sucess : false,
            err : error
        })
    }
}