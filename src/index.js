import express from 'express'
import compression from 'compression'
import React from 'react'
import ReactDOMServer from 'react-dom/server'
import {StaticRouter} from 'react-router'
import Router from './components/router'
import webpack from 'webpack'
import webpackConfig from '../webpack.config.client'
import Template from './components/template'
import {MongoClient} from 'mongodb'
import bodyParser from 'body-parser'
import crudRoutes from './routes/crud-routes'
import { createStore } from 'redux'
import { Provider } from 'react-redux'
import fetch from 'node-fetch'
import cookieSession from 'cookie-session'
import passport from 'passport'
import keys from '../config/keys'
import './services/passport'
import authRoutes from './routes/authRoutes'
import reducers from './reducers'

const compiler = webpack(webpackConfig)
const app = express()

app.use(bodyParser.json())

app.use(compression())

if (process.env.NODE_ENV === 'development') {
  app.use(require('webpack-dev-middleware')(compiler, {
      noInfo: true, publicPath: webpackConfig.output.publicPath
  }))
  app.use(require('webpack-hot-middleware')(compiler))
}

let db

MongoClient.connect('mongodb://localhost/mern').then(connection => {
  db = connection
}).catch(error => {
  console.log('Error:', error)
})

app.use(
  cookieSession({
    maxAge: 30 * 24 * 60 * 60 * 1000,
    keys: [keys.cookieKey]
  })
)

app.use(passport.initialize())
app.use(passport.session())

app.use('/static', express.static('public', { maxAge: '31d' }))

crudRoutes(app)
authRoutes(app)

// const reducers = (state) => {return state}

app.get('*', (req, res) => {
  fetch('http://localhost:3000/api').then(res => res.json()).then(data => {
    const initialState = {data: data.posts}
    const store = createStore(reducers, initialState)
    const context = {}

    const html = ReactDOMServer.renderToString(
       <Provider store={store}>
        <StaticRouter location={req.url} context={context}>
          <Router data={data.posts}/>
        </StaticRouter>
      </Provider>
    )

    if (context.status) {
      res.status(404).send(Template({html: html}))
    } else {
      res.status(200).send(Template({html: html, data: store.getState()}))
    }
  }).catch(error => {
  console.log('Error:', error)
  res.status(500)
})

})

app.listen(3000, () => {
  console.log('listening on port 3000')
})
