import React from "react";

export function CarshowLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
    <div className='h-screen w-5/5 m-auto flex justify-center mt-52'>
      <div className='w-10/12 h-fit flex flex-row gap-8'>
      {children}
      </div>
    </div>
  );
}