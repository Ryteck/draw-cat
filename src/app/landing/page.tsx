import ColorfulDefaultAvatarAsset from "@/assets/colorful-default-avatar.jpg";
import LandingBannerAsset from "@/assets/landing-banner.jpg";
import Image from "next/image";
import Link from "next/link";

export default function Page() {
	return (
		<main className="h-screen w-screen flex flex-col gap-8">
			<header className="w-full items-center justify-center overflow-hidden text-neutral-500 flex gap-40 p-8">
				<div className="flex gap-8 items-center">
					<button
						type="button"
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
					</button>

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
					<button
						type="button"
						className="h-10 w-28 rounded-full border-2 border-neutral-900 hover:border-neutral-800 hover:text-neutral-400"
					>
						Sign in
					</button>
					<button
						type="button"
						className="h-10 w-28 rounded-full bg-neutral-900 hover:bg-neutral-800 hover:text-neutral-400"
					>
						Sign up
					</button>
				</div>
			</header>

			<div className="mx-auto text-center">
				<h1 className="text-4xl font-bold">Draw Cat</h1>
				<h2 className="text-xl text-neutral-300">Hello, World!</h2>
			</div>

			<button
				type="button"
				className="bg-rose-900 hover:bg-rose-800 mx-auto py-2 px-8 rounded-xl"
			>
				Open App
			</button>

			<div className="bottom-top-transparent w-full relative h-96 mt-auto">
				<Image
					fill
					alt="landing banner"
					src={LandingBannerAsset}
					className="object-cover"
				/>
			</div>
		</main>
	);
}
