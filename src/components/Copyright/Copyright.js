import styles from "./Copyright.module.css";
import { ReactComponent as LinkedInIcon } from "../../assets/icons/LinkedInIcon.svg";
import { ReactComponent as TwitterIcon } from "../../assets/icons/TwitterIcon.svg";
import { ReactComponent as FacebookIcon } from "../../assets/icons/FacebookIcon.svg";
import { ReactComponent as InstagramIcon } from "../../assets/icons/InstagramIcon.svg";
import { ReactComponent as GithubIcon } from "../../assets/icons/GithubIcon.svg";
import { ReactComponent as YoutubeIcon } from "../../assets/icons/YoutubeIcon.svg";

const Copyright = () => {
  return (
    <div className={styles.copyright}>
      <p className={styles.footerText}>
        &copy; 2023 ClearLink. All rights reserved.
      </p>
      <div className={styles.socials}>
        <LinkedInIcon className={styles.socialIcon} />
        <TwitterIcon className={styles.socialIcon} />
        <FacebookIcon className={styles.socialIcon} />
        <InstagramIcon className={styles.socialIcon} />
        <GithubIcon className={styles.socialIcon} />
        <YoutubeIcon className={styles.socialIcon} />
      </div>
    </div>
  );
};

export default Copyright;
