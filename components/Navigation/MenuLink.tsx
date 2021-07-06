import React from "react";
import Link from "next/link";

const styles = {
  menuItemWrapper: "nav-links__item nav-links__item--secondary",
  link: "nav-links__link",
};

export default function MenuLink(props: {
  id: string;
  route: string;
  name: string;
}) {
  const { id, route, name } = props;
  return (
    <li className={styles.menuItemWrapper}>
      <Link href={route}>{name}</Link>
    </li>
  );
}
