import ColorfulDefaultAvatarAsset from "@/assets/colorful-default-avatar.jpg";
import Image from "next/image";
import Link from "next/link";
import type { FC } from "react";

export const HeaderComponent: FC = () => (
	<header className="w-full items-center justify-center overflow-hidden text-neutral-500 flex gap-40 p-8">
		<div className="flex gap-8 items-center">
			<Link
				href="/landing"
				className="border-2 p-1 rounded-full border-neutral-900 hover:border-neutral-800"
			>
				<div className="w-10 h-10 rounded-full overflow-hidden relative">
					<Image
						fill
						src={ColorfulDefaultAvatarAsset}
						alt="colorful default avatar"
						className="object-cover"
						sizes="2.5rem"
					/>
				</div>
			</Link>

			<Link
				href="https://github.com/Ryteck/draw-cat"
				className="hover:underline hover:text-neutral-400"
				target="_blank"
			>
				GitHub
			</Link>

			<Link href="/" className="hover:underline hover:text-neutral-400">
				Community
			</Link>

			<Link href="/" className="hover:underline hover:text-neutral-400">
				News
			</Link>

			<Link href="/" className="hover:underline hover:text-neutral-400">
				Docs
			</Link>
		</div>

		<div className="flex gap-2">
			<Link
				href="/sign-in"
				className="flex items-center justify-center h-10 w-28 rounded-full border-2 border-neutral-900 hover:border-neutral-800 hover:text-neutral-400"
			>
				Sign in
			</Link>

			<Link
				href="/sign-up"
				className="flex items-center justify-center h-10 w-28 rounded-full bg-neutral-900 hover:bg-neutral-800 hover:text-neutral-400"
			>
				Sign up
			</Link>
		</div>
	</header>
);
