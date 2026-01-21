import { useState } from "react";
import Cart from "./Cart";
import Button from "../../ui/Button";
import styles from "./Cart.module.css";
import type { CartItem } from "./model/types";

type CartState = "open" | "closed";

type CartPanelProps = {
    cart : CartItem[]
    removeInCart : (id: string) => void
}

function CartPanel({ cart, removeInCart } : CartPanelProps) {
    const [stateCart, setStateCart] = useState<CartState>("closed");

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
                    Open Cart ({cart.length === 0 ? "empty" : cart.length})
                </Button>
            ) : (
                <Button
                    to="/cart"
                    variant="secondary"
                    className={styles.cartToggle}
                >
                    Cart ({cart.length === 0 ? "empty" : cart.length})
                </Button>
            )}
        </div>
    );
}

export default CartPanel;
