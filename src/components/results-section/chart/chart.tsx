"use client";

import {
  PolarAngleAxis,
  PolarGrid,
  PolarRadiusAxis,
  Radar,
  RadarChart,
  ResponsiveContainer,
} from "recharts";
import styles from "./chart.module.css";
import { qualities } from "@/core/questions";
import { useMemo, useState } from "react";
import { Flex, Radio, Skeleton } from "antd";

const ChartSkeleton = () => {
  return (
    <div className={styles.container}>
      <div className={styles.chart}>
        <Skeleton.Button
          active
          shape="circle"
          style={{ width: 600, height: 600, marginTop: 80 }}
        />
        <Flex gap={12} style={{ marginTop: 80 }}>
          <Skeleton.Button active shape="square" />
          <Skeleton.Button active shape="square" />
          <Skeleton.Button active shape="square" />
        </Flex>
      </div>
    </div>
  );
};

interface ChartProps {
  ai: number[];
  test: number[];
  final: number[];
}

export const Chart = ({ ai, test, final }: ChartProps) => {
  const [chart, setChart] = useState("final");

  const isLoading = !(ai.length && test.length && final.length);

  const data = useMemo(
    () =>
      qualities.map((q, i) => {
        return {
          name: q.shortName,
          test: test[i],
          ai: ai[i],
          final: final[i],
          fullMark: 1,
        };
      }),
    [ai, test, final]
  );

  if (isLoading) {
    return <ChartSkeleton />;
  }

  return (
    <div className={styles.container}>
      <div className={styles.chart}>
        <ResponsiveContainer width="100%" height="100%">
          <RadarChart cx="50%" cy="50%" outerRadius="70%" data={data}>
            <PolarGrid />
            <PolarAngleAxis dataKey="name" />
            <PolarRadiusAxis domain={[0, 1]} />
            {chart === "test" && (
              <Radar
                dataKey="test"
                stroke="#4096ff"
                fill="#69b1ff"
                fillOpacity={0.3}
              />
            )}
            {chart === "ai" && (
              <Radar
                dataKey="ai"
                stroke="#8040ff"
                fill="#d269ff"
                fillOpacity={0.3}
              />
            )}
            {chart === "final" && (
              <Radar
                dataKey="final"
                stroke="#2b9f37"
                fill="#69ff96"
                fillOpacity={0.3}
              />
            )}
          </RadarChart>
        </ResponsiveContainer>
      </div>
      <Radio.Group
        style={{ position: "absolute", bottom: 20 }}
        defaultValue={chart}
        size="large"
        onChange={(e) => setChart(e.target.value)}
      >
        <Radio.Button value="test">
          <span style={{ color: "#4096ff" }}>Тест</span>
        </Radio.Button>
        <Radio.Button value="ai">
          <span style={{ color: "#8040ff" }}>AI</span>
        </Radio.Button>
        <Radio.Button value="final">
          <span style={{ color: "#2b9f37" }}>Итог</span>
        </Radio.Button>
      </Radio.Group>
    </div>
  );
};
