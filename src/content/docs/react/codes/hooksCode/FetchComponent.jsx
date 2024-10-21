import React from 'react';
import useFetch from './useFetch';

function FetchComponent() {
    const { data, loading, error } = useFetch('https://jsonplaceholder.typicode.com/posts?_limit=3');

    if (loading) return <p>Loading...</p>;
    if (error) return <p>Error: {error}</p>;

    return (
        <ul>
            {data.map(post => (
                <li key={post.id}>{post.title}</li>
            ))}
        </ul>
    );
}

export default FetchComponent;
