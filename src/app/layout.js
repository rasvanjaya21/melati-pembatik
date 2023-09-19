import "./globals.css"
import "boxicons/css/boxicons.min.css";
import { Grandstander } from "next/font/google"

const grandstander = Grandstander({ subsets: ["latin"] })

export const metadata = {
	title: "Melati - Web Multimedia Pembelajaran Interaktif",
	description: "Web Multimedia Pembelajaran Interaktif Melati",
}

export default function RootLayout({ children }) {
	return (
		<html lang="en" className="scroll-smooth">
			<link rel="apple-touch-icon" sizes="180x180" href="/apple-touch-icon.png"/>
			<link rel="icon" type="image/png" sizes="32x32" href="/favicon-32x32.png"/>
			<link rel="icon" type="image/png" sizes="16x16" href="/favicon-16x16.png"/>
			<link rel="manifest" href="/site.webmanifest"/>
			<link rel="mask-icon" href="/safari-pinned-tab.svg" color="#5bbad5"/>
			<meta name="msapplication-TileColor" content="#da532c"/>
			<meta name="theme-color" content="#ffffff"/>
			<body className={grandstander.className}>
				<main>
					{children}
				</main>
			</body>
		</html>
	)
}
