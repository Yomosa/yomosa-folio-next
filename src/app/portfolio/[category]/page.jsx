import React from "react";
import styles from "./page.module.css";
import Button from "@/components/button/Button";
import Image from "next/image";

const Category = ({ params }) => {
  return (
    <div className={styles.container}>
      <h1 className={styles.catTitle}>{params.category}</h1>
      <div className={styles.item}>
        <div className={styles.content}>
          <h1 className={styles.title}>
            Ipsum minim labore deserunt esse.
          </h1>
          <p className={styles.desc}>
            Adipisicing esse anim cupidatat excepteur eu occaecat dolor nostrud
            ullamco. Voluptate do labore ad cillum et. Lorem elit aliquip
            incididunt deserunt veniam. Ut esse officia sit mollit irure velit
            dolor fugiat fugiat nulla. Tempor tempor eu culpa magna velit
            exercitation labore amet. Ad deserunt eiusmod pariatur cupidatat
            esse officia exercitation.
          </p>
          <Button text={"See More"} url={"#"} />
        </div>
        <div className={styles.imgContainer}>
          y
          <Image
            src="https://images.pexels.com/photos/15031202/pexels-photo-15031202/free-photo-of-paysage-montagnes-lac-reflet.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
            fill={true}
            className={styles.img}
          />
        </div>
      </div>
      <div className={styles.item}>
        <div className={styles.content}>
          <h1 className={styles.title}>
            Ipsum minim labore deserunt esse.
          </h1>
          <p className={styles.desc}>
            Adipisicing esse anim cupidatat excepteur eu occaecat dolor nostrud
            ullamco. Voluptate do labore ad cillum et. Lorem elit aliquip
            incididunt deserunt veniam. Ut esse officia sit mollit irure velit
            dolor fugiat fugiat nulla. Tempor tempor eu culpa magna velit
            exercitation labore amet. Ad deserunt eiusmod pariatur cupidatat
            esse officia exercitation.
          </p>
          <Button text={"See More"} url={"#"} />
        </div>
        <div className={styles.imgContainer}>
          y
          <Image
            src="https://images.pexels.com/photos/15031202/pexels-photo-15031202/free-photo-of-paysage-montagnes-lac-reflet.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
            fill={true}
            className={styles.img}
          />
        </div>
      </div>
      <div className={styles.item}>
        <div className={styles.content}>
          <h1 className={styles.title}>
            Ipsum minim labore deserunt.
          </h1>
          <p className={styles.desc}>
            Adipisicing esse anim cupidatat excepteur eu occaecat dolor nostrud
            ullamco. Voluptate do labore ad cillum et. Lorem elit aliquip
            incididunt deserunt veniam. Ut esse officia sit mollit irure velit
            dolor fugiat fugiat nulla. Tempor tempor eu culpa magna velit
            exercitation labore amet. Ad deserunt eiusmod pariatur cupidatat
            esse officia exercitation.
          </p>
          <Button text={"See More"} url={"#"} />
        </div>
        <div className={styles.imgContainer}>
          y
          <Image
            src="https://images.pexels.com/photos/15031202/pexels-photo-15031202/free-photo-of-paysage-montagnes-lac-reflet.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
            fill={true}
            className={styles.img}
          />
        </div>
      </div>
    </div>
  );
};

export default Category;
