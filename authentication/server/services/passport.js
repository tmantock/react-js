const passport = require('passport');
const User = require('../models/user');
const config =  require('../config');
const JwtStrategy = require('passport-jwt').Strategy;
const ExtractJwt = require('passport-jwt').ExtractJwt;

const jwtOptions = {
  jwtFromRequest: ExtractJwt.fromHeader('authorization'),
  secretForKey: config.secret
};

//Create JWT Strategy
const jwtLogin = new JwtStrategy(jwtOPtions, function (payload, done) {
  User.findById(payload.sub, function (err, user) {
    if(err) { return done(err, false); }

    if(user) {
      done(null, user);
    } else {
      done(null, false);
    }
  })
});
//Tell passport to use this strategy
