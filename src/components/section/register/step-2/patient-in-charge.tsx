import InputComponent from "@/components/parts/register/step-1/input-pasien";
import { Input } from "@/components/ui/input";

export default function PatientInCharge() {
  return (
    <div className="grid grid-cols-2 gap-x-16 mt-10">
      <div className="space-y-5">
        <InputComponent title="Nama">
          <div className="flex border-primary-700 items-center w-full space-x-1 bg-white rounded-full bg-transparent border">
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
        <InputComponent title="Hubungan">
          <div className="flex border-primary-700 items-center w-full space-x-1 bg-white rounded-full bg-transparent border">
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
        <InputComponent title="No. HP">
          <div className="flex border-primary-700 items-center w-full space-x-1 bg-white rounded-full bg-transparent border">
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
      </div>
      <div className="space-y-5">
        <InputComponent title="Rujukan Dari">
          <div className="flex border-primary-700 items-center w-full space-x-1 bg-white rounded-full bg-transparent border">
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
        <InputComponent title="Nama Perujuk">
          <div className="flex border-primary-700 items-center w-full space-x-1 bg-white rounded-full bg-transparent border">
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
        <InputComponent title="Catatan">
          <div className="flex border-primary-700 items-center w-full space-x-1 bg-white rounded-lg bg-transparent border">
            <textarea
              placeholder="Cari..."
              // value={
              //   (table.getColumn(filterBy)?.getFilterValue() as string) ?? ""
              // }
              // onChange={(event) =>
              //   table.getColumn(filterBy)?.setFilterValue(event.target.value)
              // }
              className="rounded-lg border-none w-full bg-transparent"
            />
          </div>
        </InputComponent>
      </div>
    </div>
  );
}
