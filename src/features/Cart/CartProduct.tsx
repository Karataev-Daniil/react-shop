import Button from "../../ui/Button";
import styles from "./Cart.module.css";
import type { CartItem } from "./model/types";

type CartProductProps = {
    product : CartItem
    removeInCart : (id: string) => void
    showRemove? : boolean
}

function CartProduct({ product, removeInCart, showRemove = true } : CartProductProps) {
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
