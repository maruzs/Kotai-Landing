import React from 'react';
import { navigate } from '../utils/navigation';
export const SiteLink: React.FC<React.AnchorHTMLAttributes<HTMLAnchorElement>> = ({ href = '/', onClick, children, ...props }) => (
  <a href={href} {...props} onClick={(e) => {
    onClick?.(e);
    if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey || props.target || props.download) return;
    e.preventDefault();
    navigate(href);
  }}>{children}</a>
);
