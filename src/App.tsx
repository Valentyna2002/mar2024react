import React from 'react';
import './App.css';
import FormComponent from "./components/formComponent";
import PostsComponent from "./components/postsComponent";
import {useState} from "react";
import {IPosts} from "./model/IPosts";
import PostComponent from "./components/postComponent";

const App = () => {

    const [trigger, setTrigger] = useState<boolean>(false)
    const [newPost, setNewPost] = useState<IPosts | null>(null)

  return (
      <div>
          <FormComponent setTrigger={setTrigger} setNewPost={setNewPost} />

          <hr/>
       <PostsComponent trigger={trigger} newPost={newPost}/>

      </div>
  );
}

export default App;
