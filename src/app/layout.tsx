import "@/styles/custom.css";
import "@/styles/tailwind.css";
import "@/styles/no-scrollbar.css";

import { HeaderComponent } from "@/components/header";
import type { Metadata } from "next";
import type { PropsWithChildren } from "react";

export const metadata: Metadata = {
	title: "Draw Cat",
	description: "A project workflow manager",
};

export default function Layout({ children }: PropsWithChildren) {
	return (
		<html lang="en">
			<body className="bg-neutral-950 text-neutral-100">
				<main className="h-screen w-screen flex flex-col gap-8">
					<HeaderComponent />

					{children}
				</main>
			</body>
		</html>
	);
}
