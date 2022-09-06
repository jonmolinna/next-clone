import React from 'react';
import Post from './Post';

const posts = [
    {
        id: '123',
        username: "jon__dallas",
        userImg: 'https://links.papareact.com/3ke',
        img: 'https://links.papareact.com/3ke',
        caption: 'Subscribe and destroy the like button for the YT algorithm'
    },
    {
        id: '124',
        username: "jon__dallas",
        userImg: 'https://links.papareact.com/3ke',
        img: 'https://links.papareact.com/3ke',
        caption: 'Subscribe and destroy the like button for the YT algorithm'
    }
];

const Posts = () => {
    return (
        <div>
            {
                posts.map(post => (
                    <Post
                        key={post.id}
                        id={post.id}
                        username={post.username}
                        userImg={post.userImg}
                        img={post.img}
                        caption={post.caption}
                    />
                ))
            }
        </div>
    )
};

export default Posts;