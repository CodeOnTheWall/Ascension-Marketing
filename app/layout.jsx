import Footer from "./[components]/Header-And-Footer/Footer";
import Header from "./[components]/Header-And-Footer/Header";

import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head />
      <body className="bg-[#a9d6e5] text-white">
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  );
}
