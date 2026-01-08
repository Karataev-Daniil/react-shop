import React from "react";
import { useOutletContext } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import CartProduct from "../../features/Cart/CartProduct";
import Button from "../../ui/Button/Button";
import styles from "./CartPage.module.css";

function CartPage() {
    const { cart, removeInCart, createOrder } = useOutletContext();

    return (
        <>
            <Helmet>
                <title>Корзина — Furniture Store</title>
                <meta
                    name="description"
                    content={
                        cart.length > 0
                            ? `В вашей корзине ${cart.length} товаров на сумму ${cart.reduce((sum, p) => sum + Number(p.price), 0)} $`
                            : "Ваша корзина пуста — добавьте товары для покупки."
                    }
                />
                <meta property="og:title" content="Корзина — Furniture Store" />
                <meta
                    property="og:description"
                    content={
                        cart.length > 0
                            ? `В вашей корзине ${cart.length} товаров на сумму ${cart.reduce((sum, p) => sum + Number(p.price), 0)} $`
                            : "Ваша корзина пуста — добавьте товары для покупки."
                    }
                />
                <meta property="og:image" content="/images/cart-og.png" />
            </Helmet>

            <div className={styles.page}>
                <Button to="/" variant="link" className={styles.back}>
                    ← Назад
                </Button>

                {cart.length === 0 ? (
                    <p>Корзина пуста</p>
                ) : (
                    <>
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
                    </>
                )}
            </div>
        </>
    );
}

export default CartPage;
