# Full Stack React Starter Kit

MERN stack, universal JavaScript build with Express, React, [React Router v4](https://reacttraining.com/react-router/), [Redux](https://redux.js.org/), [MongoDB](https://www.mongodb.com/), [Passport](http://www.passportjs.org/) and [Google OAuth 2.0](https://github.com/jaredhanson/passport-google-oauth2).

Webpack to compile JavaScript, JSX and Sass.
* ESLint to lint JavaScript
* Babel Minify to compress JavaScript
* JavaScript compiles down to ES5, PostCSS and Autoprefixer compiles CSS for older browser compatibility
* HMR for development
* CRUD operations using [MongoDB](https://www.mongodb.com/) and [Redux](https://redux.js.org/).
* Authentication using [Passport](http://www.passportjs.org/), [Google OAuth 2.0](https://github.com/jaredhanson/passport-google-oauth2) and [Redux](https://redux.js.org/)

## Instructions

Requires a [MongoDB](https://www.mongodb.com/) installation. Listening on default port: 27017.

1. Install dependencies: `npm install`
1. Compile client: `npm run compile`
1. Compile server: `npm run compile-server`
1. Run production / development environment
    * For production: `node server.js`
    * For development: `npm run dev` (comment out stylesheet link for HMR)
1. Visit: [http://localhost:3000](http://localhost:3000)

In a live server environment you may only want to install dependencies.
1. Install dependencies: `npm install --only=production`

### Production

Sass is compiled to autoprefixed and minified CSS. Javascript is linted and minified.

### Development

Webpack HMR live reloads JavaScript and CSS in the browser.

## Licence

Licensed under [MIT](https://opensource.org/licenses/MIT) licence.
