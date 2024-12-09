import { useEffect, useState } from "react";
import styles from "./background.module.css";

const MIN_R = 10;
const MAX_SCALE = 1;
const MIN_SCALE = 0.01;
const CHAOS_FACTOR = 20;

interface BackgroundProps {} // eslint-disable-line

export const Background = ({}: BackgroundProps) => {
  const [, setImagePoses] = useState<
    {
      x: number;
      y: number;
      r: number;
      s: number;
    }[]
  >([]);

  const initialPosInScreen = (i: number) => {
    const w = window.innerWidth;
    const h = window.innerHeight;
    const cx = w / 2;
    const cy = h / 2;

    const angle = (2 * Math.PI * i) / 12;
    const R = Math.random() * (Math.max(w, h) / 2 - MIN_R) + MIN_R;
    const x = cx + R * Math.cos(angle);
    const y = cy + R * Math.sin(angle);
    const s = MIN_SCALE + (R / (Math.max(w, h) / 2)) * (MAX_SCALE - MIN_SCALE);

    return { x, y, r: R, s };
  };

  const initialPosOutOfScreen = (i: number) => {
    const w = window.innerWidth;
    const h = window.innerHeight;
    const R = Math.max(w, h) / 2 + 200;
    const angle = (2 * Math.PI * i) / 12;
    const x =
      w / 2 + R * Math.cos(angle) + (Math.random() - 0.5) * CHAOS_FACTOR;
    const y =
      h / 2 + R * Math.sin(angle) + (Math.random() - 0.5) * CHAOS_FACTOR;

    return { x, y, r: R, s: MAX_SCALE };
  };

  const nextPos = (prevPos: { x: number; y: number; r: number; s: number }) => {
    const w = window.innerWidth;
    const h = window.innerHeight;
    const cx = w / 2;
    const cy = h / 2;

    const { x, y, r, } = prevPos;

    if (r <= MIN_R) {
      return initialPosOutOfScreen(Math.random() * 12);
    }

    const newR = r - 3;
    const angle = Math.atan2(y - cy, x - cx);
    const newX = cx + newR * Math.cos(angle);
    const newY = cy + newR * Math.sin(angle);

    const scale =
      MIN_SCALE + (newR / (Math.max(w, h) / 2)) * (MAX_SCALE - MIN_SCALE);

    return { x: newX, y: newY, r: newR, s: scale };
  };

  useEffect(() => {
    setImagePoses(Array.from({ length: 12 }, (_, i) => initialPosInScreen(i)));

    const intervalId = setInterval(() => {
      setImagePoses((prevPoses) => prevPoses.map((pos) => nextPos(pos)));
    }, 25);

    const handleResize = () => {
      setImagePoses((prevPoses) =>
        prevPoses.map((_, i) => initialPosInScreen(i))
      );
    };

    window.addEventListener("resize", handleResize);

    return () => {
      clearInterval(intervalId);
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div className={styles.container} style={{ perspective: "1000vw" }}>
    </div>
  );
};
