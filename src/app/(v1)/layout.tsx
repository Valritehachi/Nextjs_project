import Navbar from "@/components/Navbar";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="bg-accent">
      <div className="h-screen flex flex-col w-full container mx-auto">
        <Navbar />
        {children}
      </div>
    </div>
  );
}
