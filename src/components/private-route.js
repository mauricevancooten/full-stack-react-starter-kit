import React from 'react'
import {connect} from 'react-redux'
import {Route, Redirect} from 'react-router-dom'

const Private = ({ component: Component, auth, ...rest }) => (
  <Route {...rest} render={props => (
    auth ? (
      <Component {...props}/>
    ) : (
      <Redirect to={{
        pathname: '/',
        state: { from: props.location }
      }}/>
    )
  )}/>
)

const PrivateRoute = connect(store => {
  return {auth: store.auth}
})(Private)

export default PrivateRoute
