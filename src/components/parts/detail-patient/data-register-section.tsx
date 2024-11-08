"use client";

import { DataTables } from "@/components/data-tables";
import DataPatient from "./data-patient";
import { Button } from "@/components/ui/button";
import { CaretSortIcon } from "@radix-ui/react-icons";
import { ColumnDef } from "@tanstack/react-table";

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

export default function DataRegisterSection() {
  return (
    <div>
      <div className="p-8 bg-gray-100 rounded-lg my-5">
        <div className="space-y-1">
          <DataPatient title="ID" desc="ID" />
          <DataPatient
            title="ID Encounter Satu Sehat"
            desc="ID Encounter Satu Sehat"
          />
          <DataPatient title="Tanggal Pendaftaran" desc="Tanggal Pendaftaran" />
          <DataPatient
            title="Data Pasien"
            desc="ID  : 00063242NIK: 1612010903200003 MUHAMAD ABID SAPUTRA Laki-laki PENDOPO, 09-03-2020 TALANG UBI UTARA No RM Lama : 00.41.51"
          />
          <DataPatient title="Kunjungan" desc="Kunjungan" />
          <DataPatient title="Asuransi" desc="Asuransi" />
          <DataPatient title="No. Asuransi" desc="No. Asuransi" />
          <DataPatient title="Faskes Asal" desc="Faskes Asal" />
          <DataPatient title="Pembayaran" desc="Pembayaran" />
          <DataPatient title="Rujukan Dari" desc="Rujukan Dari" />
          <DataPatient title="Nama Petunjuk" desc="Nama Petunjuk" />
        </div>
      </div>
      <h4 className="font-medium text-primary-800 pb-1">Data Pelayanan</h4>
      <DataTables columns={columns} filterBy="status" data={data} />
      <h4 className="font-medium text-primary-800 pb-1">Data Skrining</h4>
      <DataTables columns={columns} filterBy="status" data={data} />
      <h4 className="font-medium text-primary-800 pb-1">
        Riwayat Pendaftaran Hari Ini
      </h4>
      <DataTables columns={columns} filterBy="status" data={data} />
      <div className="flex justify-end space-x-2 my-2">
        <Button className="bg-warning-700 text-slate-50 hover:bg-warning-800 rounded-full">
          Skrining COVID-19
        </Button>
        <Button className="bg-success-700 text-slate-50 hover:bg-success-800 rounded-full">
          General Consent
        </Button>
        <Button className="border-slate-200 border text-primary-700 hover:bg-slate-100 rounded-full">
          Cetak Surat Berobat
        </Button>
        <Button className="bg-info-700 text-slate-50 hover:bg-info-800 rounded-full">
          Ubah
        </Button>
      </div>
    </div>
  );
}
