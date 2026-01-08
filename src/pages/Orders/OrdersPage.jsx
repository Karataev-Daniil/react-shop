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
                    <title>Ваши заказы | PixelTrade</title>
                    <meta
                        name="description"
                        content="У вас пока нет заказов на PixelTrade. Оформите первый заказ и получите качественную мебель для дома и офиса."
                    />
                    <meta property="og:title" content="Ваши заказы | PixelTrade" />
                    <meta
                        property="og:description"
                        content="У вас пока нет заказов на PixelTrade. Оформите первый заказ и получите качественную мебель."
                    />
                </Helmet>

                <p className={styles.noOrders}>У вас пока нет заказов.</p>
            </>
        );
    }

    return (
        <>
            <Helmet>
                <title>Ваши заказы | PixelTrade</title>
                <meta
                    name="description"
                    content={`Список ваших заказов на PixelTrade. Всего заказов: ${orders.length}.`}
                />
                <meta property="og:title" content="Ваши заказы | PixelTrade" />
                <meta
                    property="og:description"
                    content={`Список ваших заказов на PixelTrade. Всего заказов: ${orders.length}.`}
                />
            </Helmet>

            <main className={styles.page}>
                <h1 className={styles.title}>Ваши заказы</h1>

                <div className={styles.ordersList}>
                    {orders.map((order) => (
                        <div
                            key={order.orderNumber}
                            className={styles.order}
                        >
                            <div className={styles.orderHeader}>
                                <h2 className={styles.orderNumber}>
                                    Заказ № {order.orderNumber}
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
