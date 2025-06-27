import React from 'react';
import FeatureCard from './FeatureCard';
import { Link } from 'react-router';

const FeaturedPost = ({ featData }) => {
    return (
        <div className="bg-base-200 pt-16">
            <div className="max-w-6xl mx-auto text-center mb-4">
                <h2 className="text-3xl font-bold text-primary">Latest Top Post</h2>
                <div className='border-t-8 border-accent my-6 w-[40px] mx-auto'></div>
            </div>
            {/* grid post */}
            <div className='max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 items-stretch'>
                {
                    featData.slice(0, 6).map(featured => <FeatureCard key={featured._id} featured={featured}></FeatureCard>)
                }
            </div>
            <div className='mt-4 flex justify-center'>
                <Link to='/browse'>
                    <button className="btn btn-outline btn-secondary flex items-center">
                        Explore more...
                    </button>
                </Link>
            </div>
        </div>
    );
};

export default FeaturedPost;