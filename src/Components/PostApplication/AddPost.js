import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addPost } from "../../JS/actions/post";

const AddPost = () => {
  const [text, setText] = useState("");
  const dispatch = useDispatch();
  const handleAdd = () => {
    dispatch(addPost({ id: Math.random(), text: text }));
    setText("");
  };
  return (
    <div>
      <input
        type="text"
        onChange={(e) => setText(e.target.value)}
        value={text}
      />
      <button onClick={handleAdd}>Add</button>
    </div>
  );
};

export default AddPost;
