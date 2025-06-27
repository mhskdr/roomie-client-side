import React, { useContext, useState } from 'react';
import Swal from 'sweetalert2';
import { AuthContext } from '../../provider/AuthContext';
import DynamicTitle from '../../components/dynamicTitle/DynamicTitle';


const Profile = () => {
    const { user, updateUser, loading, setLoading } = useContext(AuthContext);
    const [name, setName] = useState(user?.displayName || '');
    const [photoURL, setPhotoURL] = useState(user?.photoURL || '');
    const [isEditing, setIsEditing] = useState(false);

    const handleUpdate = () => {
        setLoading(true);
        updateUser({ displayName: name, photoURL })
            .then(() => {
                Swal.fire({ title: 'Success!', text: 'Profile updated successfully', icon: 'success' });
                setIsEditing(false);
            })
            .catch((error) => {
                console.error('Error updating profile:', error);
                Swal.fire({ title: 'Error!', text: 'Failed to update profile', icon: 'error' });
            })
            .finally(() => {
                setLoading(false);
            });
    };

    return (
        <div>
            <DynamicTitle title="Profile | surveyWALA" />
            <div className="min-h-screen flex items-center justify-center">
                <div className="p-6 rounded-lg shadow-lg w-full max-w-md">
                    <h2 className="text-xl font-bold mb-4">User Profile</h2>

                    <div className="flex items-center mb-4">
                        <img src={user?.photoURL || 'https://img.icons8.com/ios-filled/50/user-male-circle.png'}
                            alt="Profile"
                            className="w-16 h-16 rounded-full mr-4" />
                        <div>
                            <h3 className="text-lg font-semibold">Name:&nbsp;&nbsp;{user?.displayName}</h3>
                            <p className="text-gray-600">Email:&nbsp;&nbsp;{user?.email}</p>
                        </div>
                    </div>

                    {isEditing ? (
                        <>
                            <div className="mb-4">
                                <label className="block text-sm font-medium mb-1">Name:</label>
                                <input
                                    type="text"
                                    value={name}
                                    onChange={(e) => setName(e.target.value)}
                                    className="w-full p-2 border rounded"
                                />
                            </div>
                            <div className="mb-4">
                                <label className="block text-sm font-medium mb-1">Photo URL:</label>
                                <input
                                    type="text"
                                    value={photoURL}
                                    onChange={(e) => setPhotoURL(e.target.value)}
                                    className="w-full p-2 border rounded"
                                />
                            </div>
                            <div className="flex justify-end gap-2">
                                <button
                                    onClick={() => setIsEditing(false)}
                                    className="bg-gray-500 hover:bg-gray-600 text-white px-4 py-2 rounded"
                                >
                                    Cancel
                                </button>
                                <button
                                    onClick={handleUpdate}
                                    disabled={loading}
                                    className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded"
                                >
                                    {loading ? 'Updating...' : 'Save Changes'}
                                </button>
                            </div>
                        </>
                    ) : (
                        <button
                            onClick={() => setIsEditing(true)}
                            className="bg-blue-500 hover:bg-blue-600 text-white px-4 py-2 rounded w-full"
                        >
                            Edit Profile
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Profile;