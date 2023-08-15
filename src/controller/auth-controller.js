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

export const login = async (req,res) => {
    try {
        const user = await userService.getUserByEmail(req.body.email);
        if(!user){
            return res.status(401).json({
                message : 'user not found',
                sucess : false
            });
        }
        if(!user.comparePassword(req.body.password)){
            return res.status(401).json({
                message : 'incorrect password',
                sucess : false
            });
        }

        const token = user.genJWT();

        return res.status(200).json({
            message : 'sucessfully logged in',
            sucess : true,
            data : token,
            error : {}
        });

    } catch (error) {
        return res.status(500).json({
            message : 'something went wrong',
            data : {},
            sucess : false,
            err : error
        })
    }
}