import styles from './Grid.module.css';

// cols: 2 | 3 | 'wide' (широка ліва колонка + вузька права)
export default function Grid({ cols = 2, children }) {
  const variant = cols === 'wide' ? styles.wide : styles[`cols${cols}`];
  return <div className={`${styles.grid} ${variant}`}>{children}</div>;
}
