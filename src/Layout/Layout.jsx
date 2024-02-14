import { createContext, useState } from "react";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import { Outlet, useLoaderData } from "react-router-dom";
export const BookContext=createContext([])
export const UserContext=createContext([])

const Layout = () => {
    const books=useLoaderData();
    const [user,setUser]=useState(null);

    return (
        <UserContext.Provider value={[user,setUser]}>
        <BookContext.Provider value={books}>
            <Header/>
            <Outlet />
            <Footer/>
        </BookContext.Provider>
        </UserContext.Provider>
    );
};

export default Layout;