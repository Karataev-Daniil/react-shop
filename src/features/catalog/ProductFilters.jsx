import React from "react";
import styles from "./ProductFilters.module.css";

function ProductFilters({ categories, tags, categoryFilter, setCategoryFilter, tagsFilter, setTagsFilter }) {
    return (
        <div className={styles.filtersWrapper}>
            <div className={styles.filters}>
                <select value={categoryFilter} onChange={(e) => setCategoryFilter(e.target.value)}>
                    <option value="all">Все категории</option>
                    {categories.map((c) => (
                        <option key={c} value={c}>{c}</option>
                    ))}
                </select>
            </div>
            <div className={styles.filters}>
                <select value={tagsFilter} onChange={(e) => setTagsFilter(e.target.value)}>
                    <option value="all">Все теги</option>
                    {tags.map((c) => (
                        <option key={c} value={c}>{c}</option>
                    ))}
                </select>
            </div>
        </div>
    );
}

export default ProductFilters;
