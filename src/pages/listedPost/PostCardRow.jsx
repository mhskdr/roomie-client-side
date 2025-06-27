import React from 'react';
import { Link } from 'react-router';
import { FaMapMarkerAlt, FaBed, FaMoneyBillAlt } from 'react-icons/fa';

const PostCardRow = ({ post }) => {
    return (
        <tr className="hover:bg-base-200 transition duration-200">
            <td>
                <img
                    src={post.imageLink}
                    alt="Room"
                    className="w-16 h-16 object-cover rounded-md shadow"
                />
            </td>
            <td className="text-primary font-semibold">{post.title}</td>
            <td className="text-sm text-gray-600">
                {post.description.length > 50
                    ? post.description.slice(0, 50) + '...'
                    : post.description}
            </td>
            <td className="text-sm">
                <FaMapMarkerAlt className="inline mr-1 text-accent" />
                {post.location}
            </td>
            <td className="text-sm">
                <FaMoneyBillAlt className="inline mr-1 text-success" />
                ৳{post.rent}
            </td>
            <td className="text-sm">
                <FaBed className="inline mr-1 text-info" />
                {post.roomType}
            </td>
            <td>
                <Link to={`/postdetails/${post._id}`}>
                    <button className="btn btn-sm btn-outline btn-primary">View</button>
                </Link>
            </td>
        </tr>
    );
};

export default PostCardRow;