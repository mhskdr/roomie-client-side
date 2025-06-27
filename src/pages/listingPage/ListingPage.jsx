import React, { use } from 'react';
import DynamicTitle from '../../components/dynamicTitle/DynamicTitle';
import { AuthContext } from '../../provider/AuthContext';
import PostForMate from '../../components/roomMateListing/PostForMate';

const ListingPage = () => {
    const { user } = use(AuthContext);
    const users = {
        name: user?.displayName,
        email: user?.email,
    };
    return (
        <div>
            <DynamicTitle title="Post for find the RoomMate" />
            <PostForMate users={users} ></PostForMate>
        </div>
    );
};

export default ListingPage;