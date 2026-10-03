import { cn } from "@/lib/utils";

type ContainerProps = React.ComponentPropsWithoutRef<"div">;

/**
 * Page-width wrapper. Grows with the viewport up to 1840px so large or
 * zoomed-out screens (e.g. 1920px at 80% ≈ 2400px) aren't framed by
 * oversized side margins; gutters widen in step to keep it airy.
 */
export function Container({ className, ...props }: ContainerProps) {
  return (
    <div
      className={cn(
        "mx-auto w-full max-w-[1840px] px-4 sm:px-6 lg:px-10 xl:px-16 2xl:px-20",
        className,
      )}
      {...props}
    />
  );
}
