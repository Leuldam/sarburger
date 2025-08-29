import React from "react";
import "../style/globals.css";
import NavBar from "../component/Nav";
import Footer from "../component/Footer";



export const metadata = {
  title: "Sar",
  description: "RIDE | DELIVER | SHOP",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link
          href="https://api.fontshare.com/v2/css?f[]=cabinet-grotesk@300&f[]=kola@400&f[]=poppins@700&f[]=chillax@600&f[]=tanker@400&display=swap"
          rel="stylesheet"
        />
<link
          href="https://fonts.googleapis.com/css2?family=Post+No+Bills+Jaffna:wght@800&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
