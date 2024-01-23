import styles from "./PerkItem.module.css";
import { ReactComponent as CheckCircleIcon } from "../../assets/icons/CheckCircleIcon.svg";

const PerkItem = ({ perk }) => {
  return (
    <div className={styles.perkItem}>
      <CheckCircleIcon />
      <p className={styles.perk}>{perk}</p>
    </div>
  );
};

export default PerkItem;
