import React from "react";
import { useOutletContext } from "react-router-dom";
import { Helmet } from "react-helmet-async";
import Button from "../../ui/Button/Button";
import styles from "./AboutUsPage.module.css";

function AboutUsPage() {
    
    return (
        <>
            <Helmet>
                
            </Helmet>

            <div className={styles.page}>
                <Button to="/" variant="link" className={styles.back}>
                    ← Back
                </Button>

            </div>
        </>
    );
}

export default AboutUsPage;
