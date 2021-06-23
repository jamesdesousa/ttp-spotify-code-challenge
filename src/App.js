import React, { useState, useEffect } from "react";
import PostList from "./PostList"
import './App.css';

function App() {
  const[loading, setLoading] = useState(true)
  const[posts, setPosts] = useState([])
  const[endOfPosts, setEndOfPosts] = useState(false)
  const[numberRendered, setNumberRendered] = useState(10)
  useEffect(() => {
    setLoading(true)
    fetch(`http://localhost:3000/object/?_limit=${numberRendered}`)
    .then(res => res.json())
    .then(data => {
      setPosts(data)
      
    })
    setLoading(false)
    setEndOfPosts(false)
    setNumberRendered(numberRendered + 10)

  },[endOfPosts])
  return (
    <main>
      <h1 className= 'logo'>Cat-erest</h1>
      <h2 className='greeting'> Come stay a while! </h2>
      <h2> Meow!</h2>
      <PostList posts = {posts} loading={loading} setEndOfPosts={setEndOfPosts} endOfPosts={endOfPosts} numberRendered={numberRendered}/>
      <div> {loading && 'Loading'}</div>
    </main>
  );
}

export default App;
