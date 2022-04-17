import Head from 'next/head'
import Image from 'next/image'
import Navbar from '../comps/Navbar'
import Footer from '../comps/Footer'
import styles from '../styles/Home.module.css'

export default function Home() {
  return (
  <div className={styles.container}>

    <Navbar />

      <div className={styles.hero}>
        <div>
            <h1>Hero</h1>
        </div>

      </div>
      <div className={styles.menu} id="menu">
        <div className="row">
          <div className={styles.column}>
            <h2>Pizza 1</h2>
            <p>Data..</p>
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

    <div className={styles.interactive} id="interactive">
      <h1>Interactive</h1>
    </div>

    <Footer />

  </div>
  )
}
