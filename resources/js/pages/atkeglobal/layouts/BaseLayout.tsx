import clsx from "clsx";
import React from "react";

type Props = React.PropsWithChildren<React.HTMLAttributes<HTMLDivElement>>

export default function BaseLayout({ children, className, ...props }: Props) {

  return (
    <div className={clsx("container mx-auto min-h-scree p-4", className)} {...props}>
      {children}
    </div>
  )
}