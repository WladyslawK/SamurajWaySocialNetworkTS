import React, {RefObject} from 'react';
import s from "./MyPosts.module.css"
import Post from "./Post/Post";

type PostType = {
    id: number
    text: string
    likesCount: number
}

type MyPostsType = {
    postsData: PostType[]
}

export const MyPosts: React.FC<MyPostsType> = ({postsData}) => {
    const postsElements = postsData.map(post => <Post id={post.id} text={post.text} likesCount={post.likesCount}/>)

    const newPostTextReference: RefObject<HTMLTextAreaElement> = React.createRef()

    const  addNewPostHandler = () =>{
        alert(newPostTextReference.current?.value)
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
