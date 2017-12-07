import React, {Component} from 'react'
import {postArticle} from '../actions/actions'
import {connect} from 'react-redux'

class NewPost extends Component {
  constructor(props) {
    super(props)
    this.handleEvent = this.handleEvent.bind(this)
    this.titleChanged = this.titleChanged.bind(this)
    this.handleChanged = this.handleChanged.bind(this)
    this.contentChanged = this.contentChanged.bind(this)
    this.state = {
      title: '',
      handle: '',
      content: ''
    }
  }
  handleEvent(e) {
    e.preventDefault()
    this.props.dispatch(postArticle({title: this.state.title, handle: this.state.handle, content: this.state.content}))
  }
  titleChanged(e) {
    this.setState({title: e.target.value})
  }
  handleChanged(e) {
    this.setState({handle: e.target.value})
  }
  contentChanged(e) {
    this.setState({content: e.target.value})
  }
  render() {
    return (<div>
      <h1>New Post</h1>
      <p className={this.props.fetching
          ? ''
          : 'hide-text'}>Post Successful</p>
      <form onSubmit={this.handleEvent}>
        <p>
          <label htmlFor="title">Title:</label><br/>
          <input onChange={this.titleChanged} type='text' name='title'/>
        </p>
        <p>
          <label htmlFor="handle">Handle:</label><br/>
          <input onChange={this.handleChanged} type='text' name='handle'/>
        </p>
        <p>
          <label htmlFor="content">Content:</label><br/>
          <textarea cols='30' rows='10' onChange={this.contentChanged} type='text' name='content'/>
        </p>
        <p><input type='submit' value='Submit'/></p>
      </form>
    </div>)
  }
}

const CreatePost = connect(store => {
  return {posts: store.data, fetching: store.fetching}
})(NewPost)

export default CreatePost
