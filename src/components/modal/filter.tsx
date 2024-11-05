import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";
import { Button } from "@/components/ui/button";
import { ListFilter, X } from "lucide-react";

export function FilterModal({ children }: { children: React.ReactNode }) {
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button className="bg-primary-700 shadow rounded-full text-slate-50 font-light hover:bg-primary-800">
          <ListFilter />
          Filter
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent className="max-w-5xl">
        <AlertDialogHeader>
          <div className="flex justify-end -mt-5 -mr-5">
            <AlertDialogCancel className="w-10 border-none p-0">
              <X className="text-slate-400" />
            </AlertDialogCancel>
          </div>
        </AlertDialogHeader>
        {children}
        <AlertDialogFooter>
          <AlertDialogAction className="bg-primary-700 hover:bg-primary-800 text-slate-50 rounded-full">
            Filter
          </AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  );
}
