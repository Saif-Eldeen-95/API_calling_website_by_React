import { useParams, Link } from 'react-router-dom'
import axios from 'axios';
import { useState, useEffect } from 'react';
import './styling/FetchData.css';

function PostDetails() {
    const { id } = useParams();
    const [post, setPost] = useState(null);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios.get(`https://jsonplaceholder.typicode.com/posts/${id}`)
            .then(response => {
                setPost(response.data);
                setLoading(false);
            })
            .catch(error => {
                console.error('Error fetching post details:', error);
                setLoading(false);
            });
    }, [id]);

    if (loading) {
        return <div className="no-data">Loading...</div>;
    }

    return (
        <div className="fetch-container">
            <Link to="/fetch" className="back-link">← Back to Posts</Link>
            <article className="post-card post-detail">
                <span className="post-id">Post #{id}</span>
                <h2 className="post-title">{post?.title}</h2>
                <p className="post-body">{post?.body}</p>
            </article>
        </div>
    );
}

export default PostDetails
