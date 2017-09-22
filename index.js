const express = require('express');
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
const keys = require('./config/keys');

const app = express();
// Here we are telling Passport to be aware about new GStrategy - a way for our users to authenticate.
passport.use(
    new GoogleStrategy(
    {
        clientID: keys.googleClientID,
        clientSecret: keys.googleClientSecret,
        callbackURL: '/auth/google/callback'
    }, 
    accessToken => {

    })
);

app.get(
    '/auth/google', 
    passport.authenticate('google', {
    scope: ['profile', 'email']
}));

const PORT = process.env.PORT || 5000;
app.listen(PORT);