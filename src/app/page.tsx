import SideNav from "@/components/sideNav/SideNav";
import styles from "./page.module.scss";

export default function Home() {
  return (
    <div className={styles.page}>
      <SideNav />
      {"I'll DO IT"}
    </div>
  );
}
