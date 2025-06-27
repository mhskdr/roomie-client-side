import React, { useRef } from 'react';
import ExtraSec from '../../components/extra-1/ExtraSec';
import ExtraSecTwo from '../../components/extra-1/ExtraSecTwo';
import { useLoaderData } from 'react-router';
import HeroSection from '../../components/heroSection/heroSection';
import FeaturedPost from '../../components/featuredPost/FeaturedPost';
import DynamicTitle from '../../components/dynamicTitle/DynamicTitle';
import NewsLetter from '../../components/newsLetter/NewsLetter';

const HomePage = () => {
    const { extraCard, banner, featCard } = useLoaderData();
    const featuredRef = useRef(null);
    return (
        <div>
            <DynamicTitle title='RoomieConnect || Your Search Mate'></DynamicTitle>
            <HeroSection banner={banner} scrollToRef={featuredRef}></HeroSection>
            <div ref={featuredRef}>
                <FeaturedPost featData={featCard}></FeaturedPost>
            </div>
            <ExtraSec></ExtraSec>
            <ExtraSecTwo cardData={extraCard}></ExtraSecTwo>
            <NewsLetter></NewsLetter>
        </div>
    );
};

export default HomePage;