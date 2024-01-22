import styles from "./SocialProof.module.css";
import { ReactComponent as Automattic } from "../../assets/icons/Automattic.svg";
import { ReactComponent as Coinbase } from "../../assets/icons/Coinbase.svg";
import { ReactComponent as Dropbox } from "../../assets/icons/Dropbox.svg";
import { ReactComponent as Intercom } from "../../assets/icons/Intercom.svg";
import { ReactComponent as Marvel } from "../../assets/icons/Marvel.svg";
import { ReactComponent as Shopify } from "../../assets/icons/Shopify.svg";

const SocialProof = () => {
  return (
    <div className={styles.socialProof}>
      <p className={styles.socialProofText}>
        Join 1,500+ companies already video conferencing the ClearLink way
      </p>
      <div className={styles.socialProofIcons}>
        <Shopify className={styles.socialProofIcon} />
        <Coinbase className={styles.socialProofIcon} />
        <Dropbox className={styles.socialProofIcon} />
        <Intercom className={styles.socialProofIcon} />
        <Marvel className={styles.socialProofIconMarvel} />
        <Automattic className={styles.socialProofIcon} />
      </div>
    </div>
  );
};

export default SocialProof;
