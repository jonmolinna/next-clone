import React, { useEffect, useState } from 'react';
import { faker } from '@faker-js/faker';
import Story from './Story';

const Stories = () => {
    const [suggestions, setSuggestions] = useState([]);

    useEffect(() => {
        const suggestions = [...Array(20)].map((_, i) => ({
            id: i,
            username: faker.internet.userName(),
            avatar: faker.image.avatar(),
        }));

        setSuggestions(suggestions);
    }, [])

    return (
        <div className='flex space-x-2 p-6 bg-white mt-8 border-gray-200 border rounded-sm overflow-x-scroll scrollbar-thin scrollbar-thumb-black'>
            {
                suggestions.map(profile => (
                    <Story
                        key={profile.id}
                        username={profile.username}
                        avatar={profile.avatar}
                    />
                ))
            }
        </div>
    )
};

export default Stories;