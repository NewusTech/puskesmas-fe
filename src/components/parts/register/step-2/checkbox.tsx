import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";

interface CheckboxItemProps {
  title: string;
  id: string;
}

export default function CheckboxItem({ title, id }: CheckboxItemProps) {
  return (
    <div className="flex items-center space-x-2">
      <Checkbox id={id} />
      <Label
        htmlFor={id}
        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
      >
        {title}
      </Label>
    </div>
  );
}
