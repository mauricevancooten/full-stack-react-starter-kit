import React, {Component} from 'react'
import {Link} from 'react-router-dom'
import {deleteArticle, refreshArticle} from '../actions/actions'
import {connect} from 'react-redux'

class MainArchive extends Component {
  constructor(props) {
    super(props)
    this.handleClick = this.handleClick.bind(this)
  }
  handleClick(e) {
    e.preventDefault()
    this.props.dispatch(deleteArticle(e.target.id))
  }
  componentWillMount() {
    // This has issues on refresh
    this.props.dispatch(refreshArticle())
  }
  render() {
    const {posts} = this.props
    return (<div>
      <h1>Post Archive</h1>
      <p className={this.props.deleting
          ? ''
          : 'hide-text'}>Post Deleted</p>
      <ul className='archive-list'>
        {
          posts.map((post, i) => {
            return <li key={i}>{post.title}
              <Link to={`/dashboard/${post.handle}`}>Edit</Link>
              <a id={post._id} onClick={this.handleClick}>Delete</a>
            </li>
          })
        }
      </ul>
    </div>)
  }
}

const PostArchive = connect(store => {
  return {posts: store.data, deleting: store.deleting}
})(MainArchive)

export default PostArchive
