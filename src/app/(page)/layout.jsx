import Header from '@/component/Header';
import Navbar from '@/component/Navbar';
import React from 'react';

const LayoutPage = ({ children }) => {
    return (
        <div>
            <Navbar />
            <Header/>
            <br />
            {children}
        </div>
    );
};
export default LayoutPage;