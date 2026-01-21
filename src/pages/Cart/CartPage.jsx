import React from "react";
import { useOutletContext } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import CartProduct from "../../features/Cart/CartProduct";
import Button from "../../ui/Button";
import styles from "./CartPage.module.css";

function CartPage() {
    const { cart, removeInCart, createOrder } = useOutletContext();

    const totalPrice = cart.reduce((sum, p) => sum + Number(p.price), 0);

    return (
        <>
            <Helmet>
                <title>Cart — Furniture Store</title>
                <meta
                    name="description"
                    content={
                        cart.length > 0
                            ? `You have ${cart.length} items in your cart totaling ${totalPrice} $`
                            : "Your cart is empty — add items to purchase."
                    }
                />
                <meta property="og:title" content="Cart — Furniture Store" />
                <meta
                    property="og:description"
                    content={
                        cart.length > 0
                            ? `You have ${cart.length} items in your cart totaling ${totalPrice} $`
                            : "Your cart is empty — add items to purchase."
                    }
                />
                <meta property="og:image" content="/images/cart-og.png" />
            </Helmet>

            <div className={styles.page}>
                <Button to="/" variant="link" className={styles.back}>
                    ← Back
                </Button>

                {cart.length === 0 ? (
                    <p>Your cart is empty</p>
                ) : (
                    <>
                        <h1>Cart</h1>

                        <p className={styles.count}>
                            Items in cart: {cart.length}
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
                                <span className={styles.totalLabel}>Total</span>
                                <span className={styles.totalPrice}>
                                    {totalPrice} $
                                </span>
                            </div>
                            
                            <Button 
                                className={styles.checkout}
                                onClick={() => createOrder(cart)}
                            >
                                Place Order
                            </Button>
                        </div>
                    </>
                )}
            </div>
        </>
    );
}

export default CartPage;
