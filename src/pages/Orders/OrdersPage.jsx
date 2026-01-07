import React from "react";
import { useOutletContext } from "react-router-dom";
import CartProduct from "../../features/Cart/CartProduct";
import Button from "../../ui/Button/Button";
import styles from "./OrdersPage.module.css";

function OrdersPage() {
    const { orders } = useOutletContext();

    return (
        <div className={styles.page}>
            <h2>Заказы</h2>

            {orders.map((order) => (
                <div
                    key={order.orderNumber}
                    className={styles.order}
                >
                    <h3>Заказ № {order.orderNumber}</h3>

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
    );
}

export default OrdersPage;
