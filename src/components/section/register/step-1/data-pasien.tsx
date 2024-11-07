import InputComponent from "@/components/parts/register/step-1/input-pasien";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { SearchIcon } from "lucide-react";

export default function DataPasienSection() {
  return (
    <>
      <h1 className="font-semibold text-primary-800 text-[26px] mt-5">
        Data Pasien
      </h1>
      <div className="w-full grid grid-cols-2 gap-16 mt-4">
        <div className="space-y-3">
          <InputComponent title="Data PKM Lain">
            <div className="flex border-primary-700 items-center w-full space-x-1 pl-3 bg-white rounded-full bg-transparent border">
              <SearchIcon className="w-6 h-6 text-primary-700" />
              <Input
                placeholder="Cari..."
                // value={
                //   (table.getColumn(filterBy)?.getFilterValue() as string) ?? ""
                // }
                // onChange={(event) =>
                //   table.getColumn(filterBy)?.setFilterValue(event.target.value)
                // }
                className="rounded-full border-none w-full bg-transparent"
              />
            </div>
          </InputComponent>
          <InputComponent title="No. eRM" type="required">
            <div className="flex border-primary-700 w-full items-center space-x-1 bg-white rounded-full bg-transparent border">
              <Input
                placeholder="Cari..."
                // value={
                //   (table.getColumn(filterBy)?.getFilterValue() as string) ?? ""
                // }
                // onChange={(event) =>
                //   table.getColumn(filterBy)?.setFilterValue(event.target.value)
                // }
                className="rounded-full border-none w-full bg-transparent"
                disabled={true}
              />
            </div>
          </InputComponent>
          <InputComponent title="Penjamin">
            <div className="flex border-primary-700 w-full items-center space-x-1 pl-3 bg-white rounded-full bg-transparent border">
              {/* <SelectSearch/> */}
            </div>
          </InputComponent>
          <InputComponent title="No. KK">
            <div className="flex border-primary-700 w-full items-center space-x-1 pl-3 bg-white rounded-full bg-transparent border">
              <SearchIcon className="w-6 h-6 text-primary-700" />
              <Input
                placeholder="Cari..."
                // value={
                //   (table.getColumn(filterBy)?.getFilterValue() as string) ?? ""
                // }
                // onChange={(event) =>
                //   table.getColumn(filterBy)?.setFilterValue(event.target.value)
                // }
                className="rounded-full border-none w-full bg-transparent"
              />
            </div>
          </InputComponent>
          <InputComponent title="NIK" type="required">
            <div className="flex border-primary-700 w-full items-center space-x-1 bg-white rounded-full bg-transparent border">
              <Input
                placeholder="Cari..."
                // value={
                //   (table.getColumn(filterBy)?.getFilterValue() as string) ?? ""
                // }
                // onChange={(event) =>
                //   table.getColumn(filterBy)?.setFilterValue(event.target.value)
                // }
                className="rounded-full border-none w-full bg-transparent"
                disabled={true}
              />
            </div>
          </InputComponent>
        </div>
        <div className="space-y-3">
          <div className="flex items-center justify-between space-x-2">
            <h1 className="font-medium -mt-12 w-1/2">Data PKM Lain</h1>
            <div className="space-y-3 w-full">
              <div className="flex border-primary-700 items-center space-x-1 bg-white rounded-full bg-transparent border w-full">
                <Input
                  placeholder="Cari..."
                  // value={
                  //   (table.getColumn(filterBy)?.getFilterValue() as string) ?? ""
                  // }
                  // onChange={(event) =>
                  //   table.getColumn(filterBy)?.setFilterValue(event.target.value)
                  // }
                  className="rounded-full border-none w-full bg-transparent"
                  disabled={true}
                />
              </div>
              <Button className="text-slate-50 bg-primary-700 rounded-full">
                Cek Satu Sehat
              </Button>
            </div>
          </div>

          <div className="flex items-center justify-between space-x-2">
            <h1 className="font-medium -mt-12 w-1/2">BPJS Number</h1>
            <div className="space-y-3 w-full">
              <div className="flex border-primary-700 w-full items-center space-x-1 bg-white rounded-full bg-transparent border">
                <Input
                  placeholder="Cari..."
                  // value={
                  //   (table.getColumn(filterBy)?.getFilterValue() as string) ?? ""
                  // }
                  // onChange={(event) =>
                  //   table.getColumn(filterBy)?.setFilterValue(event.target.value)
                  // }
                  className="rounded-full border-none w-full bg-transparent"
                  disabled={true}
                />
              </div>
              <Button className="text-slate-50 bg-primary-700 rounded-full">
                Cek BPJS
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
