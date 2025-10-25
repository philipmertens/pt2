'use client';
import { Headline } from "@/components/Headline";
import ThemeToggle from "@/components/theme/ThemeToggle";


export const Research = (props: { headline: string }) => {


	return (
		<div className="flex flex-col items-center justify-center min-h-screen bg-white text-black dark:bg-black dark:text-white">
			<div className="absolute top-4 right-4 z-10">
				<ThemeToggle />
			</div>
			<article className="border max-w-3xl leading-relaxed">
				<Headline headline={props.headline} />

			</article>
		</div>
	);
}