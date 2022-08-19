import React from 'react';
import s from "./MyPosts.module.css"
import Post from "./Post/Post";

const MyPosts = () => {
    return (
        <div className={s.posts}>
            My Posts
            <div>
                <textarea></textarea>
                <button>Add post</button>
            </div>

            <div>
                <Post message = "Hi"/>
                <Post message = "How are you?"/>
            </div>
        </div>
    );
};

export default MyPosts;