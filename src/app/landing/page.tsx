import LandingBannerAsset from "@/assets/landing-banner.jpg";
import Image from "next/image";

export default function Page() {
	return (
		<>
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
		</>
	);
}
