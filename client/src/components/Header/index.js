import React from 'react';
import styles from './header.module.scss';
import getWeb3, { getGanacheWeb3, Web3 } from "../../utils/getWeb3";


const Header = () => (
    <div className={styles.header}>
        <nav id="menu" className="menu">
          <ul>
            <li><a href="/" className={styles.link}><span style={{ padding: "60px" }}>Home</span></a></li>

            <li><a href="/publish" className={styles.link}> Publish</a></li>

            <li><a href="/my-photos" className={styles.link}> My Photos</a></li>

            <li><a href="/photo-marketplace" className={styles.link}> PhotoMarketPlace</a></li>
            
            <li><button> Connect</button></li>
          </ul>
        </nav>
    </div>
)

export default Header;
