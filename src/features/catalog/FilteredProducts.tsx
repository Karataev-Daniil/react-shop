import { useState, useMemo } from "react";
import ProductGrid from "./ProductGrid";
import styles from "./ProductFilters.module.css";
import type { ProductItem } from "../product/model/types";

type ProductItemsProps = {
    products : ProductItem[]
}

function FilteredProducts({ products }: ProductItemsProps) {
    const [categoryFilter, setCategoryFilter] = useState("all");
    const [tagsFilter, setTagsFilter] = useState("all");

    const categories = useMemo(() => [...new Set(products.flatMap(p => p.categories))], [products]);
    const tags = useMemo(() => [...new Set(products.flatMap(p => p.tags))], [products]);

    const filteredProducts = useMemo(() => {
        return products.filter(p => {
            const categoryMatch = categoryFilter === "all" || p.categories.includes(categoryFilter);
            const tagMatch = tagsFilter === "all" || p.tags.includes(tagsFilter);
            return categoryMatch && tagMatch;
        });
    }, [products, categoryFilter, tagsFilter]);

    return (
        <div>
            <div className={styles.filtersWrapper}>
                <div className={styles.filters}>
                    <select value={categoryFilter} onChange={(e) => setCategoryFilter(e.target.value)}>
                        <option value="all">All Categories</option>
                        {categories.map((c) => <option key={c} value={c}>{c}</option>)}
                    </select>
                </div>
                <div className={styles.filters}>
                    <select value={tagsFilter} onChange={(e) => setTagsFilter(e.target.value)}>
                        <option value="all">All Tags</option>
                        {tags.map((t) => <option key={t} value={t}>{t}</option>)}
                    </select>
                </div>
            </div>

            {filteredProducts.length === 0 ? (
                <div>No results found!</div>
            ) : (
                <ProductGrid 
                    key={categoryFilter + "-" + tagsFilter}
                    products={filteredProducts} 
                    itemsPerPage={8}
                    mode="pagination" 
                />
            )}
        </div>
    );
}

export default FilteredProducts;
