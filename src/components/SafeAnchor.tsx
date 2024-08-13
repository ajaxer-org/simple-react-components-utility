import React from "react";

type AnchorProps = React.AnchorHTMLAttributes<HTMLAnchorElement> & {
  underline?: boolean; // ? Made optional
  className?: string; // Allow additional Tailwind classes
};
export default function SafeAnchor({
  href,
  title,
  children,
  underline = false,
  className = "",
  ...props
}: AnchorProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      title={title}
      className={`${underline ? "hover:underline" : ""} ${className}`}
    >
      {children}
    </a>
  );
}
