import React from "react";
import { useLoaderData, useOutletContext } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import products from "../../data/products";

import Breadcrumbs from "../../components/Breadcrumbs/Breadcrumbs";
import Button from "../../ui/Button/Button";
import styles from "./ProductPage.module.css";

export async function loader({ params }) {
    const { id, category } = params;

    const product = products.find(
        (p) =>
            p.id === Number(id) &&
            p.categories.includes(category)
    );

    return { product };
}

function ProductPage() {
    const { addToCart } = useOutletContext();
    const { product } = useLoaderData();

    if (!product) {
        return <p className={styles.notFound}>Product not found</p>;
    }

    const breadcrumbs = [
        { label: "Главная", to: "/" },
        { label: product.categories[0], to: `/catalog/${product.categories[0]}` },
        { label: product.name },
    ];

    return (
        <>
            <Helmet>
                <title>{product.name} | Furniture Store</title>
                <meta
                    name="description"
                    content={`Купить ${product.name} из категории ${product.categories[0]} по цене ${product.price} ₽. Качественная мебель для дома и офиса.`}
                />
                <meta property="og:title" content={product.name} />
                <meta property="og:description" content={`Купить ${product.name} из категории ${product.categories[0]}`} />
                <meta property="og:type" content="product" />
                <meta property="og:image" content={product.image} />
            </Helmet>

            <div className={styles.page}>
                <Button
                    to="/"
                    variant="link"
                    className={styles.back}
                >
                    ← Назад
                </Button>

                <div className={styles.card}>
                    <div className={styles.cardHeader}>
                        <h1 className={styles.name}>{product.name}</h1>
                        <Breadcrumbs items={breadcrumbs} />
                    </div>
                    
                    <div className={styles.cardImage}>
                        <img
                            src={product.image}
                            alt={product.name}
                            className={styles.image}
                        />
                    </div>

                    <div className={styles.info}>
                        <div className={styles.purchase}>
                            <p className={styles.price}>{product.price} ₽</p>

                            <Button
                                variant="secondary"
                                onClick={() => addToCart(product.id)}
                            >
                                Добавить в корзину
                            </Button>
                        </div>

                        <div className={styles.meta}>
                            <h2>Категория:</h2>
                            {product.categories.map((c) => <span key={c}>{c}</span>)}
                        </div>
                        <div className={styles.meta}>
                            <h2>Теги:</h2>
                            {product.tags.map((t) => <span key={t}>{t}</span>)}
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default ProductPage;

