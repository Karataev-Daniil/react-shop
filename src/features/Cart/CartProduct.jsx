import React from "react";
import Button from "../../ui/Button/Button";
import styles from "./Cart.module.css";

function CartProduct({ product, removeInCart }) {
    return (
        <div className={styles.cartItem}>
            <span className={styles.cartItemName}>{product.name}</span>
            <span className={styles.cartItemPrice}>{product.price} $</span>
            <Button
                onClick={() => removeInCart(product.cartItemId)}
                variant="secondary"
                className={styles.removeBtn}
            >
                Удалить
            </Button>
        </div>
    );
}

export default CartProduct;
