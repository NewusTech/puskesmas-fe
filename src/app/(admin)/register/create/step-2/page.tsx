"use client";

import { DataTables } from "@/components/data-tables";
import DataRegister from "@/components/section/register/step-2/data-register";
import Installation from "@/components/section/register/step-2/installation";
import PatientInCharge from "@/components/section/register/step-2/patient-in-charge";
import PoliRoom from "@/components/section/register/step-2/poli-room";
import VisualScreening from "@/components/section/register/step-2/visual-screening";
import { Button } from "@/components/ui/button";
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
      <DataRegister />
      <h4 className="font-semibold underline text-primary-800 text-lg mt-5">
        Penanggung Jawab Pasien
      </h4>
      <PatientInCharge />
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
      <VisualScreening />
      <Installation />
      <PoliRoom />
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
