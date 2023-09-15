import { Provider } from '@/libs/provider'
import './globals.css'
import { Grandstander } from 'next/font/google'

const grandstander = Grandstander({ subsets: ['latin'] })

export const metadata = {
	title: 'Selamat Datang di Melati',
	description: 'Web Media Pelajaran Interaktif Melati',
}

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body className={grandstander.className}>
				<main>
					<Provider>
						{children}
					</Provider>
				</main>
			</body>
		</html>
	)
}
