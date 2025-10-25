import type { Metadata } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import { Analytics } from '@vercel/analytics/next';
import ThemeProvider from '../components/theme/ThemeProvider';

const geistSans = Geist({
	variable: '--font-geist-sans',
	subsets: ['latin'],
});

const geistMono = Geist_Mono({
	variable: '--font-geist-mono',
	subsets: ['latin'],
});

export const metadata: Metadata = {
	title: 'Philip Mertens',
	description:
		'Welcome to my portfolio! I am a passionate stock analyst.',
	keywords: [
		'Finance',
		'Stocks',
		'Stock Analysis',
		'Portfolio',
		'Portfolio Management',
		'Investments',
		'Asset Allocation',
		'Risk Management',
		'Market Trends',
		'Trading Strategies',
		'Financial Planning',
		'Wealth Management',
		'Equity Research',
		'Capital Markets',
		'Economic Outlook',
		'Investment Strategy',
		'Risk Assessment',
		'Market Analysis',
		'Financial Performance',
		'Revenue Growth',
		'Valuation Models',
		'Dividend Yield',
		'Technical Analysis',
		'Fund Allocation',
		'Cash Flow',
		'Index Tracking',
		'Monetary Policy',
		'Inflation Trends',
		'Bond Markets',
		'Global Economy',
		'Philip',
		'Mertens',
		'Philip Mertens',
	],
	authors: [{ name: 'Philip Mertens' }],
	creator: 'Philip Mertens',
	openGraph: {
		title: 'Philip Mertens',
		description: '',
		url: 'philipmertens.com',
		siteName: 'Portfolio',
		// images: [
		// 	{
		// 		url: '/og-image.jpg',
		// 		width: 1200,
		// 		height: 630,
		// 		alt: 'Philip Mertens',
		//kjhgkjhgkj
		// 	},
		// ],
		locale: 'en_US',
		type: 'website',
	},
	robots: {
		index: true,
		follow: true,
		googleBot: {
			index: true,
			follow: true,
			'max-video-preview': -1,
			'max-image-preview': 'large',
			'max-snippet': -1,
		},
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" suppressHydrationWarning>
			<body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
				<ThemeProvider attribute="class" defaultTheme="dark" enableSystem>
					<div>{children}</div>
					<Analytics />
				</ThemeProvider>
			</body>
		</html>
	);
}
