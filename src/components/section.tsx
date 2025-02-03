import React, { FC, HTMLAttributes } from 'react';

interface SectionProps extends HTMLAttributes<HTMLDivElement> {
  title: string;
  children: React.ReactNode;
}

const Section: FC<SectionProps> = ({ title, children, ...props }) => {
  return (
    <section {...props}>
      <h2>{title}</h2>
      {children}
    </section>
  );
};

export default Section;