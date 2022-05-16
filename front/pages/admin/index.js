import Navbar from '../../comps/Navbar'
import Footer from '../../comps/Footer'
import Objednavky from "../../comps/Objednavky";
import styles from "../../styles/Admin.module.css";

export default function Admin() {
    return (
        <div className={styles.container}>
            <Navbar />

                <h3 className={styles.h3admin}>Aktívne objednávky</h3>

                <div className={styles.test}>
                    <Objednavky />
                </div>

            <Footer />
        </div>
    )
}
