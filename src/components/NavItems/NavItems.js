import styles from "./NavItems.module.css";
import { ReactComponent as ChevronDown } from "../../assets/icons/chevron-down.svg";

const NavItems = ({ item, showArrow }) => {
  return (
    <div className={styles.navItem}>
      <p className={styles.link}>{item}</p>
      {showArrow && <ChevronDown />}
    </div>
  );
};

export default NavItems;
