import {BrowserRouter as Router, Route, Routes, Outlet} from "react-router-dom";
import Header from "./components/Layout/Header.jsx";
import Home from "./pages/Home";
import PageNotFound from "./pages/PageNotFound.jsx";
import AboutUs from "./pages/AboutUs.jsx";
import Contacts from "./pages/Contacts.jsx";
import Recipes from "./pages/Recipes.jsx";
import Layout from "./components/Layout/Layout.jsx";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Layout/>}>
                    <Route index element={<Home/>}/>
                    <Route path={"/о-нас"} element={<AboutUs/>}/>
                    <Route path={"/контакты"} element={<Contacts/>}/>
                    <Route path={"/рецепты"} element={<Recipes/>}/>
                    <Route path="*" element={<PageNotFound />} />
                </Route>
            </Routes>
        </Router>
    );
}

export default App;