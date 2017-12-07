import React, {Component} from 'react'
import {Route, Switch} from 'react-router-dom'
import Posts from './posts'
import SinglePost from './single-post'
import CreatePost from './create-post'
import UpdatePost from './update-post'
import PostArchive from './post-archive'
import Navigation from './navigation'
import DashboardNavigation from './dashboard-navigation'
import NotFound from './not-found'
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'
import PrivateRoute from './private-route'

const MainRouter = ({data}) => (
  <div>
    <Route exact path='/' component={Navigation}/>
    <Route path='/dashboard' component={DashboardNavigation}/>
    {data.map((post, i) => {
      return <Route exact path={`/${post.handle}`} key={i}  component={Navigation} />
    })}
    <div className='wrapper'>
      <div className='container'>
        <Switch>
          <Route exact path='/' render={() => (<Posts posts={data}/>)}/>
          {data.map((post, i) => {
            return <Route exact path={`/${post.handle}`} key={i} render={() => (<SinglePost posts={data} id={post.handle}/>)}/>
          })}
          <Route path='/auth/google/callback' render={() => (<Posts posts={data}/>)}/>
          <PrivateRoute exact path="/dashboard" component={CreatePost} />
          {data.map((post, i) => {
            return <Route exact path={`/dashboard/${post.handle}`} key={i} render={() => (<UpdatePost posts={data} id={post.handle}/>)}/>
          })}
          <Route path="/dashboard/archive" render={() => (<PostArchive posts={data}/>)} />
          <Route component={NotFound}/>
        </Switch>
      </div>
    </div>
    <footer>
      <small>
        <a href='https://opensource.org/licenses/MIT'>MIT</a>
      </small>
    </footer>
  </div>
)

const Router = withRouter(connect(store => {
  return {data: store.data}
})(MainRouter))

export default Router
