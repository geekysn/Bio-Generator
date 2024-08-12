import type { Metadata } from "next";
import { GeistSans } from 'geist/font/sans';
import "./globals.css";
import { cn } from "@/lib/utils";
import GridPattern from "@/components/magicui/animated-grid-pattern";
import { TooltipProvider } from "@/components/ui/tooltip";

// const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "AI Bio Generator",
  description: "A sleek and intuitive bio generator web application that allows users to create personalized Twitter bios based on input parameters like tone, type, and creativity. The app supports various AI models for generating bios and includes features such as emoji integration, real-time validation, and user-friendly customization options. Perfect for crafting professional or casual online personas with ease.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={cn(GeistSans.variable, "font-sans")}>
        <GridPattern width={60} height={60} className="-z-10 opacity-60"/>
        <TooltipProvider>
          {children}
        </TooltipProvider>
      </body>
    </html>
  );
}
