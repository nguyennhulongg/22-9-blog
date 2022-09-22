import { useSelector } from "react-redux";
import { selectAllPosts } from "./postsSlice";

import "./postList.css"

const PostList = () => {
  const posts = useSelector(selectAllPosts)

  const renderedPosts = posts.map(post => (
    <article className="post" key={post.id}>
      <h3 className="title">{post.title}</h3>
      <p  className="content">{post.content.substring(0, 100)}</p>
    </article>
  ))
  return (
    <section>
      <div>
        <h1 className="content-title">Post List</h1>
      </div>
      <div className="post-list">
        {renderedPosts}
      </div>
    </section>
  )
}

export default PostList
