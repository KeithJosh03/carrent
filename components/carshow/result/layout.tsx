import React from "react";

export function ResultCarLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
    <div className='w-10/12 flex flex-col gap-4'>
        {children}
    </div>
  );
  }
