import React from 'react';
import { createBrowserRouter } from "react-router";
import RootPage from '../pages/rootPage/RootPage';
import HomePage from '../pages/home/HomePage';
import Error404 from '../pages/404/Error404';
import TermsAndCondition from '../pages/extraPages/TermsAndCondition';
import PrivacyPolicy from '../pages/extraPages/PrivacyPolicy';
import Contact from '../pages/extraPages/contacts/Contact';
import Login from '../pages/login/Login';
import SignIn from '../pages/signIn/SignIn';
import ForgetPassword from '../pages/forgetPassword/ForgetPassword';
import Profile from '../pages/profile/Profile';
import PrivateRoutes from './PrivateRoutes';
import ListingPage from '../pages/listingPage/ListingPage';
import PostDetails from '../pages/postDetails/PostDetails';
import BrowseListed from '../pages/listedPost/BrowseListed';
import MyListings from '../pages/myListing/MyListings';
import UpdatePost from '../pages/updatePost/UpdatePost';
import Loading from '../components/loading/Loading';
import Dashboard from '../pages/dashboard/Dashboard';
import DashLand from '../pages/dashboard/DashLand';
import Blog from '../pages/blog/Blog';
import BlogDetails from '../pages/blog/BlogDetails';

const Routes = createBrowserRouter([
    {
        path: "/",
        Component: RootPage,
        children: [
            {
                index: true,
                element: <HomePage></HomePage>,
                loader: async () => {
                    const [extraCardRes, bannerRes, featCardRes] = await Promise.all([
                        fetch('https://back-end-alpha-bay.vercel.app/extraCard'),
                        fetch('https://back-end-alpha-bay.vercel.app/banner'),
                        fetch('https://back-end-alpha-bay.vercel.app/users')
                    ]);

                    const extraCard = await extraCardRes.json();
                    const banner = await bannerRes.json();
                    const featCard = await featCardRes.json();

                    return { extraCard, banner, featCard };
                },
                hydrateFallbackElement: <Loading></Loading>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/signin',
                element: <SignIn></SignIn>
            },
            {
                path: '/browse',
                element: <BrowseListed></BrowseListed>,
                loader: () => fetch('https://back-end-alpha-bay.vercel.app/users'),
                hydrateFallbackElement: <Loading></Loading>
            },
            // {
            //     path: '/mypost',
            //     element: <PrivateRoutes>
            //         <MyListings></MyListings>
            //     </PrivateRoutes>,
            //     loader: () => fetch('https://back-end-alpha-bay.vercel.app/users'),
            //     hydrateFallbackElement: <Loading></Loading>
            // },
            {
                path: '/update/:id',
                element: <PrivateRoutes>
                    <UpdatePost></UpdatePost>
                </PrivateRoutes>,
                loader: ({ params }) => fetch(`https://back-end-alpha-bay.vercel.app/users/${params.id}`),
                hydrateFallbackElement: <Loading></Loading>
            },
            // {
            //     path: '/profile',
            //     element: <PrivateRoutes>
            //         <Profile></Profile>
            //     </PrivateRoutes>
            // },
            {
                path: '/dashboard',
                element: (
                    <PrivateRoutes>
                        <Dashboard />
                    </PrivateRoutes>
                ),
                children: [
                    { index: true, element: <DashLand></DashLand> },
                    {
                        path: 'mypost',
                        element: <PrivateRoutes><MyListings /></PrivateRoutes>,
                        loader: () => fetch('https://back-end-alpha-bay.vercel.app/users'),
                        hydrateFallbackElement: <Loading />
                    },
                    {
                        path: 'profile',
                        element: <PrivateRoutes><Profile /></PrivateRoutes>
                    },
                    {
                        path: 'post',
                        element: <PrivateRoutes>
                            <ListingPage></ListingPage>
                        </PrivateRoutes>
                    },
                ],
            },
            {
                path: '/post',
                element: <PrivateRoutes>
                    <ListingPage></ListingPage>
                </PrivateRoutes>
            },
            {
                path: '/postdetails/:id',
                element: <PrivateRoutes>
                    <PostDetails></PostDetails>
                </PrivateRoutes>,
                loader: ({ params }) => fetch(`https://back-end-alpha-bay.vercel.app/users/${params.id}`),
                hydrateFallbackElement: <Loading></Loading>

            },
            {
                path: '/forgotpassword',
                element: <ForgetPassword></ForgetPassword>
            },
            {
                path: '/contact',
                element: <Contact></Contact>
            },
            {
                path: '/blog',
                element: <Blog></Blog>
            },
            {
                path: '/blog/:id',
                element: <BlogDetails></BlogDetails>,
                loader: async () => {
                    const res = await fetch('/data.json');
                    const data = await res.json();
                    return data;
                },
                hydrateFallbackElement: <Loading></Loading>
            },
            {
                path: '/termsConditions',
                element: <TermsAndCondition></TermsAndCondition>
            },
            {
                path: '/privacyPolicy',
                element: <PrivacyPolicy></PrivacyPolicy>
            }
        ]
    },
    {
        path: "/*",
        element: <Error404></Error404>
    }
]);

export default Routes;