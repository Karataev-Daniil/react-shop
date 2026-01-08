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

    const createReview = (content, grade) => {
        if (!content || !grade) return;

        const newReview = {
            review: content,
            grade: grade,
            id: nanoid()
        }

        setReviews([...reviews, newReview]);
        setContentReview("");
        setGradeReview("");
    }

    return (
        <>
            <Helmet>
                <title>Отзывы</title>
            </Helmet>

            <div className={styles.page}>
                <Button to="/" variant="link" className={styles.backButton}>
                    ← Back
                </Button>

                <section className={styles.reviewFormSection}>
                    <h2 className={styles.reviewTitle}>Оставьте о нас отзыв!</h2>
                    <div className={styles.inputs}>
                        <input 
                            type="text" 
                            placeholder="напишите сюда что думаете о нас" 
                            value={contentReview}
                            onChange={(e) => setContentReview(e.target.value)}
                            className={styles.textInput}
                        />
                        <input 
                            type="number" 
                            placeholder="выберите оценку от 1 до 5" 
                            value={gradeReview}
                            onChange={(e) => {
                                const value = Number(e.target.value);
                                if (value > 5) {
                                    setGradeReview(5);
                                } else if (value < 1) {
                                    setGradeReview(1);
                                } else {
                                    setGradeReview(value);
                                }
                            }}
                            className={styles.numberInput}
                            min={1}
                            max={5}
                        />
                    </div>
                    <Button
                        onClick={() => createReview(contentReview, gradeReview)}
                        className={styles.submitButton}
                    >
                        Отправить
                    </Button>
                </section>

                <section className={styles.reviewsListSection}>
                    <h2 className={styles.reviewsListTitle}>Отзывы:</h2>
                    <div className={styles.reviewsList}>
                        {reviews.map((r) => (
                            <div key={r.id} className={styles.reviewItem}>
                                <span className={styles.reviewText}>{r.review}</span>
                                <span className={styles.reviewStars}>
                                    {Array.from({ length: 5 }, (_, i) => (
                                        <span key={i} className={i < r.grade ? styles.filledStar : styles.emptyStar}>★</span>
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
