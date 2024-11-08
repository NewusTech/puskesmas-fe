import InputComponent from "@/components/parts/register/step-1/input-pasien";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

export default function DataRegister() {
  return (
    <div className="grid grid-cols-2 gap-x-16 mt-10">
      <div className="space-y-5">
        <InputComponent title="ID">
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
        <InputComponent title="Tanggal Pendaftaran">
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
        <InputComponent title="Data Pasien" type="required">
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
        <div className="flex w-full">
          <div className="w-5/12">
            <p className="font-medium">No. eRM</p>
            <p className="font-medium">No. RM Lama</p>
            <p className="font-medium">No. Dokumen RM</p>
            <p className="font-medium">NIK</p>
            <p className="font-medium">Nama</p>
            <p className="font-medium">JK</p>
            <p className="font-medium">Lahir</p>
            <p className="font-medium">Kelurahan</p>
          </div>
          <div className="w-7/12">
            <p>: No. eRM</p>
            <p>: No. RM Lama</p>
            <p>: No. Dokumen RM</p>
            <p>: NIK</p>
            <p>: Nama</p>
            <p>: JK</p>
            <p>: Lahir</p>
            <p>: Kelurahan</p>
          </div>
        </div>
        <InputComponent title="Umur" type="required">
          <div className="flex space-x-2 w-full">
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
          </div>
        </InputComponent>
        <InputComponent title="No. HP Pasien">
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
        <InputComponent title="Kunjungan" vertical="vertical">
          <RadioGroup defaultValue="woman" className="flex space-x-2">
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="woman" id="woman" />
              <Label htmlFor="woman">Perempuan</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="man" id="man" />
              <Label htmlFor="man">Laki-Laki</Label>
            </div>
          </RadioGroup>
        </InputComponent>
        <InputComponent title="Keadaan/Kelainan Pasien" vertical="vertical">
          <div className="grid grid-cols-2 gap-2">
            <div className="flex items-center space-x-2">
              <Checkbox id="terms" />
              <Label
                htmlFor="terms"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Handaya
              </Label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="terms" />
              <Label
                htmlFor="terms"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Lansia
              </Label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="terms" />
              <Label
                htmlFor="terms"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Difabel
              </Label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="terms" />
              <Label
                htmlFor="terms"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Lain-Lain
              </Label>
            </div>
          </div>
        </InputComponent>
        <InputComponent title="Status" type="required" vertical="vertical">
          <RadioGroup defaultValue="woman" className="flex space-x-2">
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="woman" id="woman" />
              <Label htmlFor="woman">Kunjungan Sakit</Label>
            </div>
            <div className="flex items-center space-x-2">
              <RadioGroupItem value="man" id="man" />
              <Label htmlFor="man">Kunjungan Sehat</Label>
            </div>
          </RadioGroup>
        </InputComponent>
        <div className="flex items-center space-x-2">
          <Checkbox id="terms" />
          <Label
            htmlFor="terms"
            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          >
            Promotif Preventif
          </Label>
        </div>
        <InputComponent title="Asuransi" type="required" vertical="vertical">
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
        <InputComponent title="Tarif Pendaftaran" vertical="vertical">
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
        <div className="flex items-center space-x-2">
          <Checkbox id="terms" />
          <Label
            htmlFor="terms"
            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          >
            Status Bayar
          </Label>
        </div>
      </div>
    </div>
  );
}
