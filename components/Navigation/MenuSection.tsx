import React from "react";
import MenuLink from "./MenuLink";

const styles = {
  wrapper: "nav-links",
  title: "nav-links__heading",
};

export default function MenuSection(props: {
  id: string;
  links: Array<object>;
  name: string;
}) {
  const { id, links, name } = props;
  return (
    <>
      {(id || name) && <div className={styles.title}>{name}</div>}
      {
        <ul className={styles.wrapper}>
          {links.map((link) => (
            <MenuLink
              key={link.id}
              id={link.id}
              route={link.route}
              name={link.name}
            />
          ))}
        </ul>
      }
    </>
  );
}
