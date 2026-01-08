import React from "react";
import { useOutletContext } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import CartProduct from "../../features/Cart/CartProduct";
import styles from "./OrdersPage.module.css";

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
                <title>Your Orders | PixelTrade</title>
                <meta
                    name="description"
                    content={`List of your orders on PixelTrade. Total orders: ${orders.length}.`}
                />
                <meta property="og:title" content="Your Orders | PixelTrade" />
                <meta
                    property="og:description"
                    content={`List of your orders on PixelTrade. Total orders: ${orders.length}.`}
                />
            </Helmet>

            <main className={styles.page}>
                <h1 className={styles.title}>Your Orders</h1>

                <div className={styles.ordersList}>
                    {orders.map((order) => (
                        <div
                            key={order.orderNumber}
                            className={styles.order}
                        >
                            <div className={styles.orderHeader}>
                                <h2 className={styles.orderNumber}>
                                    Order № {order.orderNumber}
                                </h2>
                                <p className={styles.orderDate}>
                                    {order.date}
                                </p>
                            </div>

                            <div className={styles.orderItems}>
                                {order.items.map((product) => (
                                    <CartProduct
                                        key={product.cartItemId}
                                        product={product}
                                    />
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </main>
        </>
    );
}

export default OrdersPage;
