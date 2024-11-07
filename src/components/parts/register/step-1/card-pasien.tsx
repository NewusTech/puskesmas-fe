import { Checkbox } from "@/components/ui/checkbox";
import { CardPasienProps } from "@/types/interface";

export default function CardPasien({
  title,
  children,
  checkbox,
  type,
}: CardPasienProps) {
  return (
    <div className="rounded-lg p-8 bg-gray-50 my-8">
      <div className="flex items-center space-x-4">
        <h3 className="text-primary-800 font-semibold mb-6">{title}</h3>
        {type === "checkbox" && (
          <Checkbox
            className="mb-6 border border-primary-700"
            onCheckedChange={checkbox}
          />
        )}
      </div>
      {children}
    </div>
  );
}
