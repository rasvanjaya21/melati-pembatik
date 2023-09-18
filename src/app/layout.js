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
			<body className={grandstander.className}>
				<main>
					{children}
				</main>
			</body>
		</html>
	)
}
