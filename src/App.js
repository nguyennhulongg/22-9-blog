import AddPostForm from "./app/features/posts/AddPostForm";
import PostList from "./app/features/posts/PostList";


function App() {
  return (
    <div className="App">
      <AddPostForm />
      <PostList className="post-list"/>
    </div>
  );
}

export default App;
