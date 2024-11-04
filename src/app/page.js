'use client'

import Image from "next/image";
import styles from "./page.module.css";
import React from 'react';

const useMousePosition = () => {
  const [
    mousePosition,
    setMousePosition
  ] = React.useState({ x: 0, y: 0 });

  React.useEffect(() => {
    const updateMousePosition = ev => {
      setMousePosition({ x: ev.clientX, y: ev.clientY });
    };

    window.addEventListener('mousemove', updateMousePosition);

    return () => {
      window.removeEventListener('mousemove', updateMousePosition);
    };
  }, []);

  var mx=0,my=0;
  if (typeof window !== "undefined") {
    //console.log((mousePosition.x/window.innerWidth)*100);
    mx = (mousePosition.x/window.innerWidth)*100;
    my = (mousePosition.y/window.innerHeight)*100;
  }


  const divStyle = {
    backgroundImage: `radial-gradient(circle at ${mx}% ${my}%, rgb(0, 194, 144) 5%, rgb(169, 242, 163) 15%, rgb(255, 192, 34) 25%, rgb(255, 77, 36) 35%, rgb(255, 255, 255) 45%)`,
  };

  return divStyle;
};

// export default useMousePosition;

export default function Home() {
  const mousePosition = useMousePosition();

  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <h1 style={mousePosition} className={styles.logo}>TEST</h1>   
      </main>
      <footer className={styles.footer}>
        <a
          href="https://nextjs.org/learn?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/file.svg"
            alt="File icon"
            width={16}
            height={16}
          />
          Learn
        </a>
        <a
          href="https://vercel.com/templates?framework=next.js&utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/window.svg"
            alt="Window icon"
            width={16}
            height={16}
          />
          Examples
        </a>
        <a
          href="https://nextjs.org?utm_source=create-next-app&utm_medium=appdir-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            aria-hidden
            src="/globe.svg"
            alt="Globe icon"
            width={16}
            height={16}
          />
          Go to nextjs.org →
        </a>
      </footer>
    </div>
  );
}
