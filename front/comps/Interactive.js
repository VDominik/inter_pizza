import Link from "next/link";
import styles from "../styles/Home.module.css";
import Image from 'next/image'
import { motion } from "framer-motion"



export default function Interactive ({ingredience, setIngredients}) {

   const changeIngredients = (name) => {
       let newIngredients = JSON.parse(JSON.stringify(ingredience));
       newIngredients[name] = !newIngredients[name]
       setIngredients(newIngredients);
   }

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

                    <img className={styles.pizza} src="/suroviny/pizza.png"></img>
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{
                            x: ingredience["salam"] ? 1 : 700,
                            opacity: ingredience["salam"] ? 1 : 0,
                        }}
                        transition={{ duration: 1 }}
                        className={styles.ingerdiencie}
                    >
                        <img className={styles.ingerdiencie} src="/suroviny/salam.png"></img>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{
                            x: ingredience["sunka"] ? 1 : 700,
                            opacity: ingredience["sunka"] ? 1 : 0,
                        }}
                        transition={{ duration: 1 }}
                        className={styles.ingerdiencie}
                    >
                        <img className={styles.ingerdiencie}  src="/suroviny/sunka.png"></img>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{
                            x: ingredience["hriby"] ? 1 : 700,
                            opacity: ingredience["hriby"] ? 1 : 0,
                        }}
                        transition={{ duration: 1 }}
                        className={styles.ingerdiencie}
                    >
                        <img className={styles.ingerdiencie}  src="/suroviny/hriby.png"></img>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{
                            x: ingredience["olivy"] ? 1 : 700,
                            opacity: ingredience["olivy"] ? 1 : 0,
                        }}
                        transition={{ duration: 1 }}
                        className={styles.ingerdiencie}
                    >
                        <img className={styles.ingerdiencie} src="/suroviny/olivy.png"></img>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{
                            x: ingredience["kukurica"] ? 1 : 700,
                            opacity: ingredience["kukurica"] ? 1 : 0,
                        }}
                        transition={{ duration: 1 }}
                        className={styles.ingerdiencie}
                    >
                        <img className={styles.ingerdiencie}  src="/suroviny/kukurica.png"></img>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{
                            x: ingredience["vajce"] ? 1 : 700,
                            opacity: ingredience["vajce"] ? 1 : 0,
                        }}
                        transition={{ duration: 1 }}
                        className={styles.ingerdiencie}
                    >
                        <img className={styles.ingerdiencie} src="/suroviny/vajicka.png"></img>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{
                            x: ingredience["cibula"] ? 1 : 700,
                            opacity: ingredience["cibula"] ? 1 : 0,
                        }}
                        transition={{ duration: 1 }}
                        className={styles.ingerdiencie}
                    >
                        <img className={styles.ingerdiencie} src="/suroviny/cibula.png"></img>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{
                            x: ingredience["ananas"] ? 1 : 700,
                            opacity: ingredience["ananas"] ? 1 : 0,
                        }}
                        transition={{ duration: 1 }}
                        className={styles.ingerdiencie}
                    >
                        <img className={styles.ingerdiencie} src="/suroviny/ananas.png"></img>
                    </motion.div>


                </div>

                <div className={styles.interactiveBox}>
                    <div className={styles.gridcontainer}>
                        <div className={styles.griditem}>
                            <div >

                                <button  onClick={()=> changeIngredients('salam')}>
                                    <img width="70%" src="/misky/miska_salam.png"></img>
                                </button>



                            </div>

                        </div>
                        <div className={styles.griditem}>

                                <button onClick={()=> changeIngredients('sunka')}>
                                <img width="70%" src="/misky/miska_sunka.png"></img>
                                </button>

                        </div>
                        <div className={styles.griditem}>
                            <button onClick={()=> changeIngredients('hriby')}>
                                <img width="70%" src="/misky/miska_sampiony.png"></img>
                            </button>

                        </div>
                        <div className={styles.griditem}>
                            <button onClick={()=> changeIngredients('olivy')}>
                                <img width="60%" src="/misky/miska_olivy.png"></img>
                            </button>

                        </div>
                        <div className={styles.griditem}>
                            <button onClick={()=> changeIngredients('kukurica')}>
                                <img width="70%" src="/misky/miska_kukurica.png"></img>
                            </button>

                        </div>
                        <div className={styles.griditem}>
                            <button onClick={()=> changeIngredients('vajce')}>
                                <img width="70%" src="/misky/miska_vajcia.png"></img>
                            </button>

                        </div>
                        <div className={styles.griditem}>
                            <button onClick={()=> changeIngredients('syr')}>
                                <img width="70%" src="/misky/miska_syr.png"></img>
                            </button>

                        </div>
                        <div className={styles.griditem}>
                            <button onClick={()=> changeIngredients('cibula')}>
                                <img width="70%" src="/misky/miska_cibula.png"></img>
                            </button>

                        </div>
                        <div className={styles.griditem}>
                            <button onClick={()=> changeIngredients('ananas')}>
                                <img width="70%" src="/misky/miska_ananas.png"></img>
                            </button>

                        </div>
                    </div>
                </div>
            </div>


        </div>


    );
}
