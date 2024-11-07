"use client";

import { useState } from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { SearchIcon, CalendarIcon } from "lucide-react";
import { format } from "date-fns";
import { cn } from "@/lib/utils";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Textarea } from "@/components/ui/textarea";
import CardPasien from "@/components/parts/register/step-1/card-pasien";
import InputComponent from "@/components/parts/register/step-1/input-pasien";

const frameworks = [
  {
    value: "next.js",
    label: "Next.js",
  },
  {
    value: "sveltekit",
    label: "SvelteKit",
  },
  {
    value: "nuxt.js",
    label: "Nuxt.js",
  },
  {
    value: "remix",
    label: "Remix",
  },
  {
    value: "astro",
    label: "Astro",
  },
];

export default function CardSection() {
  const [date, setDate] = useState<Date>();
  const [showOtherAddress, setShowOtherAddress] = useState(false);

  const handleCheckboxChange = (checked: boolean | undefined) => {
    setShowOtherAddress(!!checked); // Menggunakan `!!` untuk memastikan nilainya adalah boolean
  };
  return (
    <>
      <CardPasien title="Data Diri">
        <div className="grid grid-cols-2 gap-16">
          <div className="space-y-3">
            <InputComponent type="required" title="Nama">
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
            <InputComponent title="Jenis Kelamin">
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
            <InputComponent title="Tanggal Lahir">
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant={"outline"}
                    className={cn(
                      "w-full justify-between border border-primary-700 rounded-full text-left font-normal",
                      !date && "text-muted-foreground"
                    )}
                  >
                    {date ? format(date, "PPP") : <span>Pick a date</span>}
                    <CalendarIcon className="text-primary-700" />
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                  <Calendar
                    mode="single"
                    selected={date}
                    onSelect={setDate}
                    initialFocus
                  />
                </PopoverContent>
              </Popover>
            </InputComponent>
            <InputComponent type="required" title="Umur">
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
            <InputComponent type="required" title="Tempat Lahir">
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
          <div className="space-y-3">
            <InputComponent title="No. Dokumen RM">
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
            <InputComponent title="No. RM Lama">
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
            <InputComponent title="Golongan Darah">
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant={"outline"}
                    className={cn(
                      "w-full justify-between text-left font-normal rounded-full border border-primary-700",
                      !date && "text-muted-foreground"
                    )}
                  >
                    {date ? format(date, "PPP") : <span>Pick a date</span>}
                    <CalendarIcon className="text-primary-700" />
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                  <Calendar
                    mode="single"
                    selected={date}
                    onSelect={setDate}
                    initialFocus
                  />
                </PopoverContent>
              </Popover>
            </InputComponent>
            <InputComponent title="Email">
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
            <InputComponent type="required" title="No. HP">
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
        </div>
      </CardPasien>
      <CardPasien title="Alamat Tempat Tinggal / KTP">
        <div className="grid grid-cols-2 gap-16">
          <div className="space-y-3">
            <InputComponent type="required" title="Provinsi">
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
            <InputComponent type="required" title="Kota/Kab">
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
            <InputComponent type="required" title="Kecamatan">
              <Popover>
                <PopoverTrigger asChild>
                  <Button
                    variant={"outline"}
                    className={cn(
                      "w-full justify-between border border-primary-700 rounded-full text-left font-normal",
                      !date && "text-muted-foreground"
                    )}
                  >
                    {date ? format(date, "PPP") : <span>Pick a date</span>}
                    <CalendarIcon className="text-primary-700" />
                  </Button>
                </PopoverTrigger>
                <PopoverContent className="w-auto p-0" align="start">
                  <Calendar
                    mode="single"
                    selected={date}
                    onSelect={setDate}
                    initialFocus
                  />
                </PopoverContent>
              </Popover>
            </InputComponent>
            <InputComponent type="required" title="Kelurahan / Desa">
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
            <InputComponent type="required" title="Pekerjaan">
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
            <InputComponent title="Pekerjaan Suami">
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
            <InputComponent type="required" title="Instansi">
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
            <InputComponent type="required" title="Agama">
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
            <InputComponent type="required" title="Pendidikan">
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
            <InputComponent type="required" title="Status Perkawinan">
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
          <div className="space-y-3">
            <InputComponent title="RT/RW">
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
              </div>
            </InputComponent>
            <InputComponent title="Dusun">
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
            <InputComponent type="required" title="Alamat">
              <Textarea className="rounded-lg border border-primary-700" />
            </InputComponent>
            <InputComponent type="required" title="Tanggal Menikah">
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
            <InputComponent type="required" title="Status Keluarga">
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
            <InputComponent type="required" title="Warga Negara">
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
            <InputComponent title="No. Paspor">
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
              </div>
            </InputComponent>
            <InputComponent title="Nama Ayah/KK">
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
            <InputComponent type="required" title="Nama Ibu">
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
        </div>
      </CardPasien>
      <CardPasien
        title="Alamat KTP Jika Berbeda"
        type="checkbox"
        checkbox={handleCheckboxChange}
      >
        {showOtherAddress && (
          <div className="grid grid-cols-2 gap-16">
            <div className="space-y-3">
              <InputComponent type="required" title="Provinsi">
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
              <InputComponent type="required" title="Kota/Kab">
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
              <InputComponent type="required" title="Kecamatan">
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
              <InputComponent type="required" title="Kelurahan /Desa">
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
            <div className="space-y-3">
              <InputComponent title="RT/RW">
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
                </div>
              </InputComponent>
              <InputComponent title="Dusun">
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
              <InputComponent type="required" title="Alamat">
                <Textarea className="rounded-lg border border-primary-700" />
              </InputComponent>
            </div>
          </div>
        )}
      </CardPasien>
    </>
  );
}
