import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const fecthComments = async (id) => {
  await new Promise((resolve) => setTimeout(resolve, 5000))
  // throw new Error()

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
          <Image
            width={50}
            height={50}
            src={`https://avatars.dicebear.com/api/pixel-art/${comment.email}.svg`}
            alt={comment.name}
          />
          <h4>{comment.title}</h4>
          <small>{comment.body}</small>
        </li>
      ))}
    </ul>
  )
}

export default page
