import PerkItem from "../PerkItem/PerkItem";
import styles from "./Trial.module.css";
import ScreenMockup from "../../assets/images/ScreenMockup.png";
import { ThemeProvider, Button } from "@mui/material";
import theme from "../../assets/theme/theme";
import primary from "../../assets/buttonStyles/primary";
import secondary from "../../assets/buttonStyles/secondary";

const Trial = () => {
  const trialPerks = [
    "30 days free trial",
    "Cancel at any time",
    "Access to all features",
    "Personalized onboarding",
  ];

  return (
    <div className={styles.trial}>
      <div className={styles.trialTextArea}>
        <h2 className={styles.trialHeader}>
          Ready to clear the path to perfect communication?
        </h2>
        <div className={styles.perkItems}>
          {trialPerks.map((perk, index) => {
            return <PerkItem key={index} perk={perk} />;
          })}
        </div>
        <div className={styles.trialButtons}>
          <ThemeProvider theme={theme}>
            <Button
              variant="contained"
              disableElevation
              color="secondary"
              sx={secondary}
            >
              Talk to Sales
            </Button>
            <Button
              variant="contained"
              disableElevation
              color="primary"
              sx={primary}
            >
              Sign up for free
            </Button>
          </ThemeProvider>
        </div>
      </div>
      <div className={styles.trialImageArea}>
        <img
          src={ScreenMockup}
          alt="a team video call in progress"
          className={styles.trialImage}
        />
      </div>
    </div>
  );
};

export default Trial;
