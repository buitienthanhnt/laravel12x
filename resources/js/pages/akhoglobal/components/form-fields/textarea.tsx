import { cn } from "@/lib/utils";
import React from "react";

/**
 * A textarea component that accepts a name and value as props.
 * @param {string} name - The name of the textarea.
 * @param {string} value - The value of the textarea.
 * @param {object} props - Additional props to be passed to the textarea component.
 * @returns {JSX.Element} - A JSX element representing the textarea component.
 */
export default function Textarea({ name, ...props }: React.ComponentProps<"textarea">) {
    return (
        <textarea
            className={cn('border p-1 w-full rounded-md focus:ring-0 sm:text-sm sm:leading-6', props.className)}
            rows={props.rows || 3}
            name={name}
            {...props}
        />
    );
}
