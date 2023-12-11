import type { Metadata } from "next";
import { inter } from "@/components/ui/fonts";
import "@/styles/globals.css";
import ToastProvider from "@/providers/toast-provider";

export const metadata: Metadata = {
  title: "Dental Portolio",
  description: "dentist portfolio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased scroll-smooth`}>
        <ToastProvider />
        {children}
      </body>
    </html>
  );
}
