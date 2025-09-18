import {BrowserRouter as Router, Route, Routes, Outlet} from "react-router-dom";
import Header from "./components/Layout/Header.jsx";
import Home from "./pages/Home";
import PageNotFound from "./pages/PageNotFound.jsx";
import AboutUs from "./pages/AboutUs.jsx";
import Contacts from "./pages/Contacts.jsx";
import Recipes from "./pages/Recipes.jsx";
import Layout from "./components/Layout/Layout.jsx";
import Catalog from "./pages/Catalog.jsx";
import Product from "./pages/Product.jsx";
import Basket from "./pages/Basket.jsx";
import Order from "./pages/Order.jsx";
import PaymentSuccess from "./pages/PaymentSuccess.jsx";

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Layout/>}>
                    <Route index element={<Home/>}/>
                    <Route path={"/о-нас"} element={<AboutUs/>}/>
                    <Route path={"/контакты"} element={<Contacts/>}/>
                    <Route path={"/рецепты"} element={<Recipes/>}/>
                    <Route path={"/каталог"} element={<Catalog/>}/>
                    <Route path="/каталог/:productId" element={<Product/>}/>
                    <Route path="/корзина" element={<Basket/>}/>
                    <Route path="/оформление-заказа" element={<Order/>}/>
                    <Route path="/payment-success" element={<PaymentSuccess/>}/>
                    <Route path="*" element={<PageNotFound/>}/>
                </Route>
            </Routes>
        </Router>
    );
}

export default App;