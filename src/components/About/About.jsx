import React from "react";

import styles from "./About.module.css";
import { getImageUrl } from "../../utils";
import skills from "../../data/skills";
import AboutCard from "./AboutCard";

export const About = () => {
    return (
        <section className={styles.container} id="about">
            <div className={styles.mainPart}>
                <div className={styles.portrait}>
                    <h2 className={styles.title}>About</h2>
                    <img src={getImageUrl("about/aboutImage.png")} alt="My cartoon portrait" />
                </div>
                <ul className={styles.aboutItems}>
                    <li className={styles.aboutItem}>
                        <img src={getImageUrl("about/program.svg")} alt="termial logo" />
                        <div>
                            <h3>Programmer</h3>
                            <p>I'm a skilled programmer proficient in Python, C#, and Rust, with a passion for creating complex but intriguing projects.</p>
                        </div>
                    </li>
                    <li className={styles.aboutItem}>
                        <img src={getImageUrl("about/AI Engineer.svg")} alt="AI logo" />
                        <div>
                            <h3>AI Engineer</h3>
                            <p>I’m an AI engineer specialize in deep learning, developing intelligent systems to solve complex problems.</p>
                        </div>
                    </li>
                    <li className={styles.aboutItem}>
                        <img src={getImageUrl("about/Game Maker.svg")} alt="game logo" />
                        <div>
                            <h3>Game Maker</h3>
                            <p>I'm an indie game developer, using Godot and Bevy to Build creative and engaging gaming experiences.</p>
                        </div>
                    </li>
                </ul>
            </div>
            <ul className={styles.skills}>
                {
                    skills.map((skill, id) => {
                        return <AboutCard key={id} skill={skill} />
                    })
                }
            </ul>
        </section>
    );
};