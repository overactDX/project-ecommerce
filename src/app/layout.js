import Navbar from "@/components/Navbar";
import "./globals.css";
import { Inter } from "next/font/google";
import Provider from "@/Redux/Prvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "BEN STORE",
  description: "Generated by EMJ",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Provider>
          <Navbar />
          <div className="p-16">{children}</div>
        </Provider>
      </body>
    </html>
  );
}
