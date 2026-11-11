// variant: '' (синій) | 'r' (червоний) | 'y' (жовтий) | 'g' (зелений)
export default function Tag({ variant = '', children }) {
  return <span className={variant ? `tag ${variant}` : 'tag'}>{children}</span>;
}
