import React from 'react'
import styles from "./AboutCard.module.css";
import { getImageUrl } from '../../utils';

const AboutCard = ({ skill: { title, imageSrc } }) => {
    return (
        <div className={styles.container}>
            <div><img src={getImageUrl(imageSrc)} alt={`Image of ${title}`} /></div>
            <p>{title}</p>
        </div>
    )
}

export default AboutCard
