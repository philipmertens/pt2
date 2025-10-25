'use client';

import { useState, useEffect } from 'react';
import { useTheme } from 'next-themes';
import { Sun, Moon } from 'lucide-react';

export default function ThemeToggle() {
	const [mounted, setMounted] = useState(false);
	const { theme, setTheme } = useTheme();

	useEffect(() => setMounted(true), []);

	if (!mounted) {
		return null;
	}

	return (
		<button
			onClick={() => setTheme(theme === 'dark' ? 'light' : 'dark')}
			className="p-2 scale-150 rounded-md hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors"
			aria-label="Toggle theme"
		>
			{theme === 'dark' ? <Sun className="h-6 w-6 text-white" /> : <Moon className="h-6 w-6 text-black" />}
		</button>
	);
}
