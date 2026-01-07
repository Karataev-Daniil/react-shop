import React from "react";
import { useOutletContext } from "react-router-dom";
import CartProduct from "../../features/Cart/CartProduct";
import Button from "../../ui/Button/Button";
import styles from "./CartPage.module.css";

function CartPage() {
    const { cart, removeInCart, createOrder } = useOutletContext();

    if (!cart || cart.length === 0) {
        return (
            <div className={styles.page}>
                <Button to="/" variant="link" className={styles.back}>
                    ← Назад
                </Button>
                <p>Корзина пуста</p>
            </div>
        );
    }

    return (
        <div className={styles.page}>
            <Button to="/" variant="link" className={styles.back}>
                ← Назад
            </Button>

            <h1>Корзина</h1>

            <p className={styles.count}>
                Товаров в корзине: {cart.length}
            </p>

            <div className={styles.cartList}>
                {cart.map((product) => (
                    
                    <CartProduct
                        key={product.cartItemId}
                        product={product}
                        removeInCart={removeInCart}
                    />
                ))}
            </div>

            <div className={styles.summary}>
                <div className={styles.summaryInfo}>
                    <span className={styles.totalLabel}>---------------------</span>
                    <span className={styles.totalLabel}>Итого</span>
                    <span className={styles.totalPrice}>
                        {cart.reduce((sum, p) => sum + Number(p.price), 0)} $

                    </span>
                </div>
                        
                <Button 
                    className={styles.checkout}
                    onClick={() => createOrder(cart)}
                >
                    Оформить заказ
                </Button>
            </div>
        </div>
    );
}

export default CartPage;
