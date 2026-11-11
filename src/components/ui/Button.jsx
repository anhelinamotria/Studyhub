export default function Button({
  variant = 'primary',
  full = false,
  type = 'button',
  children,
  ...props
}) {
  const className = ['btn', variant === 'outline' ? 'o' : '', full ? 'full' : '']
    .filter(Boolean)
    .join(' ');
  return (
    <button type={type} className={className} {...props}>
      {children}
    </button>
  );
}
