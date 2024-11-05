import { Button } from "@/components/ui/button";
import { EllipsisVertical, Import, ListFilter } from "lucide-react";

export default function RegisterPage() {
  return (
    <section className="pl-32  pr-6">
      <h1 className="text-[26px] font-semibold mb-16">Pendaftaran</h1>
      <div className="flex justify-between">
        <div className="flex space-x-1">
          <Button className="bg-primary-700 shadow rounded-full text-slate-50 font-light hover:bg-primary-800">
            <ListFilter />
            Filter
          </Button>
          <div className="group">
            <div className="rounded-full border shadow border-primary-700 p-3 group-hover:bg-primary-700 cursor-pointer">
              <EllipsisVertical className="w-4 h-4 text-primary-700 group-hover:text-slate-50" />
            </div>
          </div>
        </div>
        <div className="flex space-x-2">
          <Button className="bg-primary-700 shadow rounded-full text-slate-50 font-light hover:bg-primary-800">
            Tambah Data Pasien
          </Button>
          <Button className="border border-slate-300 shadow rounded-full text-primary-700 font-light hover:bg-primary-700 hover:text-slate-50">
            <Import />
            Import
          </Button>
        </div>
      </div>
    </section>
  );
}
