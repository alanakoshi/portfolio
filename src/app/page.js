'use client'
import { useEffect } from "react";
import About from "@/components/sections/About";
import Projects from "@/components/sections/Projects";

export default function Home() {
  useEffect(()=> {
    if ('scrollRestoration' in window.history) {
      window.history.scrollRestoration = 'manual';
    }

    const scrollTo = sessionStorage.getItem('scrollTo');
    if (scrollTo) {
      const el = document.getElementById(scrollTo);
      if (el) {
        setTimeout(() => {
          el.scrollIntoView({ behavior: 'smooth' });
          sessionStorage.removeItem('scrollTo');
        }, 100);
      }
    }
  }, []);

  return (
    <main className="">
      <About/>
      <Projects/>
    </main>
  );
}
