import React, { useState, useEffect } from "react";
import localforage from "localforage";
import { useOutletContext } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Button from "../../ui/Button/Button";
import styles from "./ReviewsPage.module.css";
import { nanoid } from "nanoid";

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

function ReviewsPage() {
    const [reviews, setReviews] = useLocalForage("reviews", []);
    const [contentReview, setContentReview] = useState("");
    const [gradeReview, setGradeReview] = useState("");
    const [activeFilter, setActiveFilter] = useState("all");
    

    const createReview = (content, grade) => {
        if (!content || !grade) return;

        const newReview = {
            review: content,
            grade: grade,
            id: nanoid(),
        };

        setReviews([...reviews, newReview]);
        setContentReview("");
        setGradeReview("");
    };

    const filteredReviews = reviews.filter((r) => {
        if (activeFilter === "all") {
            return true;
        } else if (activeFilter === 5) {
            return r.grade === 5;
        } else if (activeFilter === 4) {
            return r.grade === 4;
        } else if (activeFilter === 3) {
            return r.grade === 3;
        } else if (activeFilter === "low" && r.grade <= 2) {
            return true
        }

        
        return false;
    })

    return (
        <>
            <Helmet>
                <title>Reviews</title>
            </Helmet>

            <div className={styles.reviewPage}>
                <Button to="/" variant="link" className={styles.backButton}>
                    ← Back
                </Button>

                <section className={styles.reviewForm}>
                    <h2 className={styles.reviewFormTitle}>Leave us a review!</h2>

                    <div className={styles.inputs}>
                        <input
                            type="text"
                            placeholder="Write what you think about us"
                            value={contentReview}
                            onChange={(e) => setContentReview(e.target.value)}
                            className={styles.textInput}
                        />

                        <div className={styles.reviewStars}>
                            {[1, 2, 3, 4, 5].map((star) => (
                                <button
                                    key={star}
                                    onClick={() => setGradeReview(star)}
                                    className={star <= gradeReview ? styles.starFilled : styles.starEmpty}
                                >
                                    ★
                                </button>
                            ))}
                        </div>
                    </div>
                        
                    <Button
                        onClick={() => createReview(contentReview, gradeReview)}
                        className={styles.submitButton}
                    >
                        Submit
                    </Button>
                </section>
                        
                <section className={styles.reviewListSection}>
                    <h2 className={styles.reviewListTitle}>Reviews:</h2>
                        
                    <div className={styles.reviewFilters}>
                        <Button
                            onClick={() => setActiveFilter("all")}
                            className={activeFilter === "all" ? styles.btnActive : ""}
                        >
                            All
                        </Button>
                        <Button
                            onClick={() => setActiveFilter(5)}
                            className={activeFilter === 5 ? styles.btnActive : ""}
                        >
                            5★
                        </Button>
                        <Button
                            onClick={() => setActiveFilter(4)}
                            className={activeFilter === 4 ? styles.btnActive : ""}
                        >
                            4★
                        </Button>
                        <Button
                            onClick={() => setActiveFilter(3)}
                            className={activeFilter === 3 ? styles.btnActive : ""}
                        >
                            3★
                        </Button>
                        <Button
                            onClick={() => setActiveFilter("low")}
                            className={activeFilter === "low" ? styles.btnActive : ""}
                        >
                            Low
                        </Button>
                    </div>
                        
                    <div className={styles.reviewList}>
                        {filteredReviews.length === 0
                            ? "nothing found"
                            : filteredReviews.map((r) => (
                                <div key={r.id} className={styles.reviewItem}>
                                    <span className={styles.reviewText}>{r.review}</span>
                            
                                    <span className={styles.reviewStars}>
                                        {Array.from({ length: 5 }, (_, i) => (
                                            <span
                                                key={i}
                                                className={i < r.grade ? styles.starFilled : styles.starEmpty}
                                            >
                                                ★
                                            </span>
                                        ))}
                                    </span>
                                </div>
                            ))}
                    </div>
                </section>
            </div>

        </>
    );
}

export default ReviewsPage;
