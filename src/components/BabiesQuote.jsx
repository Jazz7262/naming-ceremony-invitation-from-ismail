import React from "react";
import "../styles/BabiesQuote.css";

function BabiesQuote() {
    return (
        <section id="babies-quote">
            <div className="inner-content">
                <h1>Heartly Welcome To My Sister's Naming Ceremony ....</h1>
                <div className="wrapper">
                    <div className="d-inline">
                        <h1 className="maashaallaah mr-lg-5 pr-lg-3 mr-4 pr-2">
                            ماشاءاللہ
                        </h1>
                        <img
                            src="../assets/images/baby.png"
                            alt="Baby-Avatar"
                        />
                        <h3 className="mt-4">--- Muhammad Sufiyaan.</h3>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default BabiesQuote;
