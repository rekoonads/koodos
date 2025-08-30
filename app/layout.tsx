import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { ClerkProvider } from "@clerk/nextjs";
import { AnimatedSidebar } from "@/components/animated-sidebar";
import { IGNNavbar } from "@/components/ign-navbar";
import Footer from "@/components/footer";



const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-jetbrains-mono",
});

export const metadata: Metadata = {
  title: "KOODOS - Gaming & Tech Community",
  description: "Your ultimate destination for gaming news, reviews, guides, and tech insights. Join the KOODOS community today!",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en" suppressHydrationWarning>
        <body className={`${inter.variable} ${jetbrainsMono.variable} font-sans antialiased`} suppressHydrationWarning>
          <ThemeProvider
            attribute="class"
            defaultTheme="light"
            enableSystem
            disableTransitionOnChange
          >
            <div className="min-h-screen bg-black text-white">
              <AnimatedSidebar />
              <div className="lg:ml-72 h-screen overflow-y-auto" id="main-content">
                <main className="bg-black text-white">
                  {children}
                </main>
                <Footer />


              </div>
            </div>
          </ThemeProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}