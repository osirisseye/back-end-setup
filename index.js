const express = require('express');
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;

const app = express();
// Here we are telling Passport to be aware about new GStrategy - a way for our users to authenticate.
passport.use(new GoogleStrategy());

const PORT = process.env.PORT || 5000;
app.listen(PORT);