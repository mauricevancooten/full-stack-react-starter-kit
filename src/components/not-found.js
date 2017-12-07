import React from 'react'
import {Route} from 'react-router-dom'

const Status = ({ code, children }) => (
  <Route render={({ staticContext }) => {
    if (staticContext)
      staticContext.status = code
    return children
  }}/>
)

const NotFound = () => (
  <Status code={404}>
   <div>
     <h1>Nothing to see here.</h1>
   </div>
 </Status>
)

export default NotFound
