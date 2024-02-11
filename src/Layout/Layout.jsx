import { createContext } from "react";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import { Outlet, useLoaderData } from "react-router-dom";
export const BookContext=createContext([])


const Layout = () => {
    const books=useLoaderData();
    return (
        <BookContext.Provider value={books}>
            <Header/>
            <Outlet />
            <Footer/>
        </BookContext.Provider>
    );
};

export default Layout;