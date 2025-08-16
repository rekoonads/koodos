import type { Metadata } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import { ClerkProvider } from "@clerk/nextjs";
import { AnimatedSidebar } from "@/components/animated-sidebar";
import { TopHeader } from "@/components/top-header";
import { Footer } from "@/components/footer";

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
  keywords: "gaming, tech, reviews, guides, community, news, esports",
  authors: [{ name: "KOODOS Team" }],
  creator: "KOODOS",
  publisher: "KOODOS",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://koodos.com"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://koodos.com",
    title: "KOODOS - Gaming & Tech Community",
    description: "Your ultimate destination for gaming news, reviews, guides, and tech insights.",
    siteName: "KOODOS",
    images: [
      {
        url: "/og-image.png",
        width: 1200,
        height: 630,
        alt: "KOODOS - Gaming & Tech Community",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "KOODOS - Gaming & Tech Community",
    description: "Your ultimate destination for gaming news, reviews, guides, and tech insights.",
    images: ["/twitter-image.png"],
    creator: "@koodos",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  verification: {
    google: "your-google-verification-code",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en" suppressHydrationWarning>
        <body className={`${inter.variable} ${jetbrainsMono.variable} font-sans antialiased`}>
          <ThemeProvider
            attribute="class"
            defaultTheme="light"
            enableSystem
            disableTransitionOnChange
          >
            <div className="min-h-screen bg-background">
              <AnimatedSidebar />
              <div className="lg:ml-64">
                <TopHeader />
                <main className="pt-16 lg:pt-20 bg-background">
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
