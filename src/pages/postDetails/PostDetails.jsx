import React, { use, useEffect, useState } from 'react';
import { useLoaderData, useNavigate } from 'react-router';
import { FaBed, FaMapMarkerAlt, FaUserAlt, FaPhoneAlt, FaHeart, FaRegHeart } from 'react-icons/fa';
import { MdOutlineMeetingRoom, MdAttachMoney } from 'react-icons/md';
import { GiLifeBar } from 'react-icons/gi';
import { BsArrowLeft } from 'react-icons/bs';
import { TbPointerStar } from 'react-icons/tb';
// eslint-disable-next-line no-unused-vars
import { motion } from 'framer-motion';
import { Tooltip } from 'react-tooltip';
import DynamicTitle from '../../components/dynamicTitle/DynamicTitle';
import Swal from 'sweetalert2';
import { AuthContext } from '../../provider/AuthContext';

const PostDetails = () => {
    const usersPost = useLoaderData();
    const navigate = useNavigate();
    const { user } = use(AuthContext);

    const [favorited, setFavorited] = useState(false);
    const [favoriteCount, setFavoriteCount] = useState(usersPost.count || 0);

    useEffect(() => {
        if (usersPost?.likerEmail && user?.email) {
            if (usersPost.likerEmail.includes(user.email)) {
                setFavorited(true);
            }
        }
    }, [usersPost.likerEmail, user?.email]);

    const handleFavorite = () => {
        if (user?.email === usersPost.userEmail) {
            // User is trying to like their own post
            Swal.fire({
                icon: "warning",
                title: "You cannot like your own post!",
                timer: 1500,
                showConfirmButton: false
            });
            return;
        };
        // Update like count in backend
        fetch(`https://back-end-alpha-bay.vercel.app/users/${usersPost._id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify({
                userEmail: user?.email
            })
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    setFavorited(true);
                    setFavoriteCount(prev => prev + 1);
                }
            })
    };

    return (
        <motion.div
            className="container mx-auto p-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
        >
            <DynamicTitle title='Details of your || RoomieConnect'></DynamicTitle>
            <div className="card shadow-xl overflow-hidden">
                <div className="md:flex">
                    {/* Left: Image */}
                    <div className="md:w-2/3 relative">
                        <img
                            src={usersPost.imageLink}
                            alt="Room"
                            className="w-full h-96 object-cover"
                        />
                        <span className="absolute top-4 left-4 bg-info text-white px-3 py-1 rounded-full text-sm animate-pulse">
                            {usersPost.availability}
                        </span>
                    </div>

                    {/* Right: Booking Info */}
                    <div className="md:w-1/3 bg-base-100 p-6 flex flex-col justify-between relative">
                        <div>
                            <h2 className="text-2xl font-bold flex items-center gap-2">
                                <MdOutlineMeetingRoom /> {usersPost.title}
                            </h2>
                            <p className="text-sm text-gray-500 mt-1">
                                <FaMapMarkerAlt className="inline mr-1" />
                                {usersPost.location}
                            </p>
                            <p className="mt-2 text-primary font-medium text-lg flex items-center gap-2">
                                <MdAttachMoney /> Rent: {usersPost.rent} BDT
                            </p>
                        </div>
                        <div className="mt-6 space-y-2">
                            <p className="flex items-center gap-2 text-sm italic font-bold">
                                <FaUserAlt /> Posted by: {usersPost.userName}
                            </p>
                            <div className="flex items-center gap-2 text-sm "
                                data-tooltip-id="fav-tool"
                                data-tooltip-content="Make it Favourite to view"
                            >
                                <FaPhoneAlt />
                                Contact: {favorited ? usersPost.contactInfo : '***********'}
                                <Tooltip id="fav-tool" />
                            </div>
                            <p className="flex items-center gap-2 text-md">
                                <TbPointerStar /> {favoriteCount} people Interested...
                            </p>
                        </div>
                        {/* Favorite Button */}
                        <div className="mt-6 flex items-center justify-between absolute right-10">
                            <div
                                className="cursor-pointer flex items-center gap-1 text-red-500 transition-all duration-300"
                                onClick={handleFavorite}
                                data-tooltip-id="fav-tooltip"
                                data-tooltip-content="Click to make Favourite"
                            >
                                {favorited ? (
                                    <FaHeart className="text-2xl hover:scale-110 transition-transform" />
                                ) : (
                                    <FaRegHeart className="text-2xl hover:scale-110 transition-transform" />
                                )}
                            </div>

                            {/* Tooltip Component */}
                            <Tooltip id="fav-tooltip" />
                        </div>
                        <button className="btn btn-info mt-6 text-white w-full">
                            Book Now
                        </button>
                    </div>
                </div>

                {/* Room Info */}
                <div className="p-6">
                    <h3 className="text-xl font-semibold mb-3">Room Details</h3>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                        <p><FaBed className="inline mr-2" /> Room Type: {usersPost.roomType}</p>
                        <p><FaUserAlt className="inline mr-2" />Maximum Guests:&nbsp;{usersPost.maxGuests ? '' : 'Call to know'}</p>
                    </div>

                    <div className="mt-6">
                        <h3 className="text-xl font-semibold text-primary flex items-center gap-2">
                            <GiLifeBar /> Lifestyle Preferences
                        </h3>
                        <ul className="list-disc list-inside ml-4 mt-2 text-sm text-gray-700">
                            {usersPost.lifestyle.map((item, idx) => (
                                <li key={idx}>{item}</li>
                            ))}
                        </ul>
                    </div>

                    {/* Description */}
                    <div className="mt-6">
                        <h3 className="text-xl font-semibold mb-2">Description</h3>
                        <p className="text-gray-600 text-sm">
                            {usersPost.description}
                        </p>
                    </div>
                </div>
            </div>

            {/* Go Back Button */}
            <div className="text-left mt-6">
                <button
                    onClick={() => navigate(-1)}
                    className="btn btn-outline btn-secondary flex items-center gap-2"
                >
                    <BsArrowLeft /> Go Back
                </button>
            </div>
        </motion.div>
    );
};

export default PostDetails;