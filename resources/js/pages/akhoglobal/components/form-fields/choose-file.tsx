import { Trash } from "lucide-react"
import React, { type ChangeEvent, useCallback, useRef, useState } from "react";
import { cn } from "@/lib/utils";
import { type FormField } from "@/types/shareType/FormField";
import { inputStyle } from "../../styles/form-field";

export default function ChooseFile({ name, label, className, comStyle, imageStyle, error, ...props }: React.ComponentProps<"input"> & FormField & { comStyle?: string, imageStyle?: string, }) {
  const [targetFile, setTargetFile] = useState<File>();
  const fileInputRef = useRef<HTMLInputElement>(null);

  const clearFileInput = useCallback(() => {
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
    setTargetFile(undefined);
  }, [])

  {/* upload file must be use post method */ }
  return (
    <div className={cn("space-y-1", comStyle)}>
      <div className="flex items-baseline gap-1">
        {label && <label htmlFor={`file-${name}`} className={`sm:text-base md:text-lg ${props.required ? "after:content-['*'] after:ml-0.5 after:text-red-500" : ''}`}>{label}</label>}
        {error && <p className="text-sm text-red-600 dark:text-red-400 italic font-medium">{error}</p>}
      </div>
      <input type="file" id={`file-${name}`} name={name} {...props} ref={fileInputRef}
        data-slot="input"
        className={cn(
          inputStyle.textInput,
          className
        )}
        {...props}
        onChange={(e: ChangeEvent<HTMLInputElement>) => {
          const files = e.target.files;
          if (files && files.length > 0) {
            const selectedFile = files[0];
            setTargetFile(selectedFile);
          }
        }}
      />
      {targetFile &&
        <div className="flex space-x-2 relative">
          <div className="absolute top-1 left-1 p-1 opacity-40 hover:opacity-90 bg-white rounded-full flex z-20" onClick={clearFileInput}>
            <Trash className="size-8 text-black"></Trash>
          </div>
          <img src={targetFile && URL.createObjectURL(targetFile)} alt="avatar" className={cn('w-40 h-40 rounded-md object-cover', imageStyle)} />
          <div className="space-y-1">
            <p className="italic">Name: <span className="font-semibold">{targetFile?.name}</span></p>
            <p className="italic">Size: <span className="font-semibold">{targetFile?.size && Math.round(targetFile?.size / 1024)} kb</span></p>
            <p className="italic">Type: <span className="font-semibold">{targetFile?.type}</span></p>
          </div>
        </div>
      }
    </div>
  );
}
