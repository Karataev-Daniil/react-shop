import React, { useState } from "react";
import Cart from "./Cart";
import Button from "../../ui/Button/Button";
import styles from "./Cart.module.css";

function CartPanel({ cart, removeInCart }) {
    const [stateCart, setStateCart] = useState("closed");

    return (
        <div
            className={`${styles.cartWrapper} ${
                stateCart === "open" ? styles.open : styles.closed
            }`}
        >
            {stateCart === "open" && (
                <Button
                    onClick={() => setStateCart("closed")}
                    variant="unstyled"
                    className={styles.closeBtn}
                >
                    ×
                </Button>
            )}

            <Cart cart={cart} removeInCart={removeInCart} />

            {stateCart === "closed" ? (
                <Button
                    onClick={() => setStateCart("open")}
                    variant="secondary"
                    className={styles.cartToggle}
                >
                    Открыть корзину ({cart.length === 0 ? "пуста" : cart.length})
                </Button>
            ) : (
                <Button
                    to="/cart"
                    variant="secondary"
                    className={styles.cartToggle}
                >
                    Корзина ({cart.length === 0 ? "пуста" : cart.length})
                </Button>
            )}
        </div>
    );
}

export default CartPanel;
