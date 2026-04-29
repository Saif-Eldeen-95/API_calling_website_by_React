import { useEffect, useState } from 'react';
import axios from 'axios';
import './styling/FetchData.css';

function FetchData() {
    const [data, setData] = useState(null);

    function fetchData() {
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(response => setData(response.data))
            .catch(error => console.error('Error fetching data:', error));
    }

    useEffect(() => {
        fetchData();
    }, []);

    return (
        <div className="fetch-container">
            <div className="posts-list">
                {data ? data.map(post => (
                    <article key={post.id} className="post-card">
                        <a href={`/fetch/${post.id}?title=${encodeURIComponent(post.title)}&body=${encodeURIComponent(post.body)}`} className="post-link">
                            {post.title}
                        </a>
                        <p className="post-body">{post.body}</p>
                    </article>
                )) : <p className="no-data">No data fetched yet. Click the button above to load posts.</p>}
            </div>
        </div>
    )
}

export default FetchData