import {
  Database,
  FileHeart,
  HeartHandshake,
  Home,
  Hospital,
  LayoutDashboard,
  MapPinned,
  PillBottle,
  Stethoscope,
  Users,
} from "lucide-react";

export default function Sidebar() {
  return (
    <aside className="bg-primary-200 w-[67px] px-4 py-10 min-h-screen flex flex-col items-center fixed">
      <div className="w-9 h-9 bg-primary-700 rounded-full"></div>
      <div className="mt-10">
        <ul className="space-y-5 flex flex-col items-center">
          <li className="relative">
            <LayoutDashboard className="w-5 h-5 text-primary-700" />
            <div className="absolute w-1 h-1 rounded-full bg-error-700 -top-1 right-0"></div>
          </li>
          <li className="rounded-full relative bg-primary-400 w-8 h-8 flex items-center justify-center">
            <Users className="text-primary-800 w-5 h-5" />
            <div className="absolute w-1 h-1 rounded-full bg-error-700 top-[3px] right-[5px]"></div>
          </li>
          <li className="relative">
            <HeartHandshake className="text-primary-700 w-5 h-5" />
            <div className="absolute w-1 h-1 rounded-full bg-error-700 -top-1 right-0"></div>
          </li>
          <li className="relative">
            <Hospital className="text-primary-700 w-5 h-5" />
            <div className="absolute w-1 h-1 rounded-full bg-error-700 -top-1 right-0"></div>
          </li>
          <li className="relative">
            <Stethoscope className="text-primary-700 w-5 h-5" />
            <div className="absolute w-1 h-1 rounded-full bg-error-700 -top-1 right-0"></div>
          </li>
          <li className="relative">
            <Home className="text-primary-700 w-5 h-5" />
            <div className="absolute w-1 h-1 rounded-full bg-error-700 -top-1 right-0"></div>
          </li>
          <li className="relative">
            <MapPinned className="text-primary-700 w-5 h-5" />
            <div className="absolute w-1 h-1 rounded-full bg-error-700 -top-1 right-0"></div>
          </li>
          <li className="relative">
            <FileHeart className="text-primary-700 w-5 h-5" />
            <div className="absolute w-1 h-1 rounded-full bg-error-700 -top-1 right-0"></div>
          </li>
          <li className="relative">
            <PillBottle className="text-primary-700 w-5 h-5" />
            <div className="absolute w-1 h-1 rounded-full bg-error-700 -top-1 right-0"></div>
          </li>
          <li className="relative">
            <Database className="text-primary-700 w-5 h-5" />
            <div className="absolute w-1 h-1 rounded-full bg-error-700 -top-1 right-0"></div>
          </li>
        </ul>
      </div>
    </aside>
  );
}
