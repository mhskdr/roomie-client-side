import React, { use, useEffect, useState } from 'react';
import { FaTrash, FaEdit } from 'react-icons/fa';
import { useNavigate } from 'react-router';
import Swal from 'sweetalert2';
import { AuthContext } from '../../provider/AuthContext';
import DynamicTitle from '../../components/dynamicTitle/DynamicTitle';

const MyListings = () => {
    const { user } = use(AuthContext);
    const currentUser = user;

    const [loading, setLoading] = useState(true);
    const [myPosts, setMyPosts] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                setLoading(true);
                const res = await fetch(`https://back-end-alpha-bay.vercel.app/filterusers?email=${encodeURIComponent(currentUser.email)}`);
                const data = await res.json();
                setMyPosts(data);
            } catch (error) {
                console.error('Error loading posts:', error);
            } finally {
                setLoading(false);
            }
        };

        if (currentUser?.email) {
            fetchPosts();
        }
    }, [currentUser?.email]);

    if (loading) return <span className="loading loading-infinity loading-xl"></span>;

    const handleDelete = async (id) => {
        const result = await Swal.fire({
            title: 'Are you sure?',
            text: 'You wont be able to revert this!',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#d33',
            cancelButtonColor: '#3085d6',
            confirmButtonText: 'Yes, delete it!',
        });

        if (result.isConfirmed) {
            try {
                const res = await fetch(`https://back-end-alpha-bay.vercel.app/users/${id}`, {
                    method: 'DELETE',
                });

                if (res.ok) {
                    setMyPosts(prev => prev.filter(post => post._id !== id));
                    Swal.fire({
                        title: 'Success',
                        text: 'Your post Deleted.',
                        icon: 'success'
                    });
                } else {
                    Swal.fire({
                        title: 'Oops.',
                        text: 'Your post not Deleted.',
                        icon: 'error'
                    });
                }
            } catch (error) {
                console.error('Delete error:', error);
                Swal.fire({
                    title: 'Oops.',
                    text: 'Your post not Deleted.',
                    icon: 'error'
                });
            }
        }
    };

    const handleUpdate = (id) => {
        navigate(`/update/${id}`);
    };

    return (
        <div className="max-w-6xl mx-auto p-4 pt-16">
            <DynamicTitle title='Your Post || Stay Informed'></DynamicTitle>
            <h2 className="text-3xl font-bold text-center mb-8">My Post</h2>
            <div className="overflow-x-auto">
                <table className="table w-full table-zebra">
                    <thead>
                        <tr className="bg-primary text-white">
                            <th>Title</th>
                            <th>Location</th>
                            <th>Rent</th>
                            <th>Room Type</th>
                            <th className="text-center">Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {myPosts.map(post => (
                            <tr key={post._id}>
                                <td>{post.title}</td>
                                <td>{post.location}</td>
                                <td>৳{post.rent}</td>
                                <td>{post.roomType}</td>
                                <td className="flex flex-col gap-2 justify-center">
                                    <button
                                        className="btn btn-sm btn-info text-white flex items-center gap-1"
                                        onClick={() => handleUpdate(post._id)}
                                    >
                                        <FaEdit /> Update
                                    </button>
                                    <button
                                        className="btn btn-sm btn-error text-white flex items-center gap-1"
                                        onClick={() => handleDelete(post._id)}
                                    >
                                        <FaTrash /> Delete
                                    </button>
                                </td>
                            </tr>
                        ))}
                        {myPosts.length === 0 && (
                            <tr>
                                <td colSpan="5" className="text-center py-6 text-gray-500">
                                    No listings found.
                                </td>
                            </tr>
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MyListings;