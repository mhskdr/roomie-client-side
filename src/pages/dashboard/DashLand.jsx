import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../provider/AuthContext';

const DashLand = () => {
    const [myPosts, setMyPosts] = useState([]);
    const { user } = useContext(AuthContext);
    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const res = await fetch(`https://back-end-alpha-bay.vercel.app/filterusers?email=${encodeURIComponent(user.email)}`);
                const data = await res.json();
                setMyPosts(data);
            } catch (error) {
                console.error('Error loading posts:', error);
            }
        };

        if (user?.email) {
            fetchPosts();
        }
    }, [user?.email]);

    return (
        <div className="p-6">
            {/* Welcome Section */}
            <div className="flex items-center justify-between flex-wrap gap-4 mb-6">
                <div>
                    <h2 className="text-3xl font-bold">
                        Welcome back, {user?.displayName || "User"} 👋
                    </h2>
                    <p className="text-gray-600 dark:text-gray-400">
                        Here’s a quick look at your activity.
                    </p>
                </div>
                {user?.photoURL && (
                    <img
                        src={user.photoURL}
                        alt="User Avatar"
                        className="w-16 h-16 rounded-full border-2 border-primary object-cover"
                    />
                )}
            </div>

            {/* Stats Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                <div className="bg-white dark:bg-base-200 p-6 rounded-xl shadow-md border border-gray-200 dark:border-gray-700">
                    <h3 className="text-sm">My Listings</h3>
                    <p className="text-3xl font-bold text-primary mt-1">{myPosts.length}</p>
                </div>

                <div className="bg-white dark:bg-base-200 p-6 rounded-xl shadow-md border border-gray-200 dark:border-gray-700">
                    <h3 className="text-sm">Last SignIn Date</h3>
                    <p className="text-md mt-1">
                        {user?.metadata?.lastSignInTime
                            ? new Date(user.metadata.lastSignInTime).toLocaleDateString()
                            : "N/A"}
                    </p>
                </div>

                <div className="bg-white dark:bg-base-200 p-6 rounded-xl shadow-md border border-gray-200 dark:border-gray-700">
                    <h3 className="text-sm">Account Created</h3>
                    <p className="text-md mt-1">
                        {user?.metadata?.creationTime
                            ? new Date(user.metadata.creationTime).toLocaleDateString()
                            : "N/A"}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default DashLand;
