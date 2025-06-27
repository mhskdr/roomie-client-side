import React from 'react';
import { Link } from 'react-router';
import { Tooltip } from 'react-tooltip';
import 'react-tooltip/dist/react-tooltip.css';

const FeatureCard = ({ featured }) => {
    return (
        <div className="shadow-lg rounded-2xl overflow-hidden transform transition duration-300 hover:scale-105 hover:shadow-2xl group relative">
            <div className="overflow-hidden">
                <img
                    src={featured.imageLink}
                    alt="User room"
                    className="w-full h-56 object-cover group-hover:scale-110 transition-transform duration-500"
                />
            </div>
            <div className="p-6 space-y-3">
                <h2 className="text-2xl font-bold text-primary group-hover:text-accent transition-colors duration-300 min-h-[3.5rem]">
                    {featured.title}
                </h2>
                <p className="text-sm text-gray-600 line-clamp-3 min-h-[4.5rem]">
                    {featured.description}
                </p>
                <div className="pt-3 flex items-center justify-between mt-auto">
                    <Link to={`/postdetails/${featured._id}`}>
                        <button
                            className="btn bg-gradient-to-r from-primary to-accent text-white rounded-full px-6 py-2 hover:scale-105 transition-transform"
                        >
                            View Details
                        </button>
                    </Link>
                    <span
                        data-tooltip-id={`availability-${featured._id}`}
                        className="text-xs text-gray-500 underline cursor-pointer"
                    >
                        Availability?
                    </span>
                    <Tooltip
                        id={`availability-${featured._id}`}
                        place="top"
                        content={`😊 ${featured.availability || 'Unknown'}`}
                    />
                </div>
            </div>
        </div>
    );
};

export default FeatureCard;