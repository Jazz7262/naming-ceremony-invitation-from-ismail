import React from "react";
import "../styles/Timeline.css";

function Timeline() {
    return (
        <section id="timeline">
            <h1 className="inshaallaah">Inshaallaah ...</h1>

            <div className="wrapper" data-aos="fade-up" data-aos-delay="100">
                <div className="content">
                    <h1>Naming Ceremony</h1>
                    <p>
                        On Thursday, 13<sup>th</sup> October, 2022,
                        <br />
                        16<sup>th</sup> Rabi-ul-Awwal, 1443 Hijri,
                        <br />
                        Time: 02:00 PM.
                    </p>
                    <h2>Venue:</h2>
                    <p>
                        SMB Taj Function Hall,
                        <br />Art's College Road,
                        <br /> Adoni.
                    </p>
                </div>
            </div>
        </section>
    );
}

export default Timeline;
