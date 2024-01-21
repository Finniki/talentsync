import NavItems from '../NavItems/NavItems'
import { ReactComponent as Logo } from "../../assets/images/Logo.svg";
import styles from './Nav.module.css';

const Nav = () => {
    const navItems = {
        Products: "#",
        Solutions: "#",
        Resource: "#",
        Pricing: "#"
    }
    return (
        <div className={styles.nav}>
            <div className={styles.brand}>
                <Logo className={styles.logo} />
                <p className={styles.brandName}>ClearLink<span className={styles.blueDot}>.</span></p>
            </div>
            {
                <div className={styles.navItems}>
                    {Object.entries(navItems).map((navItems, index) => {
                        const [linkName, link] = navItems;
                        return <NavItems key={linkName} linkName={linkName} link={link} showArrow={index < 3} />;
                    })}
                </div>
            }
        </div>
    )
}

export default Nav;