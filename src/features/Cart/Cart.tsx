import CartProduct from "./CartProduct";
import styles from "./Cart.module.css";
import type { CartItem } from "./model/types";

type CartProps = {
    cart : CartItem[]
    removeInCart : (id: string) => void
}

function Cart({ cart, removeInCart }: CartProps) {
    if (cart.length === 0) {
        return <p className={styles.empty}>Your cart is empty</p>;
    }

    return (
        <div className={styles.cartListWrapper}>
            <div className={styles.cartList}>
                {cart.map((product) => (
                    <CartProduct
                        key={product.cartItemId}
                        product={product}
                        removeInCart={removeInCart}
                    />
                ))}
            </div>
        </div>
    );
}

export default Cart;
