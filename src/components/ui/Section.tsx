import React from 'react';
import { cn } from '../ui/Button';

interface SectionProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  id?: string;
  className?: string;
}

export function Section({ children, id, className, ...props }: SectionProps) {
  return (
    <section id={id} className={cn('py-20 px-6 md:px-12', className)} {...props}>
      <div className="max-w-7xl mx-auto">
        {children}
      </div>
    </section>
  );
}
