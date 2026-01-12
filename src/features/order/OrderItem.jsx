import { useState } from "react";
import CartProduct from "../Cart/CartProduct";
import styles from "./OrderItem.module.css";
import Button from "../../ui/Button/Button";

function OrderItem({ order }) {
    const [isOpen, setIsOpen] = useState(false);

    function toggleItems() {
        setIsOpen(prev => !prev);
    }

    return (
        <div className={styles.order}>
            <div className={styles.orderHeader}>
                <h2 className={styles.orderNumber}>
                    <b>Order №</b> {order.orderNumber}
                </h2>

                <p className={styles.orderDate}>
                    {new Date(order.date).toLocaleString("ru-RU", {
                        day: "2-digit",
                        month: "2-digit",
                        year: "numeric",
                        hour: "2-digit",
                        minute: "2-digit",
                    })}
                </p>

                <Button
                    className={styles.orderShowItems}
                    onClick={toggleItems}
                >
                    {isOpen ? "закрыть" : "открыть"}
                </Button>
            </div>

            <div className={`${styles.orderItems} ${isOpen ? styles.open : ""}`}>
                {order.items.map(product => (
                    <CartProduct
                        key={product.cartItemId}
                        product={product}
                        showRemove={false}
                    />
                ))}
            </div>
        </div>
    );
}


export default OrderItem;
