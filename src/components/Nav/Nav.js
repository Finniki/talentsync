import { ReactComponent as Logo } from "../../assets/images/Logo.svg";
import styles from './Nav.module.css';

const Nav = () => {
    return (
        <div className={styles.nav}>
            <div className={styles.brand}>
                <Logo className={styles.logo} />
                <p className={styles.brandName}>ClearLink<span className={styles.blueDot}>.</span></p>
            </div>
        </div>
    )
    }

export default Nav;