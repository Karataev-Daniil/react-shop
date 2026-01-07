import React from "react";
import { useLoaderData } from "react-router-dom";
import products from "../../data/products";

import Button from "../../ui/Button/Button";
import styles from "./ProductPage.module.css";

export async function loader({ params }) {
    const product = products.find(p => p.id === Number(params.id));
    return { product };
}

function ProductPage() {
    const { product } = useLoaderData();

    if (!product) {
        return <p className={styles.notFound}>Product not found</p>;
    }

    return (
        <div className={styles.page}>
            <Button
                to="/"
                variant="link"
                className={styles.back}
            >
                ← Назад
            </Button>

            <div className={styles.card}>
                <img
                    src={product.image}
                    alt={product.name}
                    className={styles.image}
                />

                <div className={styles.info}>
                    <h1 className={styles.name}>{product.name}</h1>
                    <p className={styles.price}>{product.price} ₽</p>

                    <div className={styles.meta}>
                        <span>{product.categories.join(", ")}</span>
                        <span>{product.tags.join(", ")}</span>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default ProductPage;
