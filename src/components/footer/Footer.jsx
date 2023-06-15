import React from 'react'
import styles from "./footer.module.css"
import Image from 'next/image'

const Footer = () => {
  return (
    <div className={styles.container}>
      <div>©2023 Yomosa. All right reserved.</div>
      <div className={styles.social}>
        <Image src="/1.png" width={15} height={15} className={styles.icon} alt='Yomosa Facebook'/>
        <Image src="/2.png" width={15} height={15} className={styles.icon} alt='Yomosa Snap'/>
        <Image src="/3.png" width={15} height={15} className={styles.icon} alt='Yomosa Twitter'/>
        <Image src="/4.png" width={15} height={15} className={styles.icon} alt='Yomosa Youtube'/>
      </div>
    </div>
  )
}

export default Footer