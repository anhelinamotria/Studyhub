import styles from './ProgressBar.module.css';

export default function ProgressBar({ value }) {
  const percent = Math.min(100, Math.max(0, Number(value) || 0));
  return (
    <div
      className={styles.bar}
      role="progressbar"
      aria-valuenow={percent}
      aria-valuemin={0}
      aria-valuemax={100}
    >
      <span className={styles.fill} style={{ width: `${percent}%` }} />
    </div>
  );
}
