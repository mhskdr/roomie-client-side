import React from 'react';
import { Link } from 'react-router';

const PostCardGrid = ({ post }) => {
    return (
        <div className="card bg-base-100 shadow-md hover:shadow-xl transition">
            <figure><img src={post.imageLink} alt={post.title} className="h-48 w-full object-cover" /></figure>
            <div className="card-body">
                <h2 className="card-title">{post.title}</h2>
                <p>{post.description.slice(0, 100)}...</p>
                <div className="text-sm text-gray-500">
                    <p>📍 {post.location}</p>
                    <p>💰 Rent: {post.rent}</p>
                    <p>🛏️ Room: {post.roomType}</p>
                </div>
                <div className="card-actions justify-end mt-2">
                    <Link to={`/postdetails/${post._id}`}>
                        <button className="btn btn-sm btn-outline btn-primary">View</button>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default PostCardGrid;
