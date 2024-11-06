"use client";

import SelectSearch from "@/components/select-search";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { CardPasienProps, InputComponentProps } from "@/types/interface";
import { SearchIcon, CalendarIcon } from "lucide-react";
import { useState } from "react";

import { format } from "date-fns";
import { cn } from "@/lib/utils";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Textarea } from "@/components/ui/textarea";

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

export default function CreateRegisterPage() {
  const [valueFramework, setValueFramework] = useState<any>({
    id: 0,
    label: "",
  });
  const [date, setDate] = useState<Date>();

  return (
    <section className="pl-32 pr-6 -mt-10">
      <div className="flex justify-between items-center">
        <div className="grid grid-cols-2 items-center gap-4">
          <h1 className="font-semibold">Cari Data Pasien</h1>
          <SelectSearch
            data={frameworks}
            placeholder="Pasien"
            valueId={valueFramework}
            setValueId={setValueFramework}
          />
        </div>
        <div className="relative flex justify-end items-center space-x-14">
          <div className="flex flex-col items-center space-y-1">
            <div className="w-10 h-10 rounded-full bg-primary-700 flex justify-center items-center">
              <p className="text-slate-50">1</p>
            </div>
            <p className="text-primary-700">Data Pasien</p>
          </div>
          <div className="w-[106px] h-[2px] bg-slate-500 absolute top-5 right-[4.6rem]"></div>
          <div className="flex flex-col items-center space-y-1">
            <div className="w-10 h-10 rounded-full border border-primary-700 flex justify-center items-center">
              <p className="text-primary-700">2</p>
            </div>
            <p>Pendaftaran</p>
          </div>
        </div>
      </div>
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
      <CardPasien title="Alamat KTP Jika Berbeda">
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
      </CardPasien>
    </section>
  );
}

const CardPasien = ({ title, children }: CardPasienProps) => {
  return (
    <div className="rounded-lg p-8 bg-gray-50 my-8">
      <h3 className="text-primary-800 font-semibold mb-6">{title}</h3>
      {children}
    </div>
  );
};

const InputComponent = ({ type, title, children }: InputComponentProps) => {
  return (
    <div className="flex items-start justify-between space-x-2">
      <h1 className="font-medium w-1/2">
        {title}
        {type === "required" && (
          <span className="text-error-700 text-sm -mt-4">*</span>
        )}
      </h1>
      {children}
    </div>
  );
};
