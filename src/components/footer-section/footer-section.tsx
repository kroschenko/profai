"use client";

import styles from "./footer-section.module.css";
import { Typography } from "antd";

const { Text } = Typography;

interface FooterSectionProps {} // eslint-disable-line

export const FooterSection = ({}: FooterSectionProps) => {
  return (
    <section className={styles.container}>
      <footer className={styles.footer}>
        <Text style={{ color: "#fff" }}>
          БрГТУ, БрГУ
        </Text>
        <Text style={{ color: "#fff" }}>
          Ноябрь 2024
        </Text>
      </footer>
    </section>
  );
};
