"use client";

import { DataTables } from "@/components/data-tables";
import InputComponent from "@/components/parts/register/step-1/input-pasien";
import { Button } from "@/components/ui/button";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Textarea } from "@/components/ui/textarea";
import { CaretSortIcon } from "@radix-ui/react-icons";
import { ColumnDef } from "@tanstack/react-table";
import Link from "next/link";

const data: Payment[] = [
  {
    id: "m5gr84i9",
    amount: 316,
    status: "success",
    email: "ken99@yahoo.com",
  },
  {
    id: "3u1reuv4",
    amount: 242,
    status: "success",
    email: "Abe45@gmail.com",
  },
  {
    id: "derv1ws0",
    amount: 837,
    status: "processing",
    email: "Monserrat44@gmail.com",
  },
];

export type Payment = {
  id: string;
  amount: number;
  status: "pending" | "processing" | "success" | "failed";
  email: string;
};

export const columns: ColumnDef<Payment>[] = [
  // {
  //   id: "select",
  //   header: ({ table }) => (
  //     <Checkbox
  //       checked={
  //         table.getIsAllPageRowsSelected() ||
  //         (table.getIsSomePageRowsSelected() && "indeterminate")
  //       }
  //       onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
  //       aria-label="Select all"
  //     />
  //   ),
  //   cell: ({ row }) => (
  //     <Checkbox
  //       checked={row.getIsSelected()}
  //       onCheckedChange={(value) => row.toggleSelected(!!value)}
  //       aria-label="Select row"
  //     />
  //   ),
  //   enableSorting: false,
  //   enableHiding: false,
  // },
  {
    accessorKey: "status",
    header: "Status",
    cell: ({ row }) => (
      <div className="capitalize">{row.getValue("status")}</div>
    ),
  },
  {
    accessorKey: "email",
    header: ({ column }) => {
      return (
        <Button
          variant="ghost"
          onClick={() => column.toggleSorting(column.getIsSorted() === "asc")}
        >
          Email
          <CaretSortIcon className="ml-2 h-4 w-4" />
        </Button>
      );
    },
    // cell: ({ row }) => <div className="lowercase">{row.getValue("email")}</div>,
  },
  {
    accessorKey: "amount",
    header: () => <div className="text-right">Amount</div>,
    cell: ({ row }) => {
      const amount = parseFloat(row.getValue("amount"));

      // Format the amount as a dollar amount
      const formatted = new Intl.NumberFormat("en-US", {
        style: "currency",
        currency: "USD",
      }).format(amount);

      return <div className="text-right font-medium">{formatted}</div>;
    },
  },
  // {
  //   id: "actions",
  //   enableHiding: false,
  //   cell: ({ row }) => {
  //     const payment = row.original;

  //     return (
  //       <DropdownMenu>
  //         <DropdownMenuTrigger asChild>
  //           <Button variant="ghost" className="h-8 w-8 p-0">
  //             <span className="sr-only">Open menu</span>
  //             <DotsHorizontalIcon className="h-4 w-4" />
  //           </Button>
  //         </DropdownMenuTrigger>
  //         <DropdownMenuContent align="end">
  //           <DropdownMenuLabel>Actions</DropdownMenuLabel>
  //           <DropdownMenuItem
  //             onClick={() => navigator.clipboard.writeText(payment.id)}
  //           >
  //             Copy payment ID
  //           </DropdownMenuItem>
  //           <DropdownMenuSeparator />
  //           <DropdownMenuItem>View customer</DropdownMenuItem>
  //           <DropdownMenuItem>View payment details</DropdownMenuItem>
  //         </DropdownMenuContent>
  //       </DropdownMenu>
  //     );
  //   },
  // },
];

