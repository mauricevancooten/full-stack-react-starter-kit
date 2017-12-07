const passport = require('passport')

const authRoutes = (app) => {
  app.get('/auth/google', passport.authenticate('google', {
    scope: ['profile', 'email']
  }))

  app.get('/auth/google/callback', passport.authenticate('google', {successRedirect:'/'}))

  app.get('/api/logout', (req, res) => {
    req.logout()
    res.send(req.user)
  })

  app.get('/api/current_user', (req, res) => {
    res.send(req.user)
  })

  app.get('/dashboard', (req, res, next) => {
    if (req.isAuthenticated()) { next()} else { res.redirect('/')}
  })
}

export default authRoutes
