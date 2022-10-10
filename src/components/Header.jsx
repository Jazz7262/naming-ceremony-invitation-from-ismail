import React from "react";
import "../styles/Header.css";

function Header() {
    return (
        <section id="header">
            <img
                src="../assets/images/bismillah.png"
                alt="bismillah"
                className="poster"
            />

            <h3>
                Begin With The Name Of Allah, The Most Benificient And The Most
                Merciful
            </h3>

            <h4 className="mt-4">
                Under the spirutual patronage of:
                <br />
                Qutub -e- Adoni Qutub -ud- Dawaayir Ashraf -ul- Ma'aasir Sayyid
                -e- Barhaq Hazrath Sayyid Shah Taher Quadri, Al-Hamavi
                Rahamatullaahi Alaih.
            </h4>

            <h4 className="mt-4">
                Under the spirutual patronage of Peer -O- Murshid:
                <br />
                Khalifa -e- Mufti -e- Azam Hind, Mufti -e- Maharastra, Hazrat
                Shaikh Muhammad Mujeeb Ashraf (Hazrat Ashraf -ul- Fuqaha)
                Rahamatullaahi Alaih.
            </h4>
        </section>
    );
}

export default Header;
