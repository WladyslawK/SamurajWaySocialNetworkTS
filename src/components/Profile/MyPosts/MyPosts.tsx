import React from 'react';
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
