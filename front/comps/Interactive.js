import Link from "next/link";
import styles from "../styles/Home.module.css";
import Image from 'next/image'



const Interactive = () => {
    return(

        // <div className={styles.interactive} id="interactive">
        //     <h1>Interactive</h1>
        // </div>

        // <div ><img src=".//front/styles/suroviny/pizza.png" alt=""></div>
        <div className={styles.interactive} id="interactive">




            <div className={styles.interactiveContainer}>

                <div className={styles.interactiveBox}>

                    <div className={styles.velkostcontainer}>
                        <div className={styles.velkostitem}>
                            <div>
                                <img width="70%" src="/velkost/mala.png"></img>
                            </div>

                            <div>
                                <img width="70%" src="/velkost/stredna.png"></img>
                            </div>

                            <div>
                                <img width="70%" src="/velkost/velka.png"></img>
                            </div>

                        </div>
                    </div>
                </div>
                <div className={styles.interactiveBox}>
                        <Link href="/">

                        <div className={styles.pizza}>
                            <img  width="80%" src="/suroviny/pizza.png"></img>
                        </div>
                    </Link>
                </div>
                <div className={styles.interactiveBox}>
                    <div className={styles.gridcontainer}>
                        <div className={styles.griditem}>
                            <div >
                                <img width="70%" src="/misky/miska_salam.png"></img>
                            </div>

                        </div>
                        <div className={styles.griditem}>
                            <div >
                                <img width="70%" src="/misky/miska_sunka.png"></img>
                            </div>

                        </div>
                        <div className={styles.griditem}>
                            <div >
                                <img width="70%" src="/misky/miska_sampiony.png"></img>
                            </div>

                        </div>
                        <div className={styles.griditem}>
                            <div >
                                <img width="60%" src="/misky/miska_olivy.png"></img>
                            </div>

                        </div>
                        <div className={styles.griditem}>
                            <div >
                                <img width="70%" src="/misky/miska_kukurica.png"></img>
                            </div>

                        </div>
                        <div className={styles.griditem}>
                            <div >
                                <img width="70%" src="/misky/miska_vajcia.png"></img>
                            </div>

                        </div>
                        <div className={styles.griditem}>
                            <div >
                                <img width="70%" src="/misky/miska_syr.png"></img>
                            </div>

                        </div>
                        <div className={styles.griditem}>
                            <div >
                                <img width="70%" src="/misky/miska_cibula.png"></img>
                            </div>

                        </div>
                        <div className={styles.griditem}>
                            <div >
                                <img width="70%" src="/misky/miska_ananas.png"></img>
                            </div>

                        </div>
                    </div>
                </div>
            </div>


        </div>


    );
}
export default Interactive;