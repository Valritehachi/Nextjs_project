import Sidebar from "@/components/Sidebar";
export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="flex h-dvh">
      <div className="grid grid-cols-9 w-full">
        <div className="col-span-2">
          <Sidebar />
        </div>
        <div className="col-span-7 h-full w-full">{children}</div>
      </div>
    </div>
  );
}
