import React, { useEffect, useState } from 'react';
import Post from './Post';
import { onSnapshot, collection, query, orderBy } from 'firebase/firestore';
import { db } from '../firebase';

// const posts = [
//     {
//         id: '123',
//         username: "jon__dallas",
//         userImg: 'https://links.papareact.com/3ke',
//         img: 'https://links.papareact.com/3ke',
//         caption: 'Subscribe and destroy the like button for the YT algorithm'
//     },
//     {
//         id: '124',
//         username: "jon__dallas",
//         userImg: 'https://links.papareact.com/3ke',
//         img: 'https://links.papareact.com/3ke',
//         caption: 'Subscribe and destroy the like button for the YT algorithm'
//     }
// ];

const Posts = () => {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const unsubscribe = onSnapshot(query(collection(db, 'posts'), orderBy('timestamp', 'desc')), snapshot => {
            setPosts(snapshot.docs);
        });

        return unsubscribe;

        // return () => {
        //     unsubscribe();
        // };
    }, [db]);

    return (
        <div>
            {
                posts.map(post => (
                    <Post
                        key={post.id}
                        id={post.id}
                        username={post.data().username}
                        userImg={post.data().profileImag}
                        img={post.data().image}
                        caption={post.data().caption}
                    />
                ))
            }
        </div>
    )
};

export default Posts;