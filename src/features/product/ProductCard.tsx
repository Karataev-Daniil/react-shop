import { useOutletContext } from "react-router-dom";
import Button from "../../ui/Button";
import styles from "./ProductCard.module.css";
import type { ProductItem, CartOutletContext } from "./model/types";

function ProductCard({ id, name, price, image, categories }: ProductItem) {
    const { addToCart } = useOutletContext<CartOutletContext>();

    const category = categories[0];

    return (
        <div className={styles.card}>
            <Button
                to={`/catalog/${category}/${id}`}
                variant="unstyled"
            >
                {image && (
                    <img
                        src={image}
                        alt={name}
                        className={styles.image}
                    />
                )}

                <h3 className={styles.name}>{name}</h3>
            </Button>

            <p className={styles.price}>{price} $</p>

            <Button onClick={() => addToCart(id)}>
                Add to Cart
            </Button>
        </div>
    );
}

export default ProductCard;
