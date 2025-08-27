import styles from './Button.module.css';

import Link from 'next/link';

type ButtonProps = {
  href?: string;
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  children: React.ReactNode;
  className?: string;
  [key: string]: any;
};

export default function Button({ href, onClick, children, className = '', ...rest }: ButtonProps) {
  if (href) {
    return (
      <Link href={href} {...rest} className={`${styles['main-button']} ${className}`}>
        {children}
      </Link>
    );
  }
  return (
    <button type="button" onClick={onClick} className={`${styles['main-button']} ${className}`} {...rest}>
      {children}
    </button>
  );
};

