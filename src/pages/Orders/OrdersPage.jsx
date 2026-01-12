import React from "react";
import { useOutletContext } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import styles from "./OrdersPage.module.css";
import OrderItem from "../../features/order/OrderItem";

function OrdersPage() {
    const { orders } = useOutletContext();

    if (!orders || orders.length === 0) {
        return (
            <>
                <Helmet>
                    <title>Your Orders | PixelTrade</title>
                    <meta
                        name="description"
                        content="You have no orders yet on PixelTrade. Place your first order and get quality furniture for home and office."
                    />
                    <meta property="og:title" content="Your Orders | PixelTrade" />
                    <meta
                        property="og:description"
                        content="You have no orders yet on PixelTrade. Place your first order and get quality furniture."
                    />
                </Helmet>

                <p className={styles.noOrders}>You have no orders yet.</p>
            </>
        );
    }

    return (
        <>
            <Helmet>
                <title>Your Orders | Furniture Store</title>
                <meta
                    name="description"
                    content={`List of your orders on Furniture Store. Total orders: ${orders.length}.`}
                />
                <meta property="og:title" content="Your Orders | Furniture Store" />
                <meta
                    property="og:description"
                    content={`List of your orders on Furniture Store. Total orders: ${orders.length}.`}
                />
            </Helmet>

            <main className={styles.page}>
                <h1 className={styles.title}>Your Orders</h1>

                <div className={styles.ordersList}>
                    {orders.map((order) => (
                        <OrderItem
                            key={order.orderNumber}
                            order={order}
                        />
                    ))}
                </div>
            </main>
        </>
    );
}

export default OrdersPage;
