import React, {RefObject} from 'react';
import s from "./MyPosts.module.css"
import Post from "./Post/Post";
import {MyPostsType} from "../../../consts vs types/types";

export const MyPosts: React.FC<MyPostsType> = ({postsData, newPostText, addPost, updateText}) => {

    const postsElements = postsData.map(post =>
        <Post
            key={post.id}
            id={post.id}
            text={post.text}
            likesCount={post.likesCount}
        />)

    let newPostTextReference: RefObject<HTMLTextAreaElement> = React.createRef()

    const updateTextHandler = () => updateText(newPostTextReference.current?.value as string)

    return (
        <div className={s.posts}>
            My Posts
            <div>
                <textarea onChange={updateTextHandler} ref={newPostTextReference} value={newPostText}></textarea>
                <button onClick={addPost}>Add post</button>
            </div>
            <div>
                {postsElements}
            </div>
        </div>
    );
};
