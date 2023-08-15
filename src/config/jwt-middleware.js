import jwt from 'passport-jwt';
import User from '../models/user.js';

const JwtStrategy = jwt.Strategy;
const ExtractJwt = jwt.ExtractJwt;

var opts = {}
opts.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
opts.secretOrKey = 'twitter_secret';

export const passportAuth = (passport) => {
    passport.use(new JwtStrategy(opts, async (jwt_payload, done) => {
        const user = await User.findById(jwt_payload.id);
        if(!user){
            done(null, false);
        }
        else{
            done(null, user);
        }
    }))
}