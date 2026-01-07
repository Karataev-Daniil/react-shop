import React from "react";
import Button from "../../ui/Button/Button";
import styles from "./Cart.module.css";

function CartProduct({ product, removeInCart }) {
    return (
        <div className={styles.cartItem}>
            <span>{product.name}</span>
            <span>{product.price} $</span>

            <Button
                onClick={() => removeInCart(product.cartItemId)}
            >
                Удалить
            </Button>
        </div>
    );
}

export default CartProduct;
