import { useState, useEffect } from "react";
import { nanoid } from "nanoid";
import { useLoaderData, useOutletContext } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import products from "../../data/products";
import localforage from "localforage";

import Breadcrumbs from "../../components/Breadcrumbs/Breadcrumbs";
import Button from "../../ui/Button";
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

function useLocalForage(key, initialValue) {
    const [state, setState] = useState(initialValue);

    useEffect(() => {
        async function load() {
            const saved = await localforage.getItem(key);
            if (saved) setState(saved);
        }
        load();
    }, [key]);

    useEffect(() => {
        localforage.setItem(key, state);
    }, [key, state]);

    return [state, setState];
}

function ProductPage() {
    const { addToCart } = useOutletContext();
    const { product } = useLoaderData();

    const [reviews, setReviews] = useLocalForage("productReviews", []);
    const [contentReview, setContentReview] = useState("");
    const [gradeReview, setGradeReview] = useState("");
    const [activeFilter, setActiveFilter] = useState("all");

    if (!product) {
        return <p className={styles.product__notFound}>Product not found</p>;
    }

    const createReview = (content, grade) => {
        if (!content || !grade) return;

        const newReview = {
            productId: product.id,
            review: content,
            grade,
            id: nanoid(),
            createdAt: new Date().toISOString(),
        };

        setReviews([...reviews, newReview]);
        setContentReview("");
        setGradeReview("");
    };

    const productReviews = reviews.filter(
        (r) => r.productId === product.id
    );

    const filteredReviews = productReviews.filter((r) => {
        if (activeFilter === "all") return true;
        if (activeFilter === "low") return r.grade <= 2;
        return r.grade === activeFilter;
    });

    const breadcrumbs = [
        { label: "Home", to: "/" },
        { label: product.categories[0], to: `/catalog/${product.categories[0]}` },
        { label: product.name },
    ];

    return (
        <>
            <Helmet>
                <title>{product.name} | Furniture Store</title>
                <meta
                    name="description"
                    content={`Buy ${product.name} from category ${product.categories[0]} for ${product.price} $.`}
                />
            </Helmet>

            <div className={styles.product}>
                <Button to="/" variant="link" className={styles.product__back}>
                    ← Back
                </Button>

                <div className={styles.product__card}>
                    <div className={styles.product__header}>
                        <h1 className={styles.product__title}>{product.name}</h1>
                        <Breadcrumbs items={breadcrumbs} />
                    </div>

                    <div className={styles.product__imageWrap}>
                        <img
                            src={product.image}
                            alt={product.name}
                            className={styles.product__image}
                        />
                    </div>

                    <div className={styles.product__info}>
                        <div className={styles.product__purchase}>
                            <p className={styles.product__price}>
                                {product.price} $
                            </p>

                            <Button
                                variant="secondary"
                                onClick={() => addToCart(product.id)}
                                disabled={product.availability.every(
                                    (s) => s.quantity === 0
                                )}
                            >
                                Add to Cart
                            </Button>
                        </div>

                        <div className={styles.product__meta}>
                            <h2>Category</h2>
                            <div className={styles.product__metaList}>
                                {product.categories.map((c) => (
                                    <Button key={c} to={`/catalog/${c}`}>
                                        {c}
                                    </Button>
                                ))}
                            </div>
                        </div>

                        <div className={styles.product__meta}>
                            <h2>Tags</h2>
                            <div className={styles.product__metaList}>
                                {product.tags.map((t) => (
                                    <span key={t} className={styles.product__tag}>
                                        {t}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>

                <div className={styles.product__specs}>
                    <h2>Specifications</h2>

                    {Object.entries(product.specs).map(([key, value]) => (
                        <div key={key} className={styles.product__spec}>
                            <span className={styles.product__specKey}>{key}</span>
                            <span className={styles.product__specValue}>{value}</span>
                        </div>
                    ))}
                </div>

                <div className={styles.product__availability}>
                    <h2 className={styles.product__availabilityTitle}>
                        Availability
                    </h2>

                    <div className={styles.product__availabilityList}>
                        {product.availability.map((store) => (
                            <div
                                key={store.storeId}
                                className={styles.product__store}
                            >
                                <span className={styles.product__storeName}>
                                    {store.storeName}
                                </span>
                                <span className={styles.product__storeCity}>
                                    {store.city}
                                </span>
                                <span className={styles.product__storeQty}>
                                    {store.quantity} pcs
                                </span>
                            </div>
                        ))}
                    </div>
                </div>

                <section className={styles.reviews}>
                    <h2 className={styles.reviews__title}>
                        Leave a review
                    </h2>

                    <div className={styles.reviews__form}>
                        <input
                            type="text"
                            className={styles.reviews__input}
                            value={contentReview}
                            onChange={(e) => setContentReview(e.target.value)}
                            placeholder="Your review"
                        />

                        <div className={styles.reviews__stars}>
                            {[1, 2, 3, 4, 5].map((star) => (
                                <button
                                    key={star}
                                    onClick={() => setGradeReview(star)}
                                    className={`${styles.star} ${
                                        star <= gradeReview
                                            ? styles["star--filled"]
                                            : styles["star--empty"]
                                    }`}
                                >
                                    ★
                                </button>
                            ))}
                        </div>

                        <Button
                            className={styles.reviews__submit}
                            onClick={() =>
                                createReview(contentReview, gradeReview)
                            }
                        >
                            Submit
                        </Button>
                    </div>

                    <div className={styles.reviews__filters}>
                        {["all", 5, 4, 3, "low"].map((f) => (
                            <Button
                                key={f}
                                onClick={() => setActiveFilter(f)}
                                className={`${styles.reviews__filter} ${
                                    activeFilter === f
                                        ? styles["reviews__filter--active"]
                                        : ""
                                }`}
                            >
                                {f === "all"
                                    ? "All"
                                    : f === "low"
                                    ? "Low"
                                    : `${f}★`}
                            </Button>
                        ))}
                    </div>

                    <div className={styles.reviews__items}>
                        {filteredReviews.length === 0
                            ? "Nothing found"
                            : filteredReviews.map((r) => (
                                  <div
                                      key={r.id}
                                      className={styles.reviews__item}
                                  >
                                      <p className={styles.reviews__text}>
                                          {r.review}
                                      </p>

                                      <div className={styles.reviews__stars}>
                                          {Array.from({ length: 5 }).map(
                                              (_, i) => (
                                                  <span
                                                      key={i}
                                                      className={`${styles.star} ${
                                                          i < r.grade
                                                              ? styles["star--filled"]
                                                              : styles["star--empty"]
                                                      }`}
                                                  >
                                                      ★
                                                  </span>
                                              )
                                          )}
                                      </div>
                                  </div>
                              ))}
                    </div>
                </section>
            </div>
        </>
    );
}

export default ProductPage;
