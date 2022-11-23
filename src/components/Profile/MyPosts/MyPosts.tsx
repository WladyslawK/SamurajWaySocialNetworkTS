import React from 'react';
import s from "./MyPosts.module.css"
import Post from "./Post/Post";
import {MyPostsType} from "../../../consts vs types/types";
import {Field, InjectedFormProps, reduxForm} from "redux-form";

export const MyPosts: React.FC<MyPostsType> = ({postsData, addPost}) => {

    const postsElements = postsData && postsData.map(post =>
        <Post
            key={post.id}
            id={post.id}
            text={post.text}
            likesCount={post.likesCount}
        />)

    const addNewPost = (data: AddNewPostType) => {
        addPost(data.newPostText)
    }

    return (
        <div className={s.posts}>
            <h3>My Posts</h3>
            <AddNewReduxPost onSubmit={addNewPost}/>
            <div>
                {postsElements}
            </div>
        </div>
    )
}


type AddNewPostType = {
    newPostText: string
}
const AddNewPost: React.FC<InjectedFormProps<AddNewPostType>> = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field name="newPostText" placeholder={"Enter your post text"} component={"textarea"}/>
            </div>
            <div>
                <button>Add post</button>
            </div>
        </form>)
}

const AddNewReduxPost = reduxForm<AddNewPostType>({form: "AddPost"})(AddNewPost)