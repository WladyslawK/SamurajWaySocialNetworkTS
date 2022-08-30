import React from 'react';
import s from "./Post.module.css";

type PostPropsType = {
    id: number
    text: string
    likesCount: number
}

const Post: React.FC<PostPropsType> = ({id, text, likesCount}) => {
    return (
        <>
            <div key={id} className={s.item}>
                <img src="https://fera.pl/images/companies/1/charakter%20mopsa.jpg?1604065618661" alt="avatar"/>
                {text}
                <div>
                    likes: {likesCount}
                </div>
            </div>
        </>
    );
};

export default Post;