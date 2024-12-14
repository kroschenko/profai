import { useEffect, useState } from "react";
import styles from "./select-question.module.css";
import { Radio, Space, Typography } from "antd";

interface SelectQuestionProps {
  text: string;
  options: string[];
  setValue: (n: string[]) => void;
  saveValue: (n: string[]) => void;
  value: string[];
}

export const SelectQuestion = ({
  text,
  options,
  setValue,
  saveValue,
  value,
}: SelectQuestionProps) => {
  const onChange = async (value: string) => {
    setValue([value]);
    saveValue([value]);
  };

  const [selected, setSelected] = useState(value[0]);

  useEffect(() => {
    setSelected(value[0]);
  }, [value]);

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <Typography.Title
          style={{ margin: "16px 32px 12px", fontSize: "24px", color: "#fff" }}
          level={1}
        >
          {text}
        </Typography.Title>
        <div className={styles.optionsContainer}>
          <Radio.Group
            className={styles.select}
            onChange={(e) => {
              setSelected(e.target.value);
              onChange(e.target.value);
            }}
            value={selected}
          >
            <Space direction="vertical">
              {options.map((opt, i) => (
                <Radio key={i} style={{ color: "black" }} value={i}>
                  <div className={styles.text}>
                    <span className={styles.major}>{opt.split("–")[0]}</span>–
                    <span className={styles.minor}>{opt.split("–")[1]}</span>
                  </div>
                </Radio>
              ))}
            </Space>
          </Radio.Group>
        </div>
      </div>
    </div>
  );
};