export default function CreateRegisterStep2Page() {
  return (
    <section className="pl-32 pr-6 -mt-10">
      <div className="flex justify-end">
        <div className="relative flex justify-end items-center space-x-14">
          <div className="flex flex-col items-center space-y-1">
            <div className="w-10 h-10 rounded-full border border-primary-700 flex justify-center items-center">
              <p className="text-primary-700">1</p>
            </div>
            <p>Data Pasien</p>
          </div>
          <div className="w-[106px] h-[2px] bg-slate-500 absolute top-5 right-[4.6rem]"></div>
          <div className="flex flex-col items-center space-y-1">
            <div className="w-10 h-10 rounded-full bg-primary-700 flex justify-center items-center">
              <p className="text-slate-50">2</p>
            </div>
            <p className="text-primary-700">Pendaftaran</p>
          </div>
        </div>
      </div>
      <h1 className="font-semibold text-primary-800 text-[26px] mt-5">
        Buat Data Pendaftaran
      </h1>
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
      <h4 className="font-semibold underline text-primary-800 text-lg mt-5">
        Penanggung Jawab Pasien
      </h4>
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
              <Textarea
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
      <h4 className="font-medium text-primary-800 pt-10 pb-1">Data Skrining</h4>
      <DataTables columns={columns} filterBy="status" data={data} />
      <h4 className="font-medium text-primary-800 pt-5 pb-1">
        Penyakit Khusus
      </h4>
      <DataTables columns={columns} filterBy="status" data={data} />
      <h4 className="font-medium text-primary-800 pt-5 pb-1">
        Resiko Kehamilan
      </h4>
      <DataTables columns={columns} filterBy="status" data={data} />
      <h4 className="font-medium text-primary-800 pt-5 pb-1">
        Riwayat Pendaftaran Hari Ini
      </h4>
      <DataTables columns={columns} filterBy="status" data={data} />
      <h4 className="font-medium text-primary-800 pt-5 pb-2">
        Skrining Visual
      </h4>
      <div className="space-y-5">
        <div className="flex space-x-10">
          <div className="w-[100px] h-[100px] bg-error-700 rounded-full flex items-center justify-center">
            <p className="text-slate-50">Merah</p>
          </div>
          <div className="grid grid-cols-2 gap-1">
            <div className="flex items-center space-x-2">
              <Checkbox id="terms" />
              <Label
                htmlFor="terms"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Tidak sadarkan diri atau pingsan
              </Label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="terms" />
              <Label
                htmlFor="terms"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Tidak bernafas atau kesulitan bernafas
              </Label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="terms" />
              <Label
                htmlFor="terms"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Nadi tidak teraba atau henti jantung
              </Label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="terms" />
              <Label
                htmlFor="terms"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Kejang berulang atau kejang lama
              </Label>
            </div>
          </div>
        </div>
        <div className="flex space-x-10">
          <div className="w-[100px] h-[100px] bg-warning-700 rounded-full flex items-center justify-center">
            <p className="text-slate-50">Orange</p>
          </div>
          <div className="grid grid-cols-2 gap-10">
            <div className="flex items-center space-x-2">
              <Checkbox id="terms" />
              <Label
                htmlFor="terms"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Nyeri hebat
              </Label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="terms" />
              <Label
                htmlFor="terms"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Nyeri dada
              </Label>
            </div>
          </div>
        </div>
        <div className="flex space-x-10">
          <div className="w-[100px] h-[100px] bg-warning-500 rounded-full flex items-center justify-center">
            <p className="text-slate-50">Kuning</p>
          </div>
          <div className="grid grid-cols-2 gap-10">
            <div className="flex items-center space-x-2">
              <Checkbox id="terms" />
              <Label
                htmlFor="terms"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Tampak pucat
              </Label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="terms" />
              <Label
                htmlFor="terms"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Lemas
              </Label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox id="terms" />
              <Label
                htmlFor="terms"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Sempoyongan
              </Label>
            </div>
          </div>
        </div>
        <div className="flex space-x-10">
          <div className="w-[100px] h-[100px] bg-success-700 rounded-full flex items-center justify-center">
            <p className="text-slate-50">Hijau</p>
          </div>
          <div className="grid grid-cols-2 gap-10">
            <div className="flex items-center space-x-2">
              <Checkbox id="terms" />
              <Label
                htmlFor="terms"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                Kondisi stabil
              </Label>
            </div>
          </div>
        </div>
      </div>
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
      <div className="flex space-x-16 mb-5">
        <h4 className="w-2/12 text-primary-800 font-medium">Kamar</h4>
        <p className="w-10/12">: Kamar</p>
      </div>
      <div className="flex space-x-16">
        <h4 className="w-2/12 text-primary-800 font-medium">Bed</h4>
        <p className="w-10/12">: Bed</p>
      </div>
      <div className="flex justify-end space-x-2 pb-4">
        <Link
          href="/register/create/step-1"
          className="border px-5 py-2 flex transition-colors duration-300 items-center border-primary-700 text-primary-700 hover:bg-primary-700 hover:text-slate-50 rounded-full"
        >
          Kembali
        </Link>
        <Link
          href="/register/create/step-2"
          className="px-5 flex py-2 transition-colors duration-300 items-center text-slate-50 bg-primary-700 hover:bg-primary-800 rounded-full"
        >
          Simpan
        </Link>
      </div>
    </section>
  );
}
