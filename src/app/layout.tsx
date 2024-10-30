import "@/styles/custom.css";
import "@/styles/tailwind.css";

import type { Metadata } from "next";
import type { PropsWithChildren } from "react";

export const metadata: Metadata = {
	title: "Draw Cat",
	description: "A project workflow manager",
};

export default function Layout({ children }: PropsWithChildren) {
	return (
		<html lang="en">
			<body className="bg-neutral-950 text-neutral-100">{children}</body>
		</html>
	);
}
