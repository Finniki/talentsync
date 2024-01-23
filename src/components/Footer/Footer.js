import FooterLinks from "../FooterLinks/FooterLinks";
import Copyright from "../Copyright/Copyright";
import styles from "./Footer.module.css";
import { ReactComponent as Logo } from "../../assets/images/Logo.svg";
import { ReactComponent as AppStoreIcon } from "../../assets/icons/AppStoreIcon.svg";
import { ReactComponent as GooglePlayIcon } from "../../assets/icons/GooglePlayIcon.svg";

const Footer = () => {
  const footerLinks = [
    {
      category: "Product",
      links: ["Overview", "Features", "Solutions", "Tutorials", "Pricing"],
    },
    {
      category: "Company",
      links: ["About us", "Careers", "Press", "News", "Contact"],
    },
    {
      category: "Resources",
      links: ["Blogs", "Events", "Help Center", "Tutorials", "Support"],
    },
    {
      category: "Legal",
      links: ["Terms", "Privacy", "Cookies", "Licenses", "Contact"],
    },
  ];

  return (
    <div>
      <div className={styles.footer}>
        <div className={styles.footerBrand}>
          <div className={styles.footerBrandLogo}>
            <Logo className={styles.footerLogo} />
            <p className={styles.footerBrandName}>
              ClearLink<span className={styles.blueDot}>.</span>
            </p>
          </div>
          <p className={styles.footerDescription}>
            ClearLink is your gateway to effortless, high-quality video
            conferencing. Join us in shaping the future of communication!
          </p>
        </div>
        <div className={styles.footerLinks}>
          {footerLinks.map((category, index) => (
            <FooterLinks key={index} category={category} />
          ))}
        </div>
        <div className={styles.footerGetApp}>
          <p className={styles.footerGetAppText}>Get the app</p>
          <div>
            <AppStoreIcon className={styles.appIcon} />
            <GooglePlayIcon className={styles.appIcon} />
          </div>
        </div>
      </div>
      <Copyright />
    </div>
  );
};

export default Footer;
