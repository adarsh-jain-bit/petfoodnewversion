import React from "react"


import "./globals.css";
import Header from "./layouts/header/Header";
import Footer from "./layouts/footer/Footer";
import AppProviders from "../components/global/provider/AppProvider";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export const metadata = {
  title: 'Petsy',
  icons: {
    icon: '/public/favicon.ico',
  },
};
export default function RootLayout({
  children,
}) {
  return (
    <html lang="en">
      <head>
  <link rel="icon" href="/public/favicon.ico  " />
  <title>Petsy</title>
</head>
      <body>
        <AppProviders>
        <Header/>
        <ToastContainer />
      {children}
      <Footer/>
        </AppProviders>

      </body>
    </html>
  );
}
