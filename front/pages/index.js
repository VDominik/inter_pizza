import Head from 'next/head'
import Image from 'next/image'
import Navbar from '../comps/Navbar'
import Footer from '../comps/Footer'
import styles from '../styles/Home.module.css'
import Contact from "../comps/Contact";

export default function Home() {
  return (
  <div className={styles.container}>

    <Navbar />

      <div className={styles.hero}>
        <div className={styles.heroHeader}>
          <h1>InteractivePizza</h1>
          <button>Objednaj si pizzu</button>
        </div>
      </div>

      <div className={styles.interHeader}>
        <h1>Vyskladajte si vlastnú pizzu</h1>
      </div>

      <div className={styles.interactive} id="interactive">
        <h1>Interactive</h1>
      </div>

      <div className={styles.interHeader}>
        <h1>Vyberte si pizzu z menu</h1>
      </div>

      <div className={styles.menu} id="menu">
        <div className="row">
          <div className={styles.column}>
            <h2>Pizza 1</h2>
            <h4>Ingrediencie: </h4>
            <p>Data...</p>
            <div className={styles.buyButton}>
              <button type={"button"}>Do koša</button>
            </div>
          </div>
          <div className={styles.column}>
            <h2>Pizza 2</h2>
            <p>Data..</p>
          </div>
        </div>
        <div className="row">
          <div className={styles.column}>
            <h2>Pizza 3</h2>
            <p>Data..</p>
          </div>
          <div className={styles.column}>
            <h2>Pizza 4</h2>
            <p>Data..</p>
          </div>
        </div>
      </div>

    <Contact />

    <Footer />

  </div>
  )
}
