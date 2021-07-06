import React from "react";
import MenuHeader from "./MenuHeader";
// import "./Menu.css";

const styles = {
  navLinkWrapper: "nav-links",
  navLinkContainer: "nav-links-container",
  linkItem: "nav-links__item nav-links__primary-item",
  link: "nav-links__link nav-links__primary-link",
  linkItemRelative: "nav-links__primary-item--relative",
  authMenuItem:
    "nav-links__item nav-links__primary-item nav-links__primary-item--relative nav-links__primary-item--separated",
  authLink: "nav-links__link nav-links__primary-link",
};

const Menu = (props: { navItems: Array<object> }) => {
  const { navItems } = props;
  const onLeave = (e: Event, id: string) => {
    e.preventDefault();
    const ele = document.getElementById(id);
    ele.style.display = "none";
  };

  const onEnter = (
    e: React.MouseEvent<HTMLLIElement, MouseEvent>,
    field: { hasSubMenu: any; mainTabId: string }
  ) => {
    e.preventDefault();
    if (field?.hasSubMenu) {
      const ele = document.getElementById(field.mainTabId);
      ele.style.display = "block";
    }
  };
  const ClickHandler = (field: {
    triggerAction: any;
    action: any;
    location: any;
  }) => {
    if (field.triggerAction) {
      TriggerAction(field.action);
    } else {
      NavigateTo(field.location);
    }
  };
  const NavigateTo = (to: string) => {
    window.location.href = to;
  };

  const TriggerAction = (action: string) => {};

  return (
    <ul className={`${styles.navLinkWrapper} ${styles.navLinkContainer}`}>
      {navItems?.map((navItem: any, idx: number) => {
        let linkItemStyle = styles.linkItem;
        if (navItem.subMenuColumns == 1) {
          linkItemStyle = `${styles.linkItem} ${styles.linkItemRelative}`;
        }

        if (navItem.subMenuColumns == 2) {
          linkItemStyle = `${styles.linkItem} ${styles.linkItemRelative}`;
        }
        if (navItem.showAfterLogin) {
          return (
            <li
              key={navItem.id}
              className={linkItemStyle}
              onMouseLeave={(e) => onLeave(e, navItem.mainTabId)}
              onMouseEnter={(e) => onEnter(e, navItem)}
            >
              <a href="#" className={styles.link}>
                {navItem.menuItemText}
              </a>
              <div id={navItem.mainTabId} style={{ display: "none" }}>
                <MenuHeader
                  id={navItem.mainTabId}
                  menuStyle={navItem.subMenuColumns}
                  sections={navItem.subMenuItems}
                />
              </div>
            </li>
          );
        }
      })}
    </ul>
  );
};

export default Menu;
