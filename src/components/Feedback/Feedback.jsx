import styles from "./Feedback.module.css";

export default function Feedback({
  good,
  neutral,
  bad,
  total,
  positivePercentage,
}) {
  return (
    <div className={styles["feedback-container"]}>
      <div className={styles.feedback}>
        <p className={styles["positive-feedback"]}>Good: {good}</p>
        <p className={styles["neutral-feedback"]}>Neutral: {neutral}</p>
        <p className={styles["negative-feedback"]}>Bad: {bad}</p>
        <p className={styles["feedback-statistics"]}>Total: {total}</p>
        <p className={styles["positive-percentage"]}>
          Positive: {positivePercentage}%
        </p>
      </div>
    </div>
  );
}
