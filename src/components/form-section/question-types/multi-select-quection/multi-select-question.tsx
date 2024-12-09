import styles from "./multi-select-question.module.css";
import { Checkbox, Space, Typography } from "antd";

interface MultiSelectQuestionProps {
  text: string;
  options: string[];
  setValue: (n: string[]) => void;
  value: string[];
}

export const MultiSelectQuestion = ({
  text,
  options,
  setValue,
  value,
}: MultiSelectQuestionProps) => {
  const onChange = (newValues: string[]) => {
    setValue(newValues);
  };

  return (
    <div className={styles.wrapper}>
      <div className={styles.container}>
        <Typography.Title
          style={{ marginLeft: 32, fontSize: "24px", color: "#fff" }}
          level={1}
        >
          {text}
        </Typography.Title>
        <div className={styles.optionsContainer}>
          <Checkbox.Group onChange={onChange} value={value}>
            <Space direction="vertical">
              {options.map((opt, i) => (
                <Checkbox
                  key={i}
                  value={i}
                  checked={value.includes(i + "")}
                  style={{ fontSize: "20px", color: "black" }}
                >
                  {opt}
                </Checkbox>
              ))}
            </Space>
          </Checkbox.Group>
        </div>
      </div>
    </div>
  );
};
