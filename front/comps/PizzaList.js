import styles from "../styles/PizzaList.module.css";
import PizzaCard from "./PizzaCard"
import PizzaCard1 from "./PizzaCard1";
import PizzaCard2 from "./PizzaCard2";

const PizzaList = () => {
    return (
        <div className={styles.container}>

            <div className={styles.wrapper}>
                <PizzaCard/>
                <PizzaCard1/>
                <PizzaCard2/>

            </div>
        </div>
    );
};

export default PizzaList;