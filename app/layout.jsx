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
        <body
          className={`${montserrat.className} antialiased overflow-x-hidden`}
        >
          <Toaster
            toastOptions={{
              position: "bottom-right",
              classNames: {
                toast: "bg-gray-900",
                error: "text-red-500",
                success: "text-green-400",

 
              },
            }}
          />
          <Header />
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
