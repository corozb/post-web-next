import React from 'react'

function PostLayout({ children }) {
  return (
    <div>
      <marquee style={{ background: 'white', color: 'red' }}>
        Este layout se comparte entre varias páginas que no están anidadas. Podría usarse para el caso de un side bar o
        un user avatar
      </marquee>
      <br />
      <small>Home &bull; Posts</small>
      {children}
    </div>
  )
}

export default PostLayout
