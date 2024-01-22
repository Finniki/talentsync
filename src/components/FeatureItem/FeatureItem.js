import styles from "./FeatureItem.module.css";

const FeatureItem = ({ icon: IconComponent, header, description }) => {
  return (
    <div className={styles.featureItem}>
      <div className={styles.featureItemIconDiv}>
        {IconComponent && <IconComponent className={styles.featureItemIcon} />}
      </div>
      <div className={styles.featureItemText}>
        <h3 className={styles.featureItemHeader}>{header}</h3>
        <p className={styles.featureItemDescription}>{description}</p>
      </div>
    </div>
  );
};

export default FeatureItem;
