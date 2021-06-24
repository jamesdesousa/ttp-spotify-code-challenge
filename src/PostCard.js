import React, { useState, useEffect } from "react";


function PostCard({post, lastPost, index, numberRendered, posts}) {
    //identifying the last post rendered thats visible on screen
  return (
    <li className='card'>
        {index === posts.length -1 ?
            
            <div>
                <img src={post.images.orig.url} ref={lastPost}/>
                <h4>{post.board.name}</h4>
            </div>
            :
            <div>
                <img src={post.images.orig.url} height='200'/>
                <h4>{post.board.name}</h4>

            </div>
        }
        
    </li>
  );
}

export default PostCard;