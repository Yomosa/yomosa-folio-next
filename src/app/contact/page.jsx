import React from 'react'
import styles from './page.module.css'
import Image from 'next/image'
import Button from '@/components/button/Button'

const Contact = () => {
  return (
    <div className={styles.container}>
      <div className={styles.title}>Let&apos;s Keep in Touch</div>
      <div className={styles.content}>
      <div className={styles.imgContainer}>
        <Image src={"/contact.png"} alt='' fill={true} className={styles.img} />
      </div>
      <form className={styles.form}>
      <input type="text" placeholder='name' className={styles.input}/>
      <input type="text" placeholder='email' className={styles.input}/>
      <textarea cols={30} rows={10} placeholder='message' className={styles.textarea}/>
      <Button url={"#"} text={"send"} />
      </form>
      </div>
    </div>
  )
}

export default Contact