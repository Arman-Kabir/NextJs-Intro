import { useRouter } from 'next/router'
import React from 'react'

function NewsDetails() {
    const router  = useRouter();
  return (
    <div>
        <h1>This is detail page of : {router.query.newsId}</h1>
    </div>
  )
}

export default NewsDetails