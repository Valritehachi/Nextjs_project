import type { Metadata } from "next";
import "./globals.css";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import ReactQueryClientProvider from "@/components/query-client-provider";
import ReduxProvider from "@/components/redux-provider";
import ClerkProviderWithTheme from "@/components/clerk-provider";
import Navbar from "@/components/Navbar";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { Toaster } from "@/components/ui/toaster";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  style: ["normal"],
});

export const metadata: Metadata = {
  title: "PlatePlan",
  description: "Meal planning app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="h-dvh" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <ClerkProviderWithTheme>
            <ReduxProvider>
              <ReactQueryClientProvider>
                <div className="bg-accent ">
                  <div className="min-h-screen flex flex-col w-full  mx-auto">
                    {children}
                    <Toaster />
                  </div>
                </div>
              </ReactQueryClientProvider>
            </ReduxProvider>
          </ClerkProviderWithTheme>
        </ThemeProvider>
      </body>
    </html>
  );
}
