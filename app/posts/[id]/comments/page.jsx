import React from 'react'
import Link from 'next/link'

const fecthComments = (id) => {
  // incremental static regeneration
  return fetch(`https://jsonplaceholder.typicode.com/posts/${id}/comments`, {
    next: {
      revalidate: 60,
    },
  }).then((res) => res.json())
}

async function page({ params: { id } }) {
  const comments = await fecthComments(id)
  return (
    <ul>
      <Link href={`/posts/${id}`} style={{ color: '#09f' }}>
        Atrás
      </Link>
      {comments.map((comment) => (
        <li style={{ background: 'rgb(107 107 107)' }}>
          <h4>{comment.title}</h4>
          <small>{comment.body}</small>
        </li>
      ))}
    </ul>
  )
}

export default page
