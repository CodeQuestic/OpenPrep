// src/pages/index.astro

import { Icon } from '@astrojs/starlight/components';
import React, { useState, useEffect } from 'react';

// Custom hook and React component combined
function FetchComponent() {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts?_limit=3');
        if (!response.ok) throw new Error('Failed to fetch');
        const result = await response.json();
        setData(result);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }
    fetchData();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error}</p>;

  return (
    <ul>
      {data.map(post => <li key={post.id}>{post.title}</li>)}
    </ul>
  );
}

// Simple card wrapper
const CustomCard = ({ children }) => (
  <div style="padding: 1.5rem; border: 1px solid #ddd; border-radius: 8px;">
    {children}
  </div>
);


<main>
  <h1>Welcome to the Astro + React Example</h1>
  <Icon name="open-book" />
  <CustomCard>
    <h2>Latest Posts</h2>
    <FetchComponent />
  </CustomCard>
</main>