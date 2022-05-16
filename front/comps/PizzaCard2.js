import Image from "next/image";
import styles from "../styles/PizzaCard.module.css";
import React from "react";

const PizzaCard = () => {
  return (
    <div className={styles.container}>
      <Image src="/pizza2.png" alt="Pizza" width="400" height="400" />
      <h1 className={styles.title}>Vegetariánska</h1>
      <span className={styles.price}>6.90€</span>
      <p className={styles.desc}>
          Paradajka, syr , šampiňóny, zeleninová zmes
      </p>

            <Image src="/pizza6.png" alt="Pizza" width="400" height="400" />
            <h1 className={styles.title}>Wywar</h1>
            <span className={styles.price}>7.90€</span>
            <p className={styles.desc}>
                Paradajka, syr , šampiňóny, olivy, rajčiny
            </p>





    </div>



  );
};

export default PizzaCard;
