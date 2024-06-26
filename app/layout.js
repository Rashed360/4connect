import { Barlow } from 'next/font/google'
import '@/styles/index.css'

const barlow = Barlow({ subsets: ['latin'] })

export const metadata = {
	title: 'Create Next App',
	description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
	return (
		<html lang='en'>
			<body className={barlow.className}>{children}</body>
		</html>
	)
}
