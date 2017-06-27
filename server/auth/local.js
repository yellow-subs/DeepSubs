const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;

const init = require('./passport');
const CONFIG = require('../../config/development');
const knex = require('knex')(CONFIG.knex_config);
const authHelpers = require('./helpers');

const options = {
  usernameField: 'email',
  passwordField: 'password',
  passReqToCallback: true,
  session: false,
};

init();

passport.use(new LocalStrategy(options, (username, password, done) => {
  // check to see if the username exists
  knex('users').where({ username }).first()
  .then((user) => {
    if (!user) return done(null, false);
    if (!authHelpers.comparePass(password, user.password)) {
      return done(null, false);
    } else {
      return done(null, user);
    }
  })
  .catch(err => done(err));
}));

module.exports = passport;
