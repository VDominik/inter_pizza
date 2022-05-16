import Navbar from '../comps/Navbar'
import Footer from '../comps/Footer'
import Contact from "../comps/Contact";
import Menu from "../comps/Menu";
import styles from '../styles/Home.module.css'
import Link from "next/link";
import Interactive from "../comps/Interactive";

import {useState} from "react";
import Gallery from "../comps/Gallery"
import PizzaList from "../comps/PizzaList";


export default function Home() {

  const[ingredients, setIngredients] = useState({
    salam: false,
    sunka: false,
    hriby: false,
    olivy: false,
    kukurica: false,
    vajce: false,
    syr: false,
    cibula: false,
    ananas: false,
  });

  return (
  <div className={styles.container}>

    <Navbar />

      <div className={styles.hero}>
        <div className={styles.heroHeader}>
          <h1>InteractivePizza</h1>
          <Link href="#interactive"><button>Objednaj si pizzu</button></Link>
        </div>
      </div>

      <div className={styles.interHeader}>
        <h1>Vyskladajte si vlastnú pizzu</h1>
      </div>

    <Interactive ingredience={ingredients} setIngredients={setIngredients} />

      <div className={styles.interHeader} id="menu">
        <h1>Vyberte si pizzu z menu</h1>
      </div>
    <PizzaList/>

    <Menu />

    <Gallery />

    <Contact />

    <Footer />

  </div>
  )
}
