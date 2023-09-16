import './globals.css'
import "boxicons/css/boxicons.min.css";
import { Grandstander } from 'next/font/google'

const grandstander = Grandstander({ subsets: ['latin'] })

export const metadata = {
	title: 'Melati - Web Multimedia Pembelajaran',
	description: 'Web Multimedia Pembelajaran Interaktif Melati',
}

export default function RootLayout({ children }) {
	return (
		<html lang="en" className='scroll-smooth'>
			<link rel="icon" type="image/svg+xml" sizes="any" href="data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🌼</text></svg>" />
			<body className={grandstander.className}>
				<main>
					{children}
				</main>
			</body>
		</html>
	)
}
