import Link from "next/link";
import styles from "../styles/Home.module.css";
import React from 'react';

const axios = require('axios');

class Menu extends React.Component {

    constructor() {
        //použitie super na prístup ku premenným
        super();
        this.state = {
            data: []
        }
    }

    //Prijme dáta z danej url
    componentDidMount() {
        //Request na API
        axios.get("http://localhost:8000/api/menu")
            .then(response => {
                //získa data z api a vloží ich do premenných
                this.setState({data: response.data.menu});
                console.log(response.data.menu[0]);

            })
    }

    render() {
    return(
        <div className={styles.menu} id="menu">
            {this.state.data.map((result) => {
                return (

            <div className={styles.row}>
                <div className={styles.column}>
                    <h2>{result.id}</h2>
                    <h4>{result.nazov}</h4>
                    <p>{result.ingrediencie}</p>
                    <div className={styles.buyButton}>
                        <button type={"button"}>Do koša</button>
                    </div>
                </div>
                <div className={styles.column}>
                    <h2>Pizza 2</h2>
                    <p>Data..</p>
                </div>
                <div className={styles.column}>
                    <h2>Pizza 3</h2>
                    <p>Data..</p>
                </div>
            </div>
                    )
                }
            )}

            <div className={styles.row}>
                <div className={styles.column}>
                    <h2>Pizza 4</h2>
                    <p>Data..</p>
                </div>
                <div className={styles.column}>
                    <h2>Pizza 5</h2>
                    <p>Data..</p>
                </div>
                <div className={styles.column}>
                    <h2>Pizza 6</h2>
                    <p>Data..</p>
                </div>
            </div>
        </div>
    );
}
}
export default Menu;