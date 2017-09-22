# Back-end setup

### Upgrading my Back-end skills
Here I want to prepare useful back-end setups streamlining my work and giving me more confidence when working on code less visible to user. Additionally, I've learnt how to set up multiple remotes and aliases (you can find this work on [heroku](https://damp-gorge-32231.herokuapp.com/)).

### Adding Passport
A robust back-end for future applications definitely needs a strong authentication. This is to say - we going to need a passport.

### "...but Osirisseye, how can I do this in my own project?"
Well, here is a very simple plan I followed (for google oath2.0) thanks to Stephen Grider in his [MERN](https://www.udemy.com/user/sgslo/) course:
* Install Passport with: 
```
npm install --save passport passport-google-oauth20
```
* Make sure you import Passport in your index.js file:
```
const passport = require('passport');
const GoogleStrategy = require('passport-google-oauth20').Strategy;
```
... and make Passport aware of new google strat:
```
passport.use(new GoogleStrategy());
```
* <Before next step you should visit [developer's console](console.developers.google.com) and register your application but this part is beyond the scope of this small write up>
* Now, import keys to our index.js:
```
const keys = require('./config/keys');
```
... and pass our keys into the function we've just created 
```
passport.use(
    new GoogleStrategy({
        clientID: keys.googleClientID,
        clientSecret: keys.googleClientSecret
    })
);
```
* After our user gives us required permissions google will redirect him - we have to specify this by adding one configuration for our GoogleStrategy():
```
callbackURL: '/auth/google/callback'
```

Until this point we still don't have a route handler set to deal with our authenticated user but Passport is working if we are getting a special code from google appended to our callbackURL after ```?``` , see below (note: your code will be different):  
```
http://localhost:5000/auth/google/callback?code=4/Idx_a8mEzlUm83fkSle7btTZqxwzFyoK13PzkR8tIWg#
```