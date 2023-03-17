// import React, { useState, useEffect } from 'react'
// export default function Posts() {
//   const [post, getPost] = useState([])
//   const API = 'http://localhost:3200/book';
//   // const API = 'https://puce-helpful-xerus.cyclic.app/blogs';
//   // const API = 'https://jsonplaceholder.typicode.com/posts';
//   const fetchPost = () => {
//   return  fetch(API)
//       .then((res) => res.json())
//       .then((res) => {
//         console.log(res.books);
//         getPost(res)
//       })
//   }
//   useEffect(() => {
//     fetchPost()
//   }, [])
// }