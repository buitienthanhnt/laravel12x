import clsx from "clsx";

export default function BaseLayout({ children, className }: { children: React.ReactNode, className?: string }) {
  return (
    <div className={clsx("container mx-auto min-h-screen ", className)}>
      {children}
    </div>
  )
}