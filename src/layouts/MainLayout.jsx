import React, { useState, useEffect } from "react";
import { Outlet, useLocation, useNavigate } from "react-router-dom";

import localforage from "localforage";
import { nanoid } from "nanoid";

import products from "../data/products";

import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import CartPanel from "../features/Cart/CartPanel";

import "../reset.css";
import "../styles/global.css";

localforage.config({
    name: "shop-app",
    storeName: "cart",
});

function useLocalForage(key, initialValue) {
    const [state, setState] = useState(initialValue);

    useEffect(() => {
        async function load() {
            const saved = await localforage.getItem(key);
            if (saved) setState(saved);
        }
        load();
    }, [key]);

    useEffect(() => {
        localforage.setItem(key, state);
    }, [key, state]);

    return [state, setState];
}

function MainLayout() {
    const [cart, setCart] = useLocalForage("cart", []);
    const [orders, setOrders] = useLocalForage("orders", []);
    const [lastOrder, setLastOrder] = useState(null);
    const [showPopup, setShowPopup] = useState(false);

    const location = useLocation();
    const navigate = useNavigate();
    const isCartPage = location.pathname === "/cart";

    const addToCart = (id) => {
        const product = products.find(p => p.id === id);
        if (!product) return;
        setCart(prev => [...prev, { ...product, cartItemId: nanoid() }]);
    };

    const removeInCart = (cartItemId) =>
        setCart(prev => prev.filter(p => p.cartItemId !== cartItemId));

    const createOrder = (cart) => {
        if (!cart.length) return;

        const newOrder = {
            orderNumber: nanoid(),
            items: cart,
            date: new Date().toISOString(),
            status: "pending",
        };

        setOrders(prev => [...prev, newOrder]);
        setLastOrder(newOrder);
        setCart([]);
        setShowPopup(true);
        navigate("/");
    };

    return (
        <>
            <Header />

            {!isCartPage && <CartPanel cart={cart} removeInCart={removeInCart} />}

            {showPopup && lastOrder && (
                <div className="popup">
                    <div className="popupContent">
                        <h3>Order Placed!</h3>
                        <p>Thank you for your purchase. Your order № {lastOrder.orderNumber}</p>
                        <button onClick={() => setShowPopup(false)}>Close</button>
                    </div>
                </div>
            )}

            <main>
                <div className="container">
                    <Outlet context={{ cart, addToCart, removeInCart, orders, createOrder }} />
                </div>
            </main>

            <Footer />
        </>
    );
}

export default MainLayout;
