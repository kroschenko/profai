"use client";

import styles from "./results-section.module.css";
import { Typography } from "antd";
import { Chart } from "./chart/chart";
import { TopList } from "./top-list/top-list";
import { useAppSelector } from "@/store";

const { Title } = Typography;

interface ResultsSectionProps {} // eslint-disable-line

export const ResultsSection = ({}: ResultsSectionProps) => {
  const { description, vector } = useAppSelector((store) => store.test);
  const { test, ai, final } = useAppSelector((store) => store.result.chart);
  const { description: resultDesc, faculties } = useAppSelector(
    (store) => store.result
  );

  return (
    <>
      {description && vector && (
        <section className={styles.container}>
          <Title style={{ color: "#4096ff" }} level={1}>
            Ваши результаты тестирования
          </Title>
          <Chart test={test} ai={ai} final={final} />
          <TopList
            faculties={faculties.map((f) => f.name)}
            scores={faculties.map((f) => f.score)}
            resultDesc={resultDesc}
          />
        </section>
      )}
    </>
  );
};
