import React from "react";
import { useSelector } from "react-redux";
import PostCard from "./PostCard";

const PostList = () => {
  const postList = useSelector((store) => store.postReducer.posts);
  console.log(postList);
  return (
    <div>
      {postList.map((el) => (
        <PostCard post={el} key={el.id} />
      ))}
    </div>
  );
};

export default PostList;
