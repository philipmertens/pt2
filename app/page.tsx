'use client';


import { ChartPieLabel } from '../components/ChartPieLabel';
import HeroSection from '../components/HeroSection';
import ProjectsSection from '../components/ProjectsSection';
import ThemeToggle from '../components/theme/ThemeToggle';

export default function MinimalModernPortfolio() {
	return (
		<div className="relative min-h-screen bg-white text-black dark:bg-black dark:text-white">
			<div className="absolute top-4 right-4 z-10">
				<ThemeToggle />
			</div>
			<HeroSection />
			<ChartPieLabel />
			<ProjectsSection />
		</div>
	);
}