import { InputComponentProps } from "@/types/interface";

export default function InputComponent({
  type,
  title,
  children,
  vertical,
}: InputComponentProps) {
  if (vertical === "vertical") {
    return (
      <div className="space-y-2">
        <h4 className="font-medium">
          {title}
          {type === "required" && (
            <span className="text-error-700 text-sm -mt-4">*</span>
          )}
        </h4>
        {children}
      </div>
    );
  }

  return (
    <div className="flex items-start justify-between space-x-2">
      <h4 className="font-medium w-1/2">
        {title}
        {type === "required" && (
          <span className="text-error-700 text-sm -mt-4">*</span>
        )}
      </h4>
      {children}
    </div>
  );
}
