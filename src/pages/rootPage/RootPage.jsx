import React from 'react';
import Navbar from '../../components/navbar/Navbar';
import { Outlet, useNavigation } from 'react-router';
import Footer from '../../components/footer/Footer';
import Loading from '../../components/loading/Loading';

const RootPage = () => {
    const navigation = useNavigation();
    return (
        <div>
            <Navbar></Navbar>
            {navigation.state === 'loading' && <Loading />}
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default RootPage;