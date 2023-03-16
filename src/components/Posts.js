import React, { useState, useEffect } from 'react'
export default function Posts() {
  const [post, getPost] = useState([])
  const API = 'http://localhost:3200/book';
  // const API = 'https://puce-helpful-xerus.cyclic.app/blogs';
  // const API = 'https://jsonplaceholder.typicode.com/posts';
  const fetchPost = () => {
    fetch(API)
      .then((res) => res.json())
      .then((res) => {
        console.log(res.books);
        getPost(res)
      })
  }
  useEffect(() => {
    fetchPost()
  }, [])
  return(
    <div>Welcome to the library</div>
  )
  // return (
  //   <>
  //     <h2>React Fetch Data with REST API Example</h2>
  //     <ul>
  //       {post.map((item, i) => {
  //         return <li key={i}>{item.books[i]}</li>
  //       })}
  //     </ul>
  //   </>
  // )
}