import * as CheckboxPrimitive from "@radix-ui/react-checkbox"
import { CheckIcon } from "lucide-react"
import * as React from "react"
import { cn } from "@/lib/utils"
import { type FormField } from "@/types/shareType/FormField"

function Checkbox({
  className,
  label,
  value,
  ...props
}: React.ComponentProps<typeof CheckboxPrimitive.Root> & FormField) {
  return (
    <div className="flex gap-x-2 items-center">
      {label && <label htmlFor={`file-${props.name}`} className={`sm:text-base md:text-lg ${props.required ? "after:content-['*'] after:ml-0.5 after:text-red-500" : ''}`}>{label}</label>}
      <CheckboxPrimitive.Root
        defaultChecked={!!value}
        data-slot="checkbox"
        className={cn(
          "peer border-input data-[state=checked]:bg-primary data-[state=checked]:text-primary-foreground data-[state=checked]:border-primary focus-visible:border-ring focus-visible:ring-ring/50 aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive shrink-0 rounded-[4px] border shadow-xs transition-shadow outline-none focus-visible:ring-[3px] disabled:cursor-not-allowed disabled:opacity-50",
          className,
          'size-5',
        )}
        {...props}
      >
        <CheckboxPrimitive.Indicator
          data-slot="checkbox-indicator"
          className="flex items-center justify-center text-current transition-none"
        >
          <CheckIcon className="size-3.5" />
        </CheckboxPrimitive.Indicator>
      </CheckboxPrimitive.Root>
    </div>
  )
}

export default Checkbox
