import passport from 'passport'
import GoogleStrategy from 'passport-google-oauth20'
import {MongoClient, ObjectId} from 'mongodb'
import keys from '../../config/keys'

let db

MongoClient.connect('mongodb://localhost/oauth').then(connection => {
  db = connection
}).catch(error => {
  console.log('Error:', error)
})

passport.serializeUser((user, done) => {
  done(null, user._id)
})

passport.deserializeUser((id, done) => {
  id = new ObjectId(id)
  db.collection('users').findOne({_id: id}).then(user => {
    done(null, user)
  }).catch(error => {
    console.log(error)
  })
})

passport.use(new GoogleStrategy({
  clientID: keys.googleClientID,
  clientSecret: keys.googleClientSecret,
  callbackURL: '/auth/google/callback'
}, (accessToken, refreshToken, profile, done) => {
  db.collection('users').findOne({googleId: profile.id}).then((existingUser) => {
    if (existingUser) {
      done(null, existingUser)
    } else {
      db.collection('users').insert({googleId: profile.id}).then(user => {
        done(null, user)
      })
    }
  }).catch(error => {
    console.log(error)
  })
}))
