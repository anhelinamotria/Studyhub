import styles from './FormField.module.css';

// Поле форми з підписом. as: 'input' | 'select'
export default function FormField({ id, label, as = 'input', children, ...props }) {
  const Control = as;
  return (
    <div className={styles.field}>
      <label className={styles.label} htmlFor={id}>
        {label}
      </label>
      <Control id={id} className={styles.control} {...props}>
        {children}
      </Control>
    </div>
  );
}
