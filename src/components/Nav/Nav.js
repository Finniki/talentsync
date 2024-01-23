import NavItems from "../NavItems/NavItems";
import { ReactComponent as Logo } from "../../assets/images/Logo.svg";
import { Button } from "@mui/material";
import { ThemeProvider } from "@emotion/react";
import theme from "../../assets/theme/theme";
import primary from "../../assets/buttonStyles/primary";
import secondary from "../../assets/buttonStyles/secondary";
import styles from "./Nav.module.css";

const Nav = () => {
  const navItems = ["Products", "Solutions", "Resources", "Pricing"];
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
          {navItems.map((item, index) => {
            return <NavItems key={index} item={item} showArrow={index < 3} />;
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
