import React from 'react'

function PostLayout({ children }) {
  return (
    <div>
      <small>Home &bull; Posts</small>
      {children}
    </div>
  )
}

export default PostLayout
