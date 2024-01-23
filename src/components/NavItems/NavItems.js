import styles from "./NavItems.module.css";
import { ReactComponent as ChevronDown } from "../../assets/icons/chevron-down.svg";

const NavItems = ({ linkName, link, showArrow }) => {
  return (
    <div className={styles.navItem}>
      <a href={link} target="_blank" rel="noreferrer" className={styles.link}>
        {linkName}
      </a>
      {showArrow && <ChevronDown />}
    </div>
  );
};

export default NavItems;
