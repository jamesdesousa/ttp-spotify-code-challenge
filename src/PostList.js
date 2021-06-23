import React, { useState, useCallback, useRef } from "react";
import PostCard from "./PostCard";


function PostList({posts, loading, setEndOfPosts, endOfPosts, numberRendered}) {
   const observer = useRef()
   const lastPost = useCallback(post => {
       if (loading) return 
       if(observer.current) observer.current.disconnect()
       observer.current = new IntersectionObserver(posts => {
           if(posts[0].isIntersecting) {
                setEndOfPosts(!endOfPosts)
                console.log(post)
           }
       })
       if(post) observer.current.observe(post)
       
   }, [loading])
    const postsArray = posts.map((post, index) => {
        
            return(
            <PostCard 
            key={post.id} 
            post={post} 
            lastPost={lastPost} 
            index={index} 
            numberRendered={numberRendered} 
            posts={posts}  />
            )
    })
  return (
    <ul className='cards'>
        {postsArray}
    </ul>
  );
}

export default PostList;