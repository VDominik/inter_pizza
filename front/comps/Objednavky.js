import Link from "next/link";
import styles from "../styles/Admin.module.css";
import React from 'react';

const axios = require('axios');


class Objednavky extends React.Component {

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
        axios.get("http://localhost:8000/api/objednavky")
            .then(response => {
                //získa data z api a vloží ich do premenných
                this.setState({data: response.data.objednavky});
                console.log(response.data.objednavky[0]);

            })
    }

    render() {
        return(
            <div className={styles.menu} id="objednavky">
                <div className={styles.row}>
                    {this.state.data.map((result) => {
                            return (


                                <div className={styles.column}>
                                    <h4>{result.id}. {result.nazov}</h4>
                                    <h4>{result.adresa}</h4>
                                    <p>{result.ingrediencie}</p>

                                    <div className={styles.ButtonWrapper}>
                                        <div className={styles.buyButtonAccept}>
                                            <button type={"button"}>Vybaviť</button>
                                        </div>
                                            <div className={styles.buyButtonDelete}>
                                            <button type={"button"}>Odstrániť</button>
                                        </div>
                                    </div>

                                </div>

                            )
                        }
                    )}
                </div>
            </div>
        );
    }
}
export default Objednavky;