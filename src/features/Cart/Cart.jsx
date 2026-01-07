import React from "react";
import styles from "./Cart.module.css";
import CartProduct from "./CartProduct";

function Cart({ cart, removeInCart }) {
    if (cart.length === 0) {
        return <p className={styles.empty}>Корзина пуста</p>;
    }
    
    return (
        <div 
            className={styles.cartList}
        >
            {cart.map(p => (
                <CartProduct
                    key={p.cartItemId}
                    product={p}
                    removeInCart={removeInCart}
                />
            ))}
        </div>
    );
}

export default Cart;
