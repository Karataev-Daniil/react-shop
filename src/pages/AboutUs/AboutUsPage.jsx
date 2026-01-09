import React from "react";
import { Helmet } from "react-helmet-async";
import Button from "../../ui/Button/Button";
import styles from "./AboutUsPage.module.css";

function AboutUsPage() {
    return (
        <>
            <Helmet>
                <title>About Us | Furniture Store</title>
                <meta
                    name="description"
                    content="Learn more about our furniture store, our mission, and our values."
                />
            </Helmet>

            <div className={styles.page}>
                <Button to="/" variant="link" className={styles.back}>
                    ← Back
                </Button>

                <div className={styles.content}>
                    <h1 className={styles.title}>About Us</h1>
                    <p className={styles.text}>
                        Welcome to our furniture store. We believe in creating high-quality,
                        timeless furniture that makes your home both beautiful and functional.
                    </p>
                    <p className={styles.text}>
                        Our mission is to provide modern solutions with a minimalistic approach,
                        focusing on quality, sustainability, and design.
                    </p>
                    <h2 className={styles.subtitle}>Our Values</h2>
                    <ul className={styles.list}>
                        <li>Quality craftsmanship</li>
                        <li>Minimalist design</li>
                        <li>Sustainable materials</li>
                        <li>Customer satisfaction</li>
                    </ul>
                    <p className={styles.text}>
                        Thank you for trusting us with your home. We hope our furniture
                        brings comfort and style to your everyday life.
                    </p>
                </div>
            </div>
        </>
    );
}

export default AboutUsPage;
