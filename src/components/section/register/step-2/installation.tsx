import { Button } from "@/components/ui/button";

export default function Installation() {
  return (
    <div className="flex py-5 items-center space-x-16">
      <div className="w-2/12">
        <h3 className="text-primary-800 font-medium">
          Instalasi<span className="text-error-700">*</span>
        </h3>
      </div>
      <div className="w-10/12 flex space-x-2">
        <Button className="rounded-full bg-primary-700 text-slate-50">
          Rawat Jalan
        </Button>
        <Button className="rounded-full border border-primaty-700 text-primary-700 hover:bg-primary-700 hover:text-slate-50 duration-300 transition-colors">
          Gawat Darurat
        </Button>
        <Button className="rounded-full border border-primaty-700 text-primary-700 hover:bg-primary-700 hover:text-slate-50 duration-300 transition-colors">
          Rawat Inap
        </Button>
      </div>
    </div>
  );
}
