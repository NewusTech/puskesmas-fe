"use client";

import Navbar from "@/components/navbar";
import { usePathname } from "next/navigation";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const pathname = usePathname();
  const step =
    pathname.includes("/register/create/step-1") ||
    pathname.includes("/register/create/step-2") ||
    pathname.includes("/laboratory/create/step-1") ||
    pathname.includes("/laboratory/create/step-2");

  return (
    <div>
      {step ? <Navbar type="step" /> : <Navbar />}
      <main>{children}</main>
    </div>
  );
}
