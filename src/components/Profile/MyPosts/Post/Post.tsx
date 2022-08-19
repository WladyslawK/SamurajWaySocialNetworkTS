import React from 'react';
import s from "./Post.module.css";

const Post = () => {
    return (
        <>
            <div className={s.item}>
                <img src="https://fera.pl/images/companies/1/charakter%20mopsa.jpg?1604065618661" alt="avatar"/>
                Post 2
                <div>
                    like
                </div>
            </div>
        </>
    );
};

export default Post;