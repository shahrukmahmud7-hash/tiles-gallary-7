import {Roboto } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const RobotoFont = Roboto({
  subsets: ["latin"],
});


export const metadata = {
  title: "Tiles-Gallery",
  description: "The best tile shops in Bangladesh, especially in Rajshahi City",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${RobotoFont.className}  h-full antialiased`}
    >
      <body>
        <Navbar/>
        <main className="">{children} </main>
        <Footer/>

      </body>
    </html>
  );
}

