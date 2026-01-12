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
        return <p className={styles.productNotFound}>Product not found</p>;
    }

    const breadcrumbs = [
        { label: "Home", to: "/" },
        { label: product.categories[0], to: `/catalog/${product.categories[0]}` },
        { label: product.name },
    ];

    const specsElements = [];
    for (let key in product.specs) {
        specsElements.push(
            <div key={key} className={styles.productSpecItem}>
                <span className={styles.productSpecKey}>{key}</span>
                <span className={styles.productSpecValue}>{product.specs[key]}</span>
            </div>
        );
    }
    const availabilityList = product.availability.map((store) => (
        <div key={store.storeId} className={styles.storeItem}>
            <span className={styles.storeName}>{store.storeName}</span>
            <span className={styles.storeCity}>{store.city}</span>
            <span className={styles.storeQuantity}>{store.quantity} pcs</span>
        </div>
    ));

    return (
        <>
            <Helmet>
                <title>{product.name} | Furniture Store</title>
                <meta
                    name="description"
                    content={`Buy ${product.name} from category ${product.categories[0]} for ${product.price} $. High-quality furniture for home and office.`}
                />
                <meta property="og:title" content={product.name} />
                <meta property="og:description" content={`Buy ${product.name} from category ${product.categories[0]}`} />
                <meta property="og:type" content="product" />
                <meta property="og:image" content={product.image} />
            </Helmet>

            <div className={styles.productPage}>
                <Button
                    to="/"
                    variant="link"
                    className={styles.backButton}
                >
                    ← Back
                </Button>

                <div className={styles.productCard}>
                    <div className={styles.productCardHeader}>
                        <h1 className={styles.productName}>{product.name}</h1>
                        <Breadcrumbs items={breadcrumbs} />
                    </div>
                    
                    <div className={styles.productCardImage}>
                        <img
                            src={product.image}
                            alt={product.name}
                            className={styles.productImage}
                        />
                    </div>

                    <div className={styles.productInfo}>
                        <div className={styles.productPurchase}>
                            <p className={styles.productPrice}>{product.price} $</p>

                            <Button
                                variant="secondary"
                                onClick={() => addToCart(product.id)}
                                disabled={product.availability.every(s => s.quantity === 0)}
                            >
                                Add to Cart
                            </Button>
                        </div>

                        <div className={styles.productMeta}>
                            <h2>Category:</h2>
                            {product.categories.map((c) => (
                                <Button
                                    key={c}
                                    to={'/catalog/' + c}
                                >
                                    {c}
                                </Button>
                            ))}
                        </div>
                        <div className={styles.productMeta}>
                            <h2>Tags:</h2>
                            {product.tags.map((t) => (
                                <span key={t}>{t}</span>
                            ))}
                        </div>
                    </div>
                </div>

                <div className={styles.productSpecs}>
                    <h2>Specifications:</h2>
                    {specsElements}
                </div>

                <div className={styles.availability}>
                    <h2 className={styles.availabilityTitle}>Availability</h2>
                    <div className={styles.availabilityList}>
                        {availabilityList}
                    </div>
                </div>
            </div>
        </>
    );
}

export default ProductPage;
