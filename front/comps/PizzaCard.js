import Image from "next/image";
import styles from "../styles/PizzaCard.module.css";
import React from "react";


const PizzaCard = () => {
  return (
      <div className={styles.container}>
          <Image src="/pizza6.png" alt="Pizza" width="400" height="400" />
          <h1 className={styles.title}>Margherita</h1>
          <span className={styles.price}>4.90€</span>
          <p className={styles.desc}>
              Paradajka, syr, bazalka
          </p>

          <Image src="/pizza5.png" alt="Pizza" width="400" height="400" />
          <h1 className={styles.title}>Mexikána</h1>
          <span className={styles.price}>6.90€</span>
          <p className={styles.desc}>
              Paradajka, syr, saláma, olivy, cibuľa, kukurica
          </p>





    </div>



  );
};

export default PizzaCard;
