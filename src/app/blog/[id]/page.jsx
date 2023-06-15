import React from "react";
import styles from "./page.module.css";
import Image from "next/image";

const BlogPost = () => {
  return (
    <div className={styles.container}>
      <div className={styles.top}>
        <div className={styles.info}>
          <h1 className={styles.title}>
            Laboris do deserunt sint quis laborum sint.
          </h1>
          <p className={styles.desc}>
            Laboris ipsum mollit duis commodo esse elit. Excepteur exercitation
            non dolor laboris incididunt reprehenderit dolore. Proident proident
            amet do est excepteur cupidatat laborum magna sint dolore Lorem
            exercitation.
          </p>
          <div className={styles.author}>
            <Image
              src="https://images.pexels.com/photos/1828875/pexels-photo-1828875.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
              alt=""
              width={40}
              height={40}
              className={styles.avatar}
            />
            <span className={styles.username}>Yomosa Naozumi</span>
          </div>
        </div>
        <div className={styles.imgContainer}>
          <Image
            src={
              "https://images.pexels.com/photos/17024513/pexels-photo-17024513/free-photo-of-nourriture-bois-nature-oiseau.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            }
            alt=""
            fill={true}
            className={styles.img}
          />
        </div>
      </div>
      <div className={styles.content}>
        <p className={styles.text}>
          Mollit quis non incididunt nisi aliqua aliquip reprehenderit deserunt
          minim aliqua qui sunt incididunt. Tempor cupidatat id nostrud veniam
          id. Fugiat est adipisicing eu irure duis elit velit. Consequat
          adipisicing velit occaecat dolore anim consectetur reprehenderit sint.
          <br />
          <br />
          Officia cillum id laborum aute deserunt aliqua est tempor qui deserunt
          eiusmod qui sit. Sunt aliqua cupidatat tempor esse. Minim aliqua
          aliquip labore ut eiusmod ut tempor occaecat labore in. Qui est
          nostrud excepteur ad adipisicing. Lorem non labore aliquip eiusmod
          elit nulla pariatur ea. Magna in occaecat officia esse sunt officia
          cupidatat ullamco est do sint non excepteur reprehenderit. Aliquip
          laboris enim sint proident veniam amet irure deserunt Lorem ipsum.
          <br />
          <br />
          Ad adipisicing deserunt ullamco dolore. Quis ad cillum laboris
          adipisicing culpa sit enim reprehenderit. Incididunt adipisicing culpa
          ad ex cupidatat aliqua Lorem.
          <br />
          <br />
          Enim exercitation voluptate anim consequat ea sunt sint ipsum labore
          excepteur culpa sint magna aliqua. Ipsum et anim enim enim. Laborum
          fugiat adipisicing magna irure aute nostrud nostrud do aute. Dolor
          ullamco reprehenderit culpa sunt consectetur nisi officia cillum
          labore incididunt enim minim labore. Aliqua do velit cillum quis.
          Exercitation nisi irure duis velit id commodo anim. Anim laboris ad
          cupidatat do elit elit in.
          <br />
          <br />
          Consectetur tempor consectetur dolore sit. Aliquip labore incididunt
          tempor culpa. Mollit elit et minim consequat excepteur minim dolore
          excepteur enim velit ea exercitation nulla non. Amet magna labore
          consequat excepteur commodo Lorem eu nostrud excepteur est Lorem nisi.
          Dolor Lorem incididunt aute ea magna. Deserunt ullamco veniam do do
          sunt pariatur pariatur nisi sit et nulla.
          <br />
          <br />
          Est commodo aute enim pariatur in in consectetur voluptate officia
          velit nisi est adipisicing eiusmod. Dolore nostrud minim ut sunt sunt
          irure. Proident aliqua id exercitation eiusmod consequat elit anim
          pariatur elit. Qui do sunt labore velit sit. Ea ex est ea est mollit
          et sint mollit non enim anim occaecat dolor cillum. Aliquip ipsum sunt
          eiusmod eu quis pariatur anim. Adipisicing eu ea sit occaecat eiusmod
          deserunt ea.
        </p>
      </div>
    </div>
  );
};

export default BlogPost;
