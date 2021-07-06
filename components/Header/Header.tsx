import React from "react";
import Menu from "../Navigation/Menu";
import Search from "./Search";
import Logo from "./Logo";
// import "./Header.css"

const styles = {
  header: "ge-page-header",
  headerBody: "ge-page-header__body",
  logo: "ge-link site-logo",
  headerContainer: "mdc-layout-grid mdc-layout-grid--no-vertical-padding",
  menuWrapper: "ge-page-header__menu",
  navWrapper: "ge-main-menu",
  navLinksWrapper: "ge-main-menu__navigation-links",
};

const Header = (props: { navItems: Array<object> }) => {
  return (
    <header className={styles.header}>
      <div className={styles.headerContainer}>
        <div className={styles.headerBody}>
          <Logo />
          <div className={styles.menuWrapper}>
            <Search />
            <div className={styles.navWrapper}>
              <div className={styles.navLinksWrapper}>
                <Menu {...props} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
