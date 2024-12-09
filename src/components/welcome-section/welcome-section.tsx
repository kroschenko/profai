"use client";

import { Typography } from "antd";
import styles from "./welcome-section.module.css";
import { Background } from "./background/background";

interface WelcomeSectionProps {} // eslint-disable-line

export const WelcomeSection = ({}: WelcomeSectionProps) => {
  return (
    <section className={styles.container}>
      <Background />
      <div className={styles.content}>
        <div className={styles.info}>
          <Typography.Title
            style={{ fontSize: 64, fontWeight: 600, color: "#fff" }}
          >
            Профориентация с <span>AI</span>
          </Typography.Title>
          <Typography.Text
            style={{
              fontSize: 24,
              color: "#fff",
              textAlign: "center",
              marginBottom: 40,
            }}
          >
            Узнай к каким профессиям у вас есть предрасположенность с помощью
            современных технологий искусственного интеллекта
          </Typography.Text>
          <button
            className={styles.start}
            onClick={() => {
              window.scrollBy({
                top: window.innerHeight,
                behavior: "smooth",
              });
            }}
          >
            <Typography.Text
              style={{ fontSize: 32, fontWeight: 600, color: "#4096ff" }}
            >
              НАЧАТЬ
            </Typography.Text>
          </button>
        </div>
        <div className={styles.box}></div>
      </div>
    </section>
  );
};
