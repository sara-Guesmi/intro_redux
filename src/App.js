import "./App.css";
import Counter from "./Components/Counter";
import AddPost from "./Components/PostApplication/AddPost";
import PostList from "./Components/PostApplication/PostList";

function App() {
  return (
    <div className="App">
      {/* <Counter /> */}
      <AddPost />
      <PostList />
    </div>
  );
}

export default App;
