import { Montserrat } from "next/font/google";
import "./globals.css";
import Header from "./components/Header";
import { ClerkProvider } from "@clerk/nextjs";
import { Toaster } from "sonner";

const montserrat = Montserrat({
  weight: ["400", "700", "800"],
  subsets: ["latin"],
});

export const metadata = {
  title: "shopEase",
  description: "Your one stop shop for all your needs",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en" className="bg-neutral-200">
        <body className={montserrat.className}>
          <Toaster />
          <Header />
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
