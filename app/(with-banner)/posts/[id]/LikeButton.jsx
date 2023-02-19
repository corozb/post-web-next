'use client'
import { useState } from 'react'

function LikeButton({ id }) {
  const [liked, setLiked] = useState(false)

  return (
    <button onClick={() => setLiked((prevState) => !prevState)}>
      <div>{liked ? '❤️' : '🤍'}</div>
    </button>
  )
}

export default LikeButton
