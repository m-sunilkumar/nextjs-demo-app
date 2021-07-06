import React from "react";
import MenuSection from "./MenuSection";

const styles = {
  sectionWrapper:
    "ge-primary-navigation-expandable ge-primary-navigation-expandable--col4 primary-navigation-expandable-container ge-primary-navigation-expandable-animate-enter-done",
  section: "ge-primary-navigation-expandable__body",
  sectionWrapperVerticalCol1:
    "ge-primary-navigation-expandable ge-primary-navigation-expandable--col1 ge-primary-navigation-expandable--align-right primary-navigation-expandable-container ge-primary-navigation-expandable-animate-enter-done",
  sectionWrapperVerticalCol2:
    "ge-primary-navigation-expandable ge-primary-navigation-expandable--col2 ge-primary-navigation-expandable--align-left primary-navigation-expandable-container ge-primary-navigation-expandable-animate-enter-done",
};

interface MenuProps {
  menuStyle: Number;
  sections: Array<object>;
}

const MenuHeader = ({ menuStyle, sections }: MenuProps) => {
  let sectionWrapper = styles.sectionWrapper;
  if (menuStyle == 1) {
    sectionWrapper = styles.sectionWrapperVerticalCol1;
  }

  if (menuStyle == 2) {
    sectionWrapper = styles.sectionWrapperVerticalCol2;
  }
  return (
    <>
      <div className={sectionWrapper}>
        <div className={styles.section}>
          {sections?.map(
            (section: {
              id: null | undefined | string;
              sectionId: string;
              subMenuLinks: Array<object>;
              subTitle: string;
            }) => (
              <MenuSection
                key={section.id}
                id={section.sectionId}
                links={section.subMenuLinks}
                name={section.subTitle}
              />
            )
          )}
        </div>
      </div>
    </>
  );
};
export default MenuHeader;
