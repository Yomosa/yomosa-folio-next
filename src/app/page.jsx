import Image from "next/image";
import styles from "./page.module.css";
import Hero from "public/hero.png";
import Button from "@/components/button/Button";

export default function Home() {
  return (
    <div className={styles.container}>
      <div className={styles.item}>
        <h1 className={styles.title}>Elit sint amet aliquip cupidatat aliqua excepteur aute sit.</h1>
        <p className={styles.des}>
          Id excepteur cillum exercitation nostrud aute sint. Incididunt ut
          cupidatat elit mollit ullamco commodo anim voluptate aliqua. Commodo
          aliquip qui commodo ipsum commodo est id et quis deserunt exercitation
          enim. Qui ut veniam ullamco veniam qui amet. Enim sit cupidatat tempor
          exercitation laborum. Ut pariatur exercitation eiusmod commodo id.
        </p>
        <Button url={"/portfolio"} text={"See Our Works"} />
      </div>
      <div className={styles.item}>
      <Image src={Hero} alt="Yomosa hero" className={styles.img} />
      </div>
    </div>
  );
}
