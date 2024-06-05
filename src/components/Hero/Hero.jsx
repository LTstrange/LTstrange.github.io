import React from 'react'
import { getImageUrl } from '../../utils'
import styles from './Hero.module.css'

export const Hero = () => {
    return (
        <section className={styles.container}>
            <div className={styles.content}>
                <h1 className={styles.title}>Hi, I'm LTstrange!</h1>
                <p className={styles.description}>I'm a graduate student at the School of Computer Science,
                    Shenyang Aerospace University. Reach out if you'd like to learn more!</p>
                <a className={styles.contactBtn} href="mailto:ltstrange_swh@qq.com">Contact Me</a>
            </div>
            <img className={styles.heroImg} src={getImageUrl("hero/heroImage.svg")} alt="Hero image of me" />
            <div className={styles.topBlur} />
            <div className={styles.bottomBlur} />
        </section>
    )
};


