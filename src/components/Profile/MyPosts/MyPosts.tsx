import React from 'react';
import s from "./MyPosts.module.css"
import Post from "./Post/Post";

const MyPosts = () => {

    const postsData = [
        {id: 1, text: "Hi", likesCount: 12},
        {id: 2, text: "How are you?", likesCount: 11},
    ]

    const postsElements = postsData.map(post => <Post id={post.id} text={post.text} likesCount={post.likesCount}/>)


    return (
        <div className={s.posts}>
            My Posts
            <div>
                <textarea></textarea>
                <button>Add post</button>
            </div>

            <div>
                {postsElements}
            </div>
        </div>
    );
};

export default MyPosts;