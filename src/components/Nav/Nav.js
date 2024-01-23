import NavItems from "../NavItems/NavItems";
import { ReactComponent as Logo } from "../../assets/images/Logo.svg";
import { Button } from "@mui/material";
import { ThemeProvider } from "@emotion/react";
import theme from "../../assets/theme/theme";
import primary from "../../assets/buttonStyles/primary";
import secondary from "../../assets/buttonStyles/secondary";
import styles from "./Nav.module.css";

const Nav = () => {
  const navItems = {
    Products: "clearlinkproject.netlify.app",
    Solutions: "clearlinkproject.netlify.app",
    Resource: "clearlinkproject.netlify.app",
    Pricing: "clearlinkproject.netlify.app",
  };
  return (
    <div className={styles.nav}>
      <div className={styles.brand}>
        <Logo className={styles.logo} />
        <p className={styles.brandName}>
          ClearLink<span className={styles.blueDot}>.</span>
        </p>
      </div>
      {
        <div className={styles.navItems}>
          {Object.entries(navItems).map((navItems, index) => {
            const [linkName, link] = navItems;
            return (
              <NavItems
                key={linkName}
                linkName={linkName}
                link={link}
                showArrow={index < 3}
              />
            );
          })}
        </div>
      }
      <div className={styles.buttons}>
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
  );
};

export default Nav;
