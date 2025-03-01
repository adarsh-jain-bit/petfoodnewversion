"use client"
import React from 'react';

import Hero from "@src/components/home/Hero";
import styles from "./page.module.css";
import { useEffect } from "react";


export default function Home() {
  useEffect(() => {
    async function fetchProducts() {
      try {
        const response = await fetch('/api/products'); 
        if (!response.ok) {
      
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        console.log(data)
      } catch (error) {
        console.error("Error fetching products:", error);
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
