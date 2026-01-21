import React from "react";
import Button from "../../ui/Button";
import styles from "./Cart.module.css";

function CartProduct({ product, removeInCart, showRemove = true }) {
    return (
        <div className={styles.cartItem}>
            <span className={styles.cartItemName}>{product.name}</span>
            <span className={styles.cartItemPrice}>{product.price} $</span>

            {showRemove && (
                <Button
                    onClick={() => removeInCart(product.cartItemId)}
                    variant="secondary"
                    className={styles.removeBtn}
                >
                    Remove
                </Button>
            )}
        </div>
    );
}


export default CartProduct;
