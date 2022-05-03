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
            <div className={styles.row}>
            {this.state.data.map((result) => {
                return (


                <div className={styles.column}>
                    <h4>{result.id}. {result.nazov}</h4>
                    <p>{result.ingrediencie}</p>

                    <div className={styles.buyButton}>
                        <button type={"button"}>Vložiť do pece</button>
                    </div>
                    <p>Cena: {result.cena}€</p>
                </div>


                    )
                }
            )}
            </div>
        </div>
    );
}
}
export default Menu;