import React from 'react'

const SinglePost = ({posts, id}) => (
  <div>
    {posts.map((post, i) => {
      if (post.handle === id) {
        return (
          <div key='i'>
            <h1>{post.title}</h1>
            <div dangerouslySetInnerHTML={{__html: post.content}} />
          </div>
        )
      }
    })}
  </div>
)

export default SinglePost
