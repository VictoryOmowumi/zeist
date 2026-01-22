import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

const neueMontreal = localFont({
  src: [
    {
      path: "../../public/fonts/NeueMontreal-Regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../../public/fonts/NeueMontreal-Medium.otf",
      weight: "500",
      style: "normal",
    },
  ],
  variable: "--font-neue-montreal",
});

export const metadata: Metadata = {
  title: "Zeist - Cloud Sandboxes for AI Agents",
  description: "Isolated cloud sandboxes for agent code, data pipelines, and workloads.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${neueMontreal.variable} ${neueMontreal.className} font-sans bg-background text-foreground antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem={false}
          disableTransitionOnChange
        >
          <div className="flex min-h-screen flex-col">
            <Navbar />
            
            <main className="flex-1 border-x border-white/10">
              {children}
            </main>
            
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}