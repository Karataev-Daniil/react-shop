import React from "react";
import { useOutletContext } from "react-router-dom";
import CartProduct from "../../features/Cart/CartProduct";
import styles from "./OrdersPage.module.css";

function OrdersPage() {
    const { orders } = useOutletContext();

    if (!orders || orders.length === 0) {
        return <p className={styles.noOrders}>У вас пока нет заказов.</p>;
    }

    return (
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
    );
}

export default OrdersPage;
