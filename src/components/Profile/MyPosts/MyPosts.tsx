import React, {RefObject} from 'react';
import s from "./MyPosts.module.css"
import Post from "./Post/Post";
import {MyPostsType} from "../../../consts vs types/types";
import {addPostActionCreator, updateNewPostTextActionCreator} from "../../../Redux/state";

export const MyPosts: React.FC<MyPostsType> = ({postsData, newPostText, dispatch}) => {

    const postsElements = postsData.map(post =>
        <Post key={post.id} id={post.id} text={post.text} likesCount={post.likesCount}/>)

    let newPostTextReference: RefObject<HTMLTextAreaElement> = React.createRef()

    const addNewPostHandler = () => {
        const newPost = newPostTextReference.current?.value
        if (newPost) {
            dispatch(addPostActionCreator())
        }
    }

    const onChangeHandler = () => {
        if(newPostTextReference.current?.value)
            dispatch(updateNewPostTextActionCreator(newPostTextReference.current?.value))
    }

    return (
        <div className={s.posts}>
            My Posts
            <div>
                <textarea onChange={onChangeHandler} ref={newPostTextReference} value={newPostText}></textarea>
                <button onClick={addNewPostHandler}>Add post</button>
            </div>
            <div>
                {postsElements}
            </div>
        </div>
    );
};
