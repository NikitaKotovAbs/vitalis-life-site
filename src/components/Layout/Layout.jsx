import Header from "./Header.jsx";
import {Outlet} from "react-router-dom";
import Footer from "./Footer.jsx";

const Layout = () => {
    return (
        <div className="min-h-screen flex flex-col">
            <Header/>
            <main className="flex-grow ">
                <Outlet/>
            </main>
            <Footer/>
        </div>
    );
};

export default Layout