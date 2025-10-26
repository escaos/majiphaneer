import type * as React from "react";

export function Section({
  id,
  children,
}: Readonly<{ id: string; children: React.ReactNode }>) {
  return (
    <section id={id} className="relative container py-20" data-animate>
      {children}
    </section>
  );
}
