import styles from "./FooterLinks.module.css";
const FooterLinks = ({ category }) => {
  const { category: categoryName, links } = category;

  return (
    <div className={styles.footerLinksFlex}>
      <h3 className={styles.footerLinkCategory}>{categoryName}</h3>
      <ul>
        {links.map((link, index) => (
          <li key={index} className={styles.footerLinks}>
            {link}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default FooterLinks;
