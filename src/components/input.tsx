import type { ComponentProps, FC } from "react";
import { tv } from "tailwind-variants";

const baseClassname = tv({
	base: "duration-200 text-neutral-300 px-2 py-1 outline-none bg-transparent border-b-2 border-neutral-800 focus:!border-rose-800 placeholder:text-neutral-500",
});

export const InputComponent: FC<ComponentProps<"input">> = ({
	className,
	...props
}) => <input className={baseClassname({ className })} {...props} />;
