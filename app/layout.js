import { Inter } from "next/font/google";
import "./globals.css";
import { AuthProvider } from "./components/provider/Provider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Blogra Top blogging site",
  description: "Blogra is the top branding site to make blogs",
};

export default function RootLayout({ children }) {
  return (

    <html lang="en">
      <body className={inter.className}>
        <AuthProvider>
        {children}
        </AuthProvider>
        </body>
    </html>
  );
}
