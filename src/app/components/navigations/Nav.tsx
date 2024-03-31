import Link from "next/link";
import { NAV_CATEGORY } from "@/constants/navigation";

import styles from "./Nav.module.scss";

export default function Nav() {
  return (
    <header className={styles.container}>
      <Link href={"/"}>socon</Link>
      <nav>
        <ul>
          {NAV_CATEGORY.map((item, idx) => (
            <li key={`${idx}_${item.name}`}>
              <Link href={item.href}>{item.name}</Link>
            </li>
          ))}
        </ul>
      </nav>
      {/* <span>메뉴버튼</span> */}
    </header>
  );
}
