import React, {RefObject} from 'react';
import s from "./MyPosts.module.css"
import Post from "./Post/Post";
import {addPost} from "../../../Redux/state";

type PostType = {
    id: number
    text: string
    likesCount: number
}

type MyPostsType = {
    postsData: PostType[]
    addPost: (newPost: string) => void
}

export const MyPosts: React.FC<MyPostsType> = ({postsData, addPost}) => {
    const postsElements = postsData.map(post => <Post id={post.id} text={post.text} likesCount={post.likesCount}/>)

    let newPostTextReference: RefObject<HTMLTextAreaElement> = React.createRef()

    const  addNewPostHandler = () =>{
        const newPost = newPostTextReference.current?.value
        if(newPost) {
            addPost(newPost)
            if(newPostTextReference.current) newPostTextReference.current.value = ""
        }
    }

    return (
        <div className={s.posts}>
            My Posts
            <div>
                <textarea ref={newPostTextReference}></textarea>
                <button onClick={addNewPostHandler}>Add post</button>
            </div>

            <div>
                {postsElements}
            </div>
        </div>
    );
};
