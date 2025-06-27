import React, { useEffect, useState } from 'react';
import { useLoaderData, useNavigate } from 'react-router';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { BsArrowLeft } from 'react-icons/bs';
import { FaTh, FaTable } from 'react-icons/fa';
import DynamicTitle from '../../components/dynamicTitle/DynamicTitle';
import PostCardRow from './PostCardRow';
import PostCardGrid from './PostCardGrid';
import Loading from '../../components/loading/Loading';

const BrowseListed = () => {
    const data = useLoaderData();
    const [loading, setLoading] = useState(true);
    const [filteredPosts, setFilteredPosts] = useState([]);
    const [viewMode, setViewMode] = useState('card'); // 'table' or 'card'
    const [filter, setFilter] = useState({ location: '', roomType: '' });
    const navigate = useNavigate();

    useEffect(() => {
        AOS.init({ duration: 800 });
        if (data) {
            setFilteredPosts(data);
            setLoading(false);
        }
    }, [data]);

    const handleFilterChange = (e) => {
        const { name, value } = e.target;
        setFilter((prev) => ({ ...prev, [name]: value }));
    };

    useEffect(() => {
        const filtered = data.filter(post => {
            const matchLocation = filter.location === '' || post.location.toLowerCase().includes(filter.location.toLowerCase());
            const matchRoomType = filter.roomType === '' || post.roomType.toLowerCase() === filter.roomType.toLowerCase();
            return matchLocation && matchRoomType;
        });
        setFilteredPosts(filtered);
    }, [filter, data]);

    if (loading) return <Loading />;

    return (
        <div className="bg-base-200 py-16 px-4">
            <DynamicTitle title="All Post will appeared here || RoomieConnect" />

            <div className="max-w-6xl mx-auto text-center mb-10">
                <h2 className="text-4xl font-bold text-primary">Dive in & Explore</h2>
                <div className="border-t-8 border-accent my-6 w-[50px] mx-auto"></div>
                <p className="text-base text-base-content">Find rooms, roommates, and lifestyles that fit you best</p>
            </div>

            {/* Filters & Toggle View */}
            <div className="max-w-6xl mx-auto mb-6 flex flex-wrap items-center gap-4 justify-between">
                <div className="flex gap-4 flex-wrap">
                    <input
                        type="text"
                        name="location"
                        placeholder="Search by location"
                        className="input input-bordered input-sm w-48"
                        value={filter.location}
                        onChange={handleFilterChange}
                    />
                    <select
                        name="roomType"
                        className="select select-bordered select-sm w-48"
                        value={filter.roomType}
                        onChange={handleFilterChange}
                    >
                        <option value="">All Room Types</option>
                        <option value="single">Single</option>
                        <option value="double">Double</option>
                        <option value="shared">Shared</option>
                    </select>
                </div>

                <button
                    onClick={() => setViewMode(prev => prev === 'table' ? 'card' : 'table')}
                    className="btn btn-outline btn-sm flex items-center gap-2"
                >
                    {viewMode === 'table' ? <FaTh /> : <FaTable />}
                    {viewMode === 'table' ? 'Card View' : 'Table View'}
                </button>
            </div>

            {/* View Section */}
            {viewMode === 'table' ? (
                <div className="overflow-x-auto max-w-6xl mx-auto rounded-xl shadow-lg bg-base-100">
                    <table className="table table-zebra w-full">
                        <thead className="bg-primary text-primary-content sticky top-0 z-10">
                            <tr className="text-sm">
                                <th>Image</th>
                                <th>Title</th>
                                <th>Description</th>
                                <th>Location</th>
                                <th>Rent</th>
                                <th>Room Type</th>
                                <th>Details</th>
                            </tr>
                        </thead>
                        <tbody>
                            {filteredPosts.map(post => (
                                <PostCardRow key={post._id} post={post} />
                            ))}
                        </tbody>
                    </table>
                </div>
            ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
                    {filteredPosts.map(post => (
                        <PostCardGrid key={post._id} post={post} />
                    ))}
                </div>
            )}

            {/* Back Button */}
            <div className="text-left mt-6 max-w-6xl mx-auto">
                <button
                    onClick={() => navigate(-1)}
                    className="btn btn-outline btn-secondary flex items-center gap-2"
                >
                    <BsArrowLeft /> Go Back
                </button>
            </div>
        </div>
    );
};

export default BrowseListed;
