import React from "react";
import { useOutletContext } from "react-router-dom";
import Button from "../../ui/Button/Button";
import styles from "./ProductCard.module.css";

function ProductCard({ id, name, price, image }) {
    const { addToCart } = useOutletContext();

    return (
        <div className={styles.card}>
            <Button
                to={`/product/${id}`}
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

            <p className={styles.price}>{price}</p>

            <Button
                onClick={() => addToCart(id)}
            >
                Добавить в корзину
            </Button>
        </div>
    );
}

export default ProductCard;
