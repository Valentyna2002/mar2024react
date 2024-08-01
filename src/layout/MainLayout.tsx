import React from 'react';
import {Outlet} from "react-router-dom";
import FooterComponent from "../component/FooterComponent";
import HeaderComponent from "../component/HeaderComponent";

const MainLayout = () => {
    return (
        <div>
            <HeaderComponent/>
            <Outlet/>
            <FooterComponent/>
        </div>
    );
};

export default MainLayout;