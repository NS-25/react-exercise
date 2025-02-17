// import { useState, useEffect } from "react";

// const singlePost = "https://dummyjson.com/posts/1/";

// const postComment = "https://dummyjson.com/posts/1/comments";

// const initial = {
//   posts: [],
// };

// export default function DetailPage() {
//   const [post, setPost] = useState(initial);
//   const [comment, setComment] = useState({
//     comments: [],
//   });

//   useEffect(() => {
//     fetch(singlePost)
//       .then((res) => {
//         return res.json();
//       })
//       .then((res) => {
//         setPost(res);
//       });

//     fetch(postComment)
//       .then((res) => {
//         return res.json();
//       })
//       .then((res) => {
//         setComment(res);
//       });
//   }, []);
//   // console.log(comment.comments);
//   return (
//     <div>
//       <h1>Single Post</h1>
//       <br />

//       <h3>{post.title}</h3>
//       <p>{post.body}</p>
//       <ul>
//         {comment.comments.map((item,id) => (
//           <li key={id}>{item.body}</li>
//         ))}
//       </ul>
//     </div>
//   );
// }
