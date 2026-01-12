import React, { useState, useMemo } from "react";
import { useParams } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import products from "../../data/products";

import ProductGrid from "../../features/catalog/ProductGrid";
import styles from "./CatalogPage.module.css";
import FilteredProducts from "../../features/catalog/FilteredProducts";

function CatalogPage() {
    const { category } = useParams();

    const productsByCategory = category
        ? products.filter(p => p.categories.includes(category))
        : products;

    const [tagsFilter, setTagsFilter] = useState("all");
    const [priceFilter, setPriceFilter] = useState({ min: 0, max: 10000 });
    const [shopsFilter, setShopsFilter] = useState("All Shop");

    const tags = useMemo(() => [...new Set(products.flatMap(p => p.tags))], [products]);
    const shops = useMemo(() => [...new Set(products.flatMap(p => p.availability.map(a => a.storeName)))],[products]);

    const filteredProducts = useMemo(() => {
        return productsByCategory.filter(p => {
            const shopsMatch = shopsFilter === "All Shop" || p.availability.some(a => a.storeName === shopsFilter);
            const priceMatch = p.price >= priceFilter.min && p.price <= priceFilter.max;
            const tagMatch = tagsFilter === "all" || p.tags.includes(tagsFilter);
            return priceMatch && tagMatch && shopsMatch;
        });
    }, [productsByCategory, priceFilter, tagsFilter, shopsFilter]);

    return (
        <main className={styles.catalog}>
            <Helmet>
                {category ? (
                    <>
                        <title>Catalog: {category} | Furniture Store</title>
                        <meta 
                            name="description" 
                            content={`All products in the ${category} category at Furniture Store — modern, high-quality, and comfortable.`} 
                        />
                        {productsByCategory[0]?.image && (
                            <meta property="og:image" content={productsByCategory[0].image} />
                        )}
                        <meta property="og:title" content={`Catalog: ${category} | Furniture Store`} />
                        <meta property="og:description" content={`All products in the ${category} category at Furniture Store — modern, high-quality, and comfortable.`} />
                    </>
                ) : (
                    <>
                        <title>Furniture Catalog | Furniture Store</title>
                        <meta 
                            name="description" 
                            content="Furniture Store catalog — a wide selection of chairs, tables, sofas, and wardrobes for home and office." 
                        />
                        {productsByCategory[0]?.image && (
                            <meta property="og:image" content={productsByCategory[0].image} />
                        )}
                        <meta property="og:title" content="Furniture Catalog | Furniture Store" />
                        <meta property="og:description" content="Furniture Store catalog — a wide selection of chairs, tables, sofas, and wardrobes for home and office." />
                    </>
                )}
            </Helmet>

            <section className={styles.categoryHeader}>
                <h1 className={styles.title}>
                    {category ? `Category: ${category}` : "Furniture Catalog"}
                </h1>
            </section>

            <section className={styles.productsSection}>
                <h2 className={styles.sectionTitle}>Products in Category</h2>

                <div className={styles.filtersContainer}>
                    <h3 className={styles.filtersTitle}>Filters</h3>

                    <div className={styles.filterGroup}>
                        <label className={styles.filterLabel} htmlFor="tagsFilter">By Tags</label>
                        <select
                            id="tagsFilter"
                            value={tagsFilter}
                            onChange={(e) => setTagsFilter(e.target.value)}
                            className={styles.filterSelect}
                        >
                            <option value="all">All Tags</option>
                            {tags.map((t) => (
                                <option key={t} value={t}>{t}</option>
                            ))}
                        </select>
                    </div>

                    <div className={styles.filterGroup}>
                        <label className={styles.filterLabel}>By Price</label>
                        <div className={styles.priceInputs}>
                            <input
                                type="number"
                                placeholder="Min. price"
                                value={priceFilter.min}
                                onChange={(e) =>
                                    setPriceFilter((prev) => ({
                                        ...prev,
                                        min: Math.max(0, Number(e.target.value)),
                                    }))
                                }
                                className={styles.priceInput}
                            />
                            <input
                                type="number"
                                placeholder="Max. price"
                                value={priceFilter.max}
                                onChange={(e) =>
                                    setPriceFilter((prev) => ({
                                        ...prev,
                                        max: Math.min(10000, Number(e.target.value)),
                                    }))
                                }
                                className={styles.priceInput}
                            />
                        </div>
                    </div>

                    <div className={styles.filterGroup}>
                        <label className={styles.filterLabel} htmlFor="shopsFilter">By Shop</label>
                        <select
                            id="shopsFilter"
                            value={shopsFilter}
                            onChange={(e) => setShopsFilter(e.target.value)}
                            className={styles.filterSelect}
                        >
                            <option value="All Shop">All Shop</option>
                            {shops.map((s) => (
                                <option key={s} value={s}>{s}</option>
                            ))}
                        </select>
                    </div>
                </div>
                        
                <ProductGrid
                    products={filteredProducts}
                    itemsPerPage={36}
                />
            </section>

            <section className={styles.filtersSection}>
                <h2 className={styles.sectionTitle}>Browse Other Categories</h2>

                <FilteredProducts products={products} />
            </section>
        </main>
    );
}

export default CatalogPage;
