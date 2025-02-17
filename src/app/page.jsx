"use client"
import Hero from "@src/components/home/Hero";
import styles from "./page.module.css";
import { useEffect } from "react";


export default function Home() {
  useEffect(() => {
    async function fetchProducts() {
      try {
        const response = await fetch('/api/products'); // Adjust the path based on your setup
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        console.log(data)
      } catch (error) {
      }
    }

    fetchProducts();
  }, []);


  return (
    <main className={styles.main}>
  <Hero/>
    </main>
  );
}
