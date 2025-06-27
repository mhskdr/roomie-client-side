import React from 'react';
import SecTwoComp from './SecTwoComp';

const ExtraSecTwo = ({ cardData }) => {
    return (
        <div className="bg-base-200 pb-4">
            <div className="max-w-6xl mx-auto text-center mb-4">
                <h2 className="text-3xl font-bold text-primary">Discover the Cities</h2>
                <div className='border-t-8 border-accent my-6 w-[40px] mx-auto'></div>
                <p className="text-sm text-base-content mt-2">
                    We are in TOP Cities you LOVE to Visit ...
                </p>
            </div>

            {/* Grid Container */}
            <div className='max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8'>
                {
                    cardData.map(card => (
                        <SecTwoComp key={card._id} data={card} />
                    ))
                }
            </div>
        </div>
    );
};

export default ExtraSecTwo;