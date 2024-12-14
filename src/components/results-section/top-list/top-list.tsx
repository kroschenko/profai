"use client";

import styles from "./top-list.module.css";
import { Card, Table, Typography, Skeleton, Flex } from "antd";

const { Title, Text } = Typography;

const columns = [
  {
    title: "№",
    dataIndex: "pos",
    key: "pos",
    render: (text: string) => <div className={styles.facultyPos}>{text}</div>,
  },
  {
    title: "Университет - Факультет : Специальность",
    dataIndex: "name",
    key: "name",
    render: (text: string) => <div className={styles.facultyName}>{text}</div>,
  },
  {
    title: "Оценка, %",
    dataIndex: "score",
    key: "score",
    render: (text: string) => <div className={styles.facultyScore}>{text}</div>,
  },
];

const emojis = ["🏆", "2️⃣", "3️⃣", "4️⃣", "5️⃣"];

const TopListSkeleton = () => {
  return (
      <div className={styles.container}>
        <Flex gap={12} style={{ width: "100%" }}>
          {[10, 60, 30].map((width, i) => (
              <Flex key={i} gap={12} vertical style={{ width: width + "%" }}>
                {[...Array(5)].map((_, i) => (
                    <Skeleton.Button active key={i} style={{ width: "100%" }} />
                ))}
              </Flex>
          ))}
        </Flex>
        <Skeleton active />
      </div>
  );
};

interface TopListProps {
  faculties: string[];
  scores: number[];
  resultDesc: string;
}

export const TopList = ({ faculties, scores, resultDesc }: TopListProps) => {
  const isLoading = !(faculties.length && scores.length && resultDesc.length);

  const facultiesTopScore = scores?.at(0);

  const facultiesData = faculties.map((f, i) => ({
    key: i,
    pos: facultiesTopScore == scores[i] ? emojis[0] : emojis[i] || "🟦",
    name: f,
    score: (Math.round(scores[i] * 10000) / 100).toFixed(1),
  }));

  return (
      <div className={styles.container}>
        <Title style={{ color: "#4096ff" }} level={4}>
          Топ специальностей, которые Вам подходят
        </Title>
        {isLoading ? (
            <TopListSkeleton />
        ) : (
            <>
              <Table
                  className={styles.table}
                  columns={columns}
                  dataSource={facultiesData.filter(function (n){
                    return n.score != "0.0"
                  })}
                  pagination={false}
              />
              <Card className={styles.card}>
                <Text type="secondary">{resultDesc}</Text>
              </Card>
            </>
        )}
      </div>
  );
};
