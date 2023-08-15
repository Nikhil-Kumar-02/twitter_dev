import {UserRepository} from '../repository/index.js';

class UserService{
    constructor(){
        this.userRepository = new UserRepository();
    }

    async signup(payload){
        try {
            const newUser = await this.userRepository.create(payload);
            return newUser;
        } catch (error) {
            throw error;
        }
    }

    async getUserByEmail(email){
        try {
            const user = await this.userRepository.findby({email : email});
            return user;
        } catch (error) {
            throw error;
        }
    }
}

export default UserService; 