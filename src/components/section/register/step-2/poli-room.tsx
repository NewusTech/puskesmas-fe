import { Button } from "@/components/ui/button";

export default function PoliRoom() {
  return (
    <div className="flex py-5 space-x-16">
      <div className="w-2/12">
        <h3 className="text-primary-800 font-medium">
          Poli/Ruangan<span className="text-error-700">*</span>
        </h3>
      </div>
      <div className="w-10/12 grid grid-cols-5 gap-2">
        <Button className="rounded-full bg-primary-700 text-slate-50">
          KIA
        </Button>
        <Button className="rounded-full border border-primaty-700 text-primary-700 hover:bg-primary-700 hover:text-slate-50 duration-300 transition-colors">
          Gigi 0/100
        </Button>
        <Button className="rounded-full border border-primaty-700 text-primary-700 hover:bg-primary-700 hover:text-slate-50 duration-300 transition-colors">
          Lansia
        </Button>
        <Button className="rounded-full border border-primaty-700 text-primary-700 hover:bg-primary-700 hover:text-slate-50 duration-300 transition-colors">
          MTBS
        </Button>
        <Button className="rounded-full border border-primaty-700 text-primary-700 hover:bg-primary-700 hover:text-slate-50 duration-300 transition-colors">
          Umum 4/25
        </Button>
        <Button className="rounded-full border border-primaty-700 text-primary-700 hover:bg-primary-700 hover:text-slate-50 duration-300 transition-colors">
          HIV 0/100
        </Button>
        <Button className="rounded-full border border-primaty-700 text-primary-700 hover:bg-primary-700 hover:text-slate-50 duration-300 transition-colors">
          Poli Lansia
        </Button>
        <Button className="rounded-full border border-primaty-700 text-primary-700 hover:bg-primary-700 hover:text-slate-50 duration-300 transition-colors">
          PTM
        </Button>
        <Button className="rounded-full border border-primaty-700 text-primary-700 hover:bg-primary-700 hover:text-slate-50 duration-300 transition-colors">
          Prolanis
        </Button>
        <Button className="rounded-full border border-primaty-700 text-primary-700 hover:bg-primary-700 hover:text-slate-50 duration-300 transition-colors">
          Poli TB
        </Button>
      </div>
    </div>
  );
}
