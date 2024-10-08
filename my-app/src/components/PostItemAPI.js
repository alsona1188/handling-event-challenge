import React from "react"
import css from "./css/PostItem.module.css";


function PostItem(props) {
    
    return (
        props.savedPosts.map(post => {
            // Extra task destructuring 
            const { id, user, type, tags, webformatURL } = post
            return <div className={css.SearchItem} key={id}>
                <p>{type}</p>
                <p>{user}</p>
                <img src={webformatURL} alt="random"/>
                <p>{tags}</p>
            </div>
            }
        )
    )
}

export default PostItem