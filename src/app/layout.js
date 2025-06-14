import { Quicksand } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/NavBar";

const quicksand = Quicksand({
  subsets: ['latin'],
  variable: '--font-quicksand',
})

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={quicksand.className}>
      <body>
        <NavBar/>
        {children}
      </body>
    </html>
  );
}
