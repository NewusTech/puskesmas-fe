"use client";

import {
  ColumnDef,
  flexRender,
  getCoreRowModel,
  getPaginationRowModel,
  VisibilityState,
  useReactTable,
  ColumnFiltersState,
  getFilteredRowModel,
  SortingState,
  getSortedRowModel,
} from "@tanstack/react-table";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { EllipsisVertical, SearchIcon, Import, ListFilter } from "lucide-react";
import { DataTablePagination } from "./pagination";
import { FilterModal } from "../modal/filter";
import Link from "next/link";

interface DataTableProps<TData, TValue> {
  columns: ColumnDef<TData, TValue>[];
  data: TData[];
  filterBy: string;
  type?: string;
  link?: string;
  linkText?: string;
  children?: React.ReactNode;
}

export function DataTables<TData, TValue>({
  columns,
  data,
  filterBy,
  type,
  link,
  linkText,
  children,
}: DataTableProps<TData, TValue>) {
  const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([]);
  const [columnVisibility, setColumnVisibility] = useState<VisibilityState>({});
  const [sorting, setSorting] = useState<SortingState>([]);

  const table = useReactTable({
    data,
    columns,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    onColumnFiltersChange: setColumnFilters,
    getFilteredRowModel: getFilteredRowModel(),
    onColumnVisibilityChange: setColumnVisibility,
    getSortedRowModel: getSortedRowModel(),
    onSortingChange: setSorting,
    state: {
      columnFilters,
      columnVisibility,
      sorting,
    },
  });

  return (
    <div>
      <div className="space-y-4">
        <div className="space-y-4">
          {type === "datatables" ? (
            <div className="flex justify-between">
              <div className="flex space-x-1">
                <FilterModal>{children}</FilterModal>
                <div className="group">
                  <DropdownMenu>
                    <DropdownMenuTrigger asChild>
                      <Button
                        variant="outline"
                        className="p-3 rounded-full border-primary-700"
                      >
                        <EllipsisVertical className="w-4 h-4 text-primary-700" />
                      </Button>
                    </DropdownMenuTrigger>
                    <DropdownMenuContent align="end">
                      {table
                        .getAllColumns()
                        .filter((column) => column.getCanHide())
                        .map((column) => {
                          return (
                            <DropdownMenuCheckboxItem
                              key={column.id}
                              className="capitalize text-primaryy"
                              checked={column.getIsVisible()}
                              onCheckedChange={(value) =>
                                column.toggleVisibility(!!value)
                              }
                            >
                              {column.id}
                            </DropdownMenuCheckboxItem>
                          );
                        })}
                    </DropdownMenuContent>
                  </DropdownMenu>
                </div>
              </div>
              <div className="flex space-x-2">
                <div className="flex border-primary-700 items-center space-x-1 pl-3 bg-white rounded-full bg-transparent border">
                  <SearchIcon className="w-6 h-6 text-primary-700" />
                  <Input
                    placeholder="Cari..."
                    value={
                      (table.getColumn(filterBy)?.getFilterValue() as string) ??
                      ""
                    }
                    onChange={(event) =>
                      table
                        .getColumn(filterBy)
                        ?.setFilterValue(event.target.value)
                    }
                    className="rounded-full border-none w-full bg-transparent"
                  />
                </div>
                {link && (
                  <Link
                    href={link}
                    className="bg-primary-700 flex items-center px-4 cursor-pointer shadow rounded-full text-slate-50 font-light hover:bg-primary-800"
                  >
                    {linkText}
                  </Link>
                )}
                <Button className="border border-slate-300 shadow rounded-full text-primary-700 font-light hover:bg-primary-700 hover:text-slate-50">
                  <Import />
                  Import
                </Button>
              </div>
            </div>
          ) : (
            ""
          )}
        </div>
        <Table className="border text-primary-700 border-x-0">
          <TableHeader className="bg-primary-400 bg-opacity-50">
            {table.getHeaderGroups().map((headerGroup) => (
              <TableRow key={headerGroup.id}>
                {headerGroup.headers.map((header) => {
                  return (
                    <TableHead
                      className="text-primary-800 font-semibold"
                      key={header.id}
                    >
                      {header.isPlaceholder
                        ? null
                        : flexRender(
                            header.column.columnDef.header,
                            header.getContext()
                          )}
                    </TableHead>
                  );
                })}
              </TableRow>
            ))}
          </TableHeader>
          <TableBody>
            {table.getRowModel().rows?.length ? (
              table.getRowModel().rows.map((row) => (
                <TableRow
                  key={row.id}
                  data-state={row.getIsSelected() && "selected"}
                >
                  {row.getVisibleCells().map((cell) => (
                    <TableCell
                      className="text-primary-800 text-sm"
                      key={cell.id}
                    >
                      {flexRender(
                        cell.column.columnDef.cell,
                        cell.getContext()
                      )}
                    </TableCell>
                  ))}
                </TableRow>
              ))
            ) : (
              <TableRow>
                <TableCell
                  colSpan={columns.length}
                  className="h-24 text-center text-sm text-neutral-800"
                >
                  No results.
                </TableCell>
              </TableRow>
            )}
          </TableBody>
        </Table>
      </div>
      <DataTablePagination table={table} />
    </div>
  );
}
