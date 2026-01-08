import React, { useState } from "react";
import ProductCard from "../product/ProductCard";
import Button from "../../ui/Button/Button";
import styles from "./ProductGrid.module.css";

function ProductGrid({ products, mode, itemsPerPage = 8 }) {
    const [currentPage, setCurrentPage] = useState(1);
    const [visibleCount, setVisibleCount] = useState(itemsPerPage);

    const totalPages = Math.ceil(products.length / itemsPerPage);

    const paginatedProducts = products.slice(
        (currentPage - 1) * itemsPerPage,
        currentPage * itemsPerPage
    );

    const visibleProducts = products.slice(0, visibleCount);

    const handleNextPage = () => {
        if (currentPage < totalPages) setCurrentPage(currentPage + 1);
    };

    const handlePrevPage = () => {
        if (currentPage > 1) setCurrentPage(currentPage - 1);
    };

    const handleLoadMore = () => {
        setVisibleCount(prev => Math.min(prev + itemsPerPage, products.length));
    };

    let displayProduct;
    if (!mode) {
        displayProduct = products.slice(0, itemsPerPage);
    } else if (mode === "pagination") {
        displayProduct = paginatedProducts;
    } else if (mode === "loadMore") {
        displayProduct = visibleProducts;
    }

    return (
        <div className={styles.productsGrid}>
            {displayProduct.map(product => (
                <ProductCard
                    key={product.id}
                    id={product.id}
                    image={product.image}
                    name={product.name}
                    price={product.price}
                    categories={product.categories}
                />
            ))}

            {mode === "pagination" && products.length > itemsPerPage && (
                <div className={styles.paginationWrapper}>
                    <Button onClick={handlePrevPage} disabled={currentPage === 1}>
                        Previous
                    </Button>
                    <span>{currentPage} / {totalPages}</span>
                    <Button onClick={handleNextPage} disabled={currentPage === totalPages}>
                        Next
                    </Button>
                </div>
            )}

            {mode === "loadMore" && visibleCount < products.length && (
                <div className={styles.loadMoreWrapper}>
                    <Button onClick={handleLoadMore}>
                        Load More
                    </Button>
                </div>
            )}
        </div>
    );
}

export default ProductGrid;
