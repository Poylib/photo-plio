import Link from "next/link";
import { NAV_CATEGORY } from "@/constants/navigation";
import Hamburger from "./Hamburger";
import Logo from "./Logo";

import styles from "./Nav.module.scss";

export default function Nav() {
  return (
    <>
      <header className={styles.container}>
        <Logo />
        <nav>
          <ul>
            {NAV_CATEGORY.map((item, idx) => (
              <li key={`${idx}_${item.name}`}>
                <Link href={item.href}>{item.name}</Link>
              </li>
            ))}
          </ul>
        </nav>
        <Hamburger />
      </header>
    </>
  );
}
