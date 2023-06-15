import React from "react";
import styles from "./page.module.css";
import Link from "next/link";
import Image from "next/image";

const Blog = () => {
  return (
    <div className={styles.mainContainer}>
      <Link href={"/blog/testId"} className={styles.container}>
        <div className={styles.imageContainer}>
          <Image
            src={"https://images.pexels.com/photos/17024513/pexels-photo-17024513/free-photo-of-nourriture-bois-nature-oiseau.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"}
            alt=""
            width={400}
            height={250}
            className={styles.image}
          />
        </div>
        <div className={styles.content}>
          <h1 className={styles.title}>Magna ex ut exercitation.</h1>
          <div className={styles.desc}>Commodo labore laborum laboris labore sunt. Ut sit irure cillum laboris anim ut deserunt sit officia ea voluptate velit. Non duis reprehenderit ut laborum aliqua est tempor qui. Exercitation labore fugiat cupidatat duis in. Occaecat adipisicing deserunt voluptate veniam aute ullamco cillum et.</div>
        </div>
      </Link>
      <Link href={"/blog/testId"} className={styles.container}>
        <div className={styles.imageContainer}>
          <Image
            src={"https://images.pexels.com/photos/17024513/pexels-photo-17024513/free-photo-of-nourriture-bois-nature-oiseau.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"}
            alt=""
            width={400}
            height={250}
            className={styles.image}
          />
        </div>
        <div className={styles.content}>
          <h1 className={styles.title}>Magna ex ut exercitation.</h1>
          <div className={styles.desc}>Commodo labore laborum laboris labore sunt. Ut sit irure cillum laboris anim ut deserunt sit officia ea voluptate velit. Non duis reprehenderit ut laborum aliqua est tempor qui. Exercitation labore fugiat cupidatat duis in. Occaecat adipisicing deserunt voluptate veniam aute ullamco cillum et.</div>
        </div>
      </Link>
      <Link href={"/blog/testId"} className={styles.container}>
        <div className={styles.imageContainer}>
          <Image
            src={"https://images.pexels.com/photos/17024513/pexels-photo-17024513/free-photo-of-nourriture-bois-nature-oiseau.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"}
            alt=""
            width={400}
            height={250}
            className={styles.image}
          />
        </div>
        <div className={styles.content}>
          <h1 className={styles.title}>Magna ex ut exercitation.</h1>
          <div className={styles.desc}>Commodo labore laborum laboris labore sunt. Ut sit irure cillum laboris anim ut deserunt sit officia ea voluptate velit. Non duis reprehenderit ut laborum aliqua est tempor qui. Exercitation labore fugiat cupidatat duis in. Occaecat adipisicing deserunt voluptate veniam aute ullamco cillum et.</div>
        </div>
      </Link>
      <Link href={">testId"} className={styles.container}>
        <div className={styles.imageContainer}>
          <Image
            src={"https://images.pexels.com/photos/17024513/pexels-photo-17024513/free-photo-of-nourriture-bois-nature-oiseau.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"}
            alt=""
            width={400}
            height={250}
            className={styles.image}
          />
        </div>
        <div className={styles.content}>
          <h1 className={styles.title}>Magna ex ut exercitation.</h1>
          <div className={styles.desc}>Commodo labore laborum laboris labore sunt. Ut sit irure cillum laboris anim ut deserunt sit officia ea voluptate velit. Non duis reprehenderit ut laborum aliqua est tempor qui. Exercitation labore fugiat cupidatat duis in. Occaecat adipisicing deserunt voluptate veniam aute ullamco cillum et.</div>
        </div>
      </Link>
    </div>
  );
};

export default Blog;
