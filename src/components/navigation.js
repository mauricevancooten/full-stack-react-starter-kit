import React, {Component} from 'react'
import {Link, withRouter} from 'react-router-dom'
import {connect} from 'react-redux'
import {fetchUser, logoutUser} from '../actions/actions'

class MainNavigation extends Component {
  constructor(props) {
    super(props)
    this.handleClick = this.handleClick.bind(this)
  }
  componentDidMount() {
    this.props.dispatch(fetchUser())
  }
  handleClick(e) {
    e.preventDefault()
    this.props.dispatch(logoutUser())
  }
  render() {
    const {auth} = this.props
    console.log(auth)
    return (<div>
      <header>
        <h1>Site Name</h1>
        <nav>
          <ul>
            <li>
              <Link to='/'>Home</Link>
            </li>
            <li>
              <Link to='/dashboard'>Dashboard</Link>
            </li>
            <li>
              {
                auth
                  ? <a onClick={this.handleClick}>Logout</a>
                  : <a href="/auth/google">Login</a>
              }
            </li>
          </ul>
        </nav>
      </header>
    </div>)
  }
}

const Navigation = withRouter(connect(store => {
  return {auth: store.auth}
})(MainNavigation))

export default Navigation
