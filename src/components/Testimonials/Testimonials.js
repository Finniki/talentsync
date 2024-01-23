import styles from "./Testimonials.module.css";
import { ReactComponent as Shopify } from "../../assets/icons/Shopify.svg";
import { Rating } from "@mui/material";
import Avatar from "../../assets/images/Avatar.png";
import image from "../../assets/images/Image.png";
import image1 from "../../assets/images/Image(1).png";
import image2 from "../../assets/images/Image(2).png";
import image3 from "../../assets/images/Image(3).png";
import image4 from "../../assets/images/Image(4).png";
import { ReactComponent as ArrowLeftIcon } from "../../assets/icons/ArrowLeftIcon.svg";
import { ReactComponent as ArrowRightIcon } from "../../assets/icons/ArrowRightIcon.svg";

const Testimonials = () => {
  return (
    <div className={styles.testimonials}>
      <div className={styles.testimonialsTextArea}>
        <Shopify className={styles.testimonialsIcon} />
        <Rating name="read-only" value={5} readOnly />
        <p className={styles.testimonialsText}>
          ClearLink has upgraded our remote meetings. High-quality video, screen
          sharing, and top-notch security make it essential for our team.
        </p>
        <div className={styles.testimonialsPerson}>
          <img
            src={Avatar}
            className={styles.testimonialsPersonPhoto}
            alt="A woman's portrait"
          />
          <div className={styles.testimonialsPersonInfo}>
            <p className={styles.testimonialsPersonName}>Sarah Thompson</p>
            <p className={styles.testimonialsPersonRole}>
              Project Manager, Shopify
            </p>
          </div>
          <div className={styles.testimonialsPersonArrows}>
            <div className={styles.testimonialsPersonArrowDiv}>
              <ArrowLeftIcon />
            </div>
            <div className={styles.testimonialsPersonArrowDiv}>
              <ArrowRightIcon />
            </div>
          </div>
        </div>
      </div>
      <div className={styles.testimonialsImageArea}>
        <div className={styles.testimonialsImageTopFlex}>
          <div className={styles.testimonialsImageDiv}>
            <img src={image} alt="" className={styles.testimonialsImage} />
          </div>
          <div className={styles.testimonialsImageDiv}>
            <img src={image1} alt="" className={styles.testimonialsImage} />
          </div>
        </div>
        <div className={styles.testimonialsImageBottomFlex}>
          <div className={styles.testimonialsImageDiv}>
            <img src={image2} alt="" className={styles.testimonialsImage} />
          </div>
          <div className={styles.testimonialsImageDiv}>
            <img src={image3} alt="" className={styles.testimonialsImage} />
          </div>
          <div className={styles.testimonialsImageDiv}>
            <img src={image4} alt="" className={styles.testimonialsImage} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
