import styles from "./HeroSection.module.css";
import Nav from "../Nav/Nav";
import { Button, ThemeProvider, Rating, Typography, Box } from "@mui/material";
import { ReactComponent as AiIcon } from "../../assets/icons/AiIcon.svg";
import { ReactComponent as FaceIcon } from "../../assets/icons/FaceIcon.svg";
import { ReactComponent as MessageIcon } from "../../assets/icons/MessageIcon.svg";
import { ReactComponent as MicrophoneIcon } from "../../assets/icons/MicrophoneIcon.svg";
import { ReactComponent as MonitorIcon } from "../../assets/icons/MonitorIcon.svg";
import { ReactComponent as RecorderIcon } from "../../assets/icons/RecorderIcon.svg";
import { ReactComponent as SettingsIcon } from "../../assets/icons/SettingsIcon.svg";
import theme from "../../assets/theme/theme";
import primary from "../../assets/buttonStyles/primary";
import Avatar from "../../assets/images/Avatar.svg";
import Avatar1 from "../../assets/images/Avatar(1).svg";
import Avatar2 from "../../assets/images/Avatar(2).svg";
import Avatar3 from "../../assets/images/Avatar(3).svg";
import Avatar4 from "../../assets/images/Avatar(4).svg";
import animoji from "../../assets/images/animoji.png";
import animoji1 from "../../assets/images/animoji(1).png";
import animoji2 from "../../assets/images/animoji(2).png";
import animoji3 from "../../assets/images/animoji(3).png";
import animoji4 from "../../assets/images/animoji(4).png";
import animoji5 from "../../assets/images/animoji(5).png";

const HeroSection = () => {
  return (
    <div>
      <Nav />
      <div className={styles.heroSection}>
        <div className={styles.textArea}>
          <div className={styles.headerText}>
            <h1 className={styles.header}>
              Uniting the world,
              <br /> one video call at a time
            </h1>
            <p className={styles.description}>
              Experience the future of communication with ClearLink – where
              crystal-clear video conferencing meets unparalleled simplicity.
            </p>
          </div>
          <div className={styles.cta}>
            <ThemeProvider theme={theme}>
              <Button
                variant="contained"
                disableElevation
                color="primary"
                sx={primary}
              >
                Start your free trial
              </Button>
            </ThemeProvider>
            <div className={styles.aiCta}>
              <AiIcon />
              <p className={styles.ctaDescription}>Discover AI assistant</p>
            </div>
          </div>
          <div className={styles.review}>
            <div className={styles.reviewImages}>
              <img
                src={Avatar}
                className={styles.reviewImage}
                alt="an avatar image"
              ></img>
              <img
                src={Avatar1}
                className={styles.reviewImage}
                alt="an avatar image"
              ></img>
              <img
                src={Avatar2}
                className={styles.reviewImage}
                alt="an avatar image"
              ></img>
              <img
                src={Avatar3}
                className={styles.reviewImage}
                alt="an avatar image"
              ></img>
              <img
                src={Avatar4}
                className={styles.reviewImage}
                alt="an avatar image"
              ></img>
            </div>
            <div>
              <div className={styles.rating}>
                <Rating name="read-only" value={5} readOnly />
                <Box
                  sx={{
                    color: "#344054",
                    fontWeight: "600",
                  }}
                  className={styles.ratingText}
                >
                  5.0
                </Box>
              </div>
              <Typography component="legend" className={styles.reviewText}>
                from 3,000+ reviews
              </Typography>
            </div>
          </div>
        </div>
        <div className={styles.imageArea}>
          <div className={styles.heroImageCard}>
            <div className={styles.heroImageGrid}>
              <img src={animoji} className={styles.heroImages} alt="animoji" />
              <img src={animoji1} className={styles.heroImages} alt="animoji" />
              <img src={animoji2} className={styles.heroImages} alt="animoji" />
              <img src={animoji3} className={styles.heroImages} alt="animoji" />
              <img src={animoji4} className={styles.heroImages} alt="animoji" />
              <img src={animoji5} className={styles.heroImages} alt="animoji" />
            </div>
            <div className={styles.heroImageIcons}>
              <div className={styles.heroImageIconDiv}>
                <FaceIcon className={styles.heroImageIcon} />
              </div>
              <div className={styles.heroImageIconDiv}>
                <MessageIcon className={styles.heroImageIcon} />
              </div>
              <div className={styles.heroImageIconDiv}>
                <MicrophoneIcon className={styles.heroImageIcon} />
              </div>
              <div className={styles.heroImageIconDiv}>
                <MonitorIcon className={styles.heroImageIcon} />
              </div>
              <div className={styles.heroImageIconDiv}>
                <RecorderIcon className={styles.heroImageIcon} />
              </div>
              <div className={styles.heroImageIconDiv}>
                <SettingsIcon className={styles.heroImageIcon} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
