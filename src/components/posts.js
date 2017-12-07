import React from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'

const MainPosts = ({posts}) => (
  <div>
    <h1>Articles</h1>
    <ul>
      {posts.map((post, i) => {
        return <li key={i}><Link to={`/${post.handle}`}>{post.title}</Link></li>
      })}
    </ul>
  </div>
)

const Posts = connect(store => {
  return {posts: store.data}
})(MainPosts)

export default Posts
