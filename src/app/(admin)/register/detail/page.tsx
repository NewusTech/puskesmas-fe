import DataRegisterSection from "@/components/section/detail-patient/data-register-section";
import DataPatientSection from "@/components/section/detail-patient/data-patient";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export default function DetailPage() {
  return (
    <section className="pl-32 pr-6">
      <Tabs defaultValue="data-patient" className="w-full">
        <TabsList className="bg-transparent flex justify-between">
          <div>
            <TabsTrigger
              value="data-patient"
              className="bg-gray-50 border-b-2 px-10 border-slate-300 rounded-r-none rounded-bl-none shadow-none data-[state=active]:bg-primary-700 data-[state=active]:text-slate-50"
            >
              Data Pasien
            </TabsTrigger>
            <TabsTrigger
              value="data-register"
              className="bg-gray-50 border-b-2 px-10 border-slate-300 rounded-l-none rounded-br-none shadow-none data-[state=active]:bg-primary-700 data-[state=active]:text-slate-50"
            >
              Data Pendaftaran
            </TabsTrigger>
          </div>
          <div className="flex space-x-1">
            <Button className="rounded-full bg-info-700 hover:bg-info-800  text-slate-50">
              Ubah
            </Button>
            <Button className="rounded-full bg-secondary-800 hover:bg-secondary-700 text-slate-800">
              Pendaftaran Labolatorium
            </Button>
            <Button className="rounded-full bg-secondary-800 hover:bg-secondary-700 text-slate-800">
              Penimbangan Balita
            </Button>
          </div>
        </TabsList>
        <TabsContent value="data-patient">
          <DataPatientSection />
        </TabsContent>
        <TabsContent value="data-register">
          <DataRegisterSection />
        </TabsContent>
      </Tabs>
    </section>
  );
}
