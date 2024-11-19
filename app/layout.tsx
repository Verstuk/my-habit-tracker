import type { Metadata } from "next";
import { Open_Sans, Montserrat } from "next/font/google";
import "./globals.css";

const montserrant = Montserrat({
  subsets: ["cyrillic"],
  variable: "--font-montserrant",
  weight: ["400", "500", "600", "700"],
});


export const metadata: Metadata = {
  title: "My Habit Tracker",
  description: "Мой трекер привычек",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={montserrant.className}
      >
        {children}
      </body>
    </html>
  );
}
