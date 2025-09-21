import React, { useState, useEffect } from "react";

const LoadindAndErrorStates1 = () => {
 const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(false); 
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      setError(null);

      try {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts");

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }

        const data = await response.json();
        setPosts(data.slice(0, 10));
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchPosts();
  }, []);
  if (loading) {
    return <div style={{ color: "blue" }}>Loading posts...</div>;
  }

  if (error) {
    return <div style={{ color: "red" }}>Error: {error}</div>;
  }

  return (
    <div>
      <h2>Posts</h2>
      {posts.map((p) => (
        <article key={p.id} style={{ marginBottom: "12px" }}>
          <h4>{p.title}</h4>
          <p>{p.body}</p>
        </article>
      ))}
    </div>
  );
}


export default LoadindAndErrorStates1