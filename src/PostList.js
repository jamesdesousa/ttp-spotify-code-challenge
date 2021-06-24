import React, { useCallback, useRef } from "react";
import PostCard from "./PostCard";


function PostList({posts, loading, setEndOfPosts, endOfPosts, numberRendered}) {
    //useRef and useCallback used with IntersectionObserver to identify when the last item on the page is visible on screen with isIntersecting 
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