import React from "react";

export default function BaseLayout({ children }: React.PropsWithChildren) {

  return (
    <div className="container mx-auto min-h-scree p-4">
      {children}
    </div>
  )
}