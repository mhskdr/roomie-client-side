import React from 'react';
import Lottie from "lottie-react";
import loadingAnimation from "../../assets/loading.json";

const Loading = () => {
    return (
        <div className="flex items-center justify-center h-screen bg-base-100 text-base-content">
            <div className="flex flex-col items-center space-y-4">
                {/* Lottie Spinner */}
                <div className="w-40 h-40">
                    <Lottie animationData={loadingAnimation} loop={true} />
                </div>
            </div>
        </div>
    );
};

export default Loading;