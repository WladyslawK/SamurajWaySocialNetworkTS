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
    addPos: (newPost: string) => void
}

export const MyPosts: React.FC<MyPostsType> = ({postsData, addPos}) => {
    const postsElements = postsData.map(post => <Post id={post.id} text={post.text} likesCount={post.likesCount}/>)

    const newPostTextReference: RefObject<HTMLTextAreaElement> = React.createRef()

    const  addNewPostHandler = () =>{debugger
        const newPost = newPostTextReference.current?.value
        if(newPost) addPost(newPost)
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
