"use client";

import { DataTables } from "@/components/data-tables";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { CaretSortIcon, DotsHorizontalIcon } from "@radix-ui/react-icons";
import { Checkbox } from "@/components/ui/checkbox";
import { ColumnDef } from "@tanstack/react-table";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import SelectSearch from "@/components/select-search";

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
  {
    id: "select",
    header: ({ table }) => (
      <Checkbox
        checked={
          table.getIsAllPageRowsSelected() ||
          (table.getIsSomePageRowsSelected() && "indeterminate")
        }
        onCheckedChange={(value) => table.toggleAllPageRowsSelected(!!value)}
        aria-label="Select all"
      />
    ),
    cell: ({ row }) => (
      <Checkbox
        checked={row.getIsSelected()}
        onCheckedChange={(value) => row.toggleSelected(!!value)}
        aria-label="Select row"
      />
    ),
    enableSorting: false,
    enableHiding: false,
  },
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
  {
    id: "actions",
    enableHiding: false,
    cell: ({ row }) => {
      const payment = row.original;

      return (
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" className="h-8 w-8 p-0">
              <span className="sr-only">Open menu</span>
              <DotsHorizontalIcon className="h-4 w-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            <DropdownMenuLabel>Actions</DropdownMenuLabel>
            <DropdownMenuItem
              onClick={() => navigator.clipboard.writeText(payment.id)}
            >
              Copy payment ID
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuItem>View customer</DropdownMenuItem>
            <DropdownMenuItem>View payment details</DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      );
    },
  },
];

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

export default function RegisterPage() {
  const [valueFramework, setValueFramework] = useState<any>({
    id: 0,
    label: "",
  });

  return (
    <section className="pl-32 pr-6">
      <h1 className="text-[26px] font-semibold mb-16">Pendaftaran</h1>
      <DataTables
        columns={columns}
        data={data}
        type="datatables"
        filterBy="status"
        link="/register/create/step-1"
        linkText="Tambah Data Pasien"
      >
        <div className="grid grid-cols-3 gap-3">
          <div className="flex flex-col space-y-2">
            <Label htmlFor="search">Cari</Label>
            <SelectSearch
              data={frameworks}
              placeholder="framework"
              valueId={valueFramework}
              setValueId={setValueFramework}
            />
          </div>
          <div className="flex flex-col space-y-2">
            <Label htmlFor="search">Cari</Label>
            <SelectSearch
              data={frameworks}
              placeholder="framework"
              valueId={valueFramework}
              setValueId={setValueFramework}
            />
          </div>
          <div className="flex flex-col space-y-2">
            <Label htmlFor="search">Cari</Label>
            <SelectSearch
              data={frameworks}
              placeholder="framework"
              valueId={valueFramework}
              setValueId={setValueFramework}
            />
          </div>
          <div className="flex flex-col space-y-2">
            <Label htmlFor="search">Cari</Label>
            <SelectSearch
              data={frameworks}
              placeholder="framework"
              valueId={valueFramework}
              setValueId={setValueFramework}
            />
          </div>
          <div className="flex flex-col space-y-2">
            <Label htmlFor="search">Cari</Label>
            <SelectSearch
              data={frameworks}
              placeholder="framework"
              valueId={valueFramework}
              setValueId={setValueFramework}
            />
          </div>
          <div className="flex flex-col space-y-2">
            <Label htmlFor="search">Cari</Label>
            <SelectSearch
              data={frameworks}
              placeholder="framework"
              valueId={valueFramework}
              setValueId={setValueFramework}
            />
          </div>
          <div className="flex flex-col space-y-2">
            <Label htmlFor="search">Cari</Label>
            <SelectSearch
              data={frameworks}
              placeholder="framework"
              valueId={valueFramework}
              setValueId={setValueFramework}
            />
          </div>
          <div className="flex flex-col space-y-2">
            <Label htmlFor="search">Cari</Label>
            <SelectSearch
              data={frameworks}
              placeholder="framework"
              valueId={valueFramework}
              setValueId={setValueFramework}
            />
          </div>
          <div className="flex flex-col space-y-2">
            <Label htmlFor="search">Cari</Label>
            <SelectSearch
              data={frameworks}
              placeholder="framework"
              valueId={valueFramework}
              setValueId={setValueFramework}
            />
          </div>
        </div>
      </DataTables>
    </section>
  );
}
