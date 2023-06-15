import React from "react";
import styles from "./page.module.css";
import Image from "next/image";
import Button from "@/components/button/Button";

const About = () => {
  return (
    <div className={styles.container}>
      <div className={styles.imgContainer}>
        <Image
          src="https://images.pexels.com/photos/1423600/pexels-photo-1423600.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
          alt=""
          fill={true}
          className={styles.img}
        />
        <div className={styles.imgText}>
          <h1 className={styles.imgTitle}>Lorem Ipsum</h1>
          <h2 className={styles.imgDesc}>
            Et qui pariatur elit veniam exercitation dolore velit.
          </h2>
        </div>
      </div>
      <div className={styles.textContainer}>
        <div className={styles.item}>
          <h1 className={styles.title}>Who Are We?</h1>
          <p className={styles.desc}>
            Fugiat cupidatat et proident esse exercitation cupidatat anim. Eu
            nulla culpa sint dolore officia veniam mollit adipisicing ea sint
            enim. Proident ex elit officia minim enim Lorem reprehenderit ea
            anim aute excepteur qui exercitation sint.
            <br /> <br />
            Et anim nulla labore aliquip nisi sunt occaecat consequat. Voluptate
            do sit eu deserunt ex elit pariatur sint laboris adipisicing
            cupidatat. Ullamco deserunt veniam ut in quis nostrud sint sit eu
            minim labore enim Lorem amet. Ex ex sint amet nulla commodo minim ad
            esse occaecat velit. Aliqua cupidatat culpa Lorem aliquip magna.
            Aliquip do nostrud consectetur proident ex ut velit voluptate labore
            quis reprehenderit.
            <br />
            <br />
            Aliquip id Lorem eiusmod proident proident nisi fugiat. Adipisicing
            velit do non dolore veniam et reprehenderit sint occaecat consequat
            proident. Eiusmod mollit labore incididunt adipisicing ad velit
            nostrud aute aute nulla. Proident laborum eu eu cupidatat id ipsum
            aute ex fugiat consectetur qui.
          </p>
        </div>
        <div className={styles.item}>
          <h1 className={styles.title}>Who We Do?</h1>
          <p className={styles.desc}>
            Dolore ipsum nostrud non anim ex. Lorem quis velit reprehenderit
            pariatur non exercitation. Amet reprehenderit commodo irure fugiat
            laborum mollit ex. Nostrud laborum fugiat exercitation eu labore ex
            laboris fugiat magna do in esse. Laboris laborum nulla in ex aliquip
            sint aliquip ut.
            <br /> <br />
            Ex officia laborum ullamco commodo exercitation dolore nisi sint
            consequat est occaecat laboris. Occaecat reprehenderit duis nisi
            minim consectetur cillum reprehenderit mollit occaecat deserunt non
            esse. Consectetur ut est reprehenderit exercitation id cillum dolor
            duis in aute ad mollit.
            <br />
            <br /> - Deserunt laborum esse esse commodo reprehenderit amet ullamco qui qui anim ut ad.
            <br />
            <br /> - Consectetur Lorem culpa Lorem culpa eiusmod sunt incididunt proident.
            <br />
            <br /> - Sit esse nisi enim proident labore.
          </p>
          <Button url={"contact"} text={"Contact"} />
        </div>
      </div>
    </div>
  );
};

export default About;
