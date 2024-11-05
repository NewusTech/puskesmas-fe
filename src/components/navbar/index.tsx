import { Bell, UserCircle2 } from "lucide-react";

export default function Navbar() {
  return (
    <nav className="flex justify-end py-10 px-6 space-x-5 items-end">
      <div className="relative">
        <Bell className="text-primary-700 w-[30px] h-[30px]" />
        <div className="rounded-full bg-red-500 w-5 h-5 absolute -right-3 -top-5"></div>
      </div>
      <div className="flex space-x-2 items-center">
        <UserCircle2 className="text-primary-700 w-10 h-10" />
        <p className="text-primary-700 font-medium">Super Admin</p>
      </div>
    </nav>
  );
}
