import Navbar from "../../comps/Navbar";
import Footer from "../../comps/Footer";
import styles from "../../styles/Kosik.module.css"
import React from "react";

export default function kosik() {
    return (
        <div className={styles.container}>

            <Navbar />

            <div className={styles.formwrapper}>

                <form className={styles.form}>
                        <label>Meno:</label><br/>
                        <input className={styles.input} type="text"></input><br/>

                        <label>Priezvisko:</label><br/>
                        <input className={styles.input} type="text"></input><br/>

                        <label>Ulica:</label><br/>
                        <input className={styles.input} type="text"></input><br/>

                        <label>Mesto:</label><br/>
                        <input className={styles.input} type="text"></input><br/>

                        <label>Tel. číslo:</label><br/>
                        <input className={styles.input} type="text"></input><br/>

                        <button className={styles.button} type={"button"}>Vložiť do pece</button>

                </form>

            </div>

        </div>
    )
}