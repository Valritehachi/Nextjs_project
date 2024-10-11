"use client";

import { ClerkProvider } from "@clerk/nextjs";
import { useTheme } from "next-themes";
import { dark } from "@clerk/themes";

export default function ClerkProviderWithTheme({
  children,
}: {
  children: React.ReactNode;
}) {
  const { theme } = useTheme();
  if (theme === "light") {
    return (
      <ClerkProvider
        appearance={{
          baseTheme: [],
        }}
      >
        {children}
      </ClerkProvider>
    );
  }
  return (
    <ClerkProvider
      appearance={{
        baseTheme: [dark],
      }}
    >
      {children}
    </ClerkProvider>
  );
}
