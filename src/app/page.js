"use client"

import { useEffect, useRef, useState } from 'react'
import { FullScreen, useFullScreenHandle } from "react-full-screen"
import Tilt from 'react-parallax-tilt'
import Link from 'next/link'

export default function Home() {

	const fullScreenHandler = useFullScreenHandle()
	const bumperVideoRef = useRef()

	const [step, setStep] = useState("welcome")
	const [mainAudio, setMainAudio] = useState(null)
	const [selectAudio, setSelectAudio] = useState(null)
	const [backAudio, setBackAudio] = useState(null)
	const [startAudio, setStartAudio] = useState(null)
	const [menuAudio, setMenuAudio] = useState(null)
	const [isBumperVideoPlaying, setIsBumperVideoPlaying] = useState(false)
	const [isFullscreeen, setIsFullscreeen] = useState(false)
	const [isMainAudioPlaying, setIsMainAudioPlaying] = useState(false)

	const [marioFailAudio, setMarioFailAudio] = useState(null)
	const [marioClearAudio, setMarioClearAudio] = useState(null)
	const [marioCompleteAudio, setMarioCompleteAudio] = useState(null)

	const [firstAnswer, setFirstAnswer] = useState("")
	const [secondAnswer, setSecondAnswer] = useState("")
	const [thirdAnswer, setThirdAnswer] = useState("")
	const [fourthAnswer, setFourthAnswer] = useState("")
	const [fifthAnswer, setFifthAnswer] = useState("")
	const [sixthAnswer, setSixthAnswer] = useState("")
	const [seventhAnswer, setSeventhAnswer] = useState("")
	const [eighthAnswer, setEighthAnswer] = useState("")

	const [isFirstAnswerCorrect, setIsFirstAnswerCorrect] = useState(false)
	const [isSecondAnswerCorrect, setIsSecondAnswerCorrect] = useState(false)
	const [isThirdAnswerCorrect, setIsThirdAnswerCorrect] = useState(false)
	const [isFourthAnswerCorrect, setIsFourthAnswerCorrect] = useState(false)
	const [isFifthAnswerCorrect, setIsFifthAnswerCorrect] = useState(false)
	const [isSixthAnswerCorrect, setIsSixthAnswerCorrect] = useState(false)
	const [isSeventhAnswerCorrect, setIsSeventhAnswerCorrect] = useState(false)
	const [isEighthAnswerCorrect, setIsEighthAnswerCorrect] = useState(false)

	const [isBerlianOpened, setIsBerlianOpened] = useState(false)

	const [isBottomPage, setIsBottomPage] = useState(false)

	function handleBumperVideoPlay() {
		bumperVideoRef.current.play()
		setIsBumperVideoPlaying(true)
	}

	function handleBumperVideoPause() {
		bumperVideoRef.current.pause()
		setIsBumperVideoPlaying(false)
	}

	function onClickStartMainSound() {
		setIsMainAudioPlaying(true)
		mainAudio.play()
		mainAudio.loop = true
	}

	function onClickStopMainSound() {
		setIsMainAudioPlaying(false)
		mainAudio.pause()
		mainAudio.currentTime = 0
	}

	function onClickStartSelectSound() {
		selectAudio.play()
	}

	function onClickStartBackSound() {
		backAudio.play()
	}

	function onClickStartPlaySound() {
		startAudio.play()
	}

	function onClickStartMenuSound() {
		menuAudio.play()
	}

	function scrollToTop() {
		setIsBottomPage(false)
		window.scrollTo({
			top: 0,
			behavior: 'smooth'
		})
	}

	function scrollToBottom() {
		setIsBottomPage(true)
		window.scrollTo({
			top: document.documentElement.scrollHeight,
			behavior: 'smooth'
		})
	}

	const [isAtTop, setIsAtTop] = useState(true)
	const [isAtBottom, setIsAtBottom] = useState(false)

	function handleScroll() {
		const scrollTop = window.scrollY
		const scrollHeight = document.documentElement.scrollHeight
		const clientHeight = document.documentElement.clientHeight

		// Check if at the top of the page
		setIsAtTop(scrollTop === 0)

		// Check if at the bottom of the page
		setIsAtBottom(scrollTop + clientHeight === scrollHeight)
	}

	useEffect(() => {

		window.addEventListener('scroll', handleScroll)

		return () => { window.removeEventListener('scroll', handleScroll) }

	}, [])
	
	useEffect(() => {
		scrollToTop()
	}, [step])
	
	useEffect(() => {
		setTimeout(() => { 
			if (isBerlianOpened) {
				setIsBerlianOpened(false)
			}
		 }, 5000)
	}, [isBerlianOpened])

	useEffect(() => {

		setMainAudio(new Audio("/sounds/backsound.mp3"))
		setSelectAudio(new Audio("/sounds/select.mp3"))
		setBackAudio(new Audio("/sounds/back.mp3"))
		setStartAudio(new Audio("/sounds/start.mp3"))
		setMenuAudio(new Audio("/sounds/menu.mp3"))

		setMarioFailAudio(new Audio("/sounds/mario-fail.mp3"))
		setMarioClearAudio(new Audio("/sounds/mario-clear.mp3"))
		setMarioCompleteAudio(new Audio("/sounds/mario-complete.mp3"))

	}, [])

	useEffect(() => {
		
		if (firstAnswer + secondAnswer + thirdAnswer + fourthAnswer + fifthAnswer + sixthAnswer == "trakea" && step == "latihan-2") {
			marioClearAudio.play()
		}

		if (firstAnswer.length == 1 && secondAnswer.length == 1 && thirdAnswer.length == 1 && fourthAnswer.length == 1 && fifthAnswer.length == 1 && sixthAnswer.length == 1 && firstAnswer + secondAnswer + thirdAnswer + fourthAnswer + fifthAnswer + sixthAnswer != "trakea" && step == "latihan-2") {
			marioFailAudio.play()
		}

		if (firstAnswer + secondAnswer + thirdAnswer + fourthAnswer + fifthAnswer + sixthAnswer + seventhAnswer + eighthAnswer == "alveolus" && step == "latihan-3") {
			marioClearAudio.play()
		}

		if (firstAnswer.length == 1 && secondAnswer.length == 1 && thirdAnswer.length == 1 && fourthAnswer.length == 1 && fifthAnswer.length == 1 && sixthAnswer.length == 1 && seventhAnswer.length == 1 && eighthAnswer.length == 1 && firstAnswer + secondAnswer + thirdAnswer + fourthAnswer + fifthAnswer + sixthAnswer + seventhAnswer + eighthAnswer != "alveolus" && step == "latihan-3") {
			 marioFailAudio.play()
		}

		if (firstAnswer + secondAnswer + thirdAnswer + fourthAnswer + fifthAnswer + sixthAnswer + seventhAnswer == "fegbadc" && step == "latihan-4") {
			marioClearAudio.play()
		}

		if (firstAnswer.length == 1 && secondAnswer.length == 1 && thirdAnswer.length == 1 && fourthAnswer.length == 1 && fifthAnswer.length == 1 && sixthAnswer.length == 1 && seventhAnswer.length == 1 && firstAnswer + secondAnswer + thirdAnswer + fourthAnswer + fifthAnswer + sixthAnswer + seventhAnswer != "fegbadc" && step == "latihan-4") {
			marioFailAudio.play()
		}

	}, [firstAnswer, secondAnswer, thirdAnswer, fourthAnswer, fifthAnswer, sixthAnswer, seventhAnswer, eighthAnswer, marioFailAudio, marioClearAudio, step])

	return (

		<FullScreen handle={fullScreenHandler}>

			{/* content screen */}
			<div className={`flex justify-center h-screen p-10 pt-24 sm:p-24 sm:pt-20 md:pt-8 xl:p-10 ${isFullscreeen && `overflow-auto`}`}>

				<div className="flex flex-col w-full md:w-fit self-start">

					{step == "welcome" ?

						<>
							{/* welcome heading */}
							<div className='animate-[float-down_0.5s_forwards] duration-500' key={"welcome"}>
								<div className='text-7xl -ml-3 bg-[url("/icons/blossom.png")] bg-contain bg-no-repeat'>ㅤ</div>
								<div className="text-5xl font-black">Selamat Datang Di Melati</div>
								<div className="text-xl font-black">Beranda Website Multimedia Interaktif Melati #PembaTIK2023</div>
							</div>
							
							{/* video content */}
							<div className=" lg:h-[462px] mt-7 items-center justify-center rounded-3xl flex cursor-pointer"
								onClick={(event) => {	 
									isBumperVideoPlaying ? handleBumperVideoPause() : handleBumperVideoPlay()
								}}
							>

								{isBumperVideoPlaying ?
									<div className="absolute">
										<div className='text-5xl md:text-6xl leading-none bg-[url("/icons/pause-button.png")] bg-contain bg-no-repeat duration-500'>ㅤ</div>
									</div>
									:
									<div className="absolute">
										<div className='text-5xl md:text-6xl leading-none bg-[url("/icons/play-button.png")] bg-contain bg-no-repeat duration-500'>ㅤ</div>
									</div>
								}

								<video
									className="bg-black h-full rounded-3xl w-[805px] border border-solid border-b-8 border-black"
									preload="metadata"
									ref={bumperVideoRef}
									onEnded={(event) => {
										setIsBumperVideoPlaying(false)
									}}
								>
									<source className="h-fit w-fit" src="https://objectstorage.ap-singapore-1.oraclecloud.com/n/axjwmyaxpzwo/b/bucket-20230915-2013/o/intro-pembatik.mp4" type="video/mp4" />
								</video>
							</div>
							
							{/* start button */}
							<button
								className='animate-[float-up_0.5s] duration-500 flex justify-center text-black text-lg md:text-xl font-black bg-primary p-2 rounded-2xl cursor-pointer mt-7 hover:scale-105 border border-solid border-b-8 border-black'
								onClick={(event) => {
									onClickStartPlaySound()
									setIsBumperVideoPlaying(false)
									setStep("menu")
								}}
								key={"first-welcome-button"}
							>
								<div className='text-2xl leading-none bg-[url("/icons/partying-face.png")] bg-contain bg-no-repeat mr-2'>ㅤ</div>
								Mulai Petualangan Belajar
							</button>

							{/* readme button */}
							<button
								className='animate-[float-up_0.5s] duration-500 flex justify-center text-black text-lg md:text-xl mb-16 sm:mb-7 font-black bg-secondary p-2 rounded-2xl cursor-pointer mt-7 hover:scale-105 border border-solid border-b-8 border-black'
								onClick={(event) => {
									onClickStartPlaySound()
									setIsBumperVideoPlaying(false)
									setStep("guide-1")
								}}
								key={"second-welcome-button"}
							>
								<div className='text-2xl leading-none bg-[url("/icons/hugging-face.png")] bg-contain bg-no-repeat mr-2'>ㅤ</div>
								Baca Panduan Penggunaan
							</button>
						</>

					: step == "guide-1" ?

						<>
							<div className="text-5xl font-black duration-500">
								<div className='text-7xl font-black scale-105 duration-500'>🤗</div>
								<div className="text-5xl font-black">Petunjuk Penggunaan</div>
								<div className="text-xl font-black duration-500">Panduan Melati : Multimedia Pembelajaran Interaktif</div>
							</div>
							<div className='grid-rows-1 pb-7 w-full grid gap-10 mt-7 duration-500'>
								<div className='max-w-[808px] h-full bg-tertiary rounded-2xl shadow-2xl border border-solid border-b-8 border-black'>
									<div className='text-base md:text-xl p-10 font-black'>Sebelum memulai petualangan mu dalam belajar, marilah kita membaca doa terlebih dahulu.</div>
									<div className='p-10 pt-0 text-base md:text-xl font-black text-right'>رَضِيْتُ بِاللهِ رَبًّا وَبِالإِسْلَامِ دِيْنًا وَبِمُحَمَّدٍ نَبِيًّا وَرَسُوْلًا رَبِّ زِدْنِيْ عِلْمًا وَارْزُقْنِيْ فَهْمًا</div>
									<div className='p-10 pt-0 text-base md:text-xl font-black'>Yang artinya : Aku ridho Allah SWT sebagai Tuhanku, dan Islam sebagai agamaku, dan Muhammad SAW sebagai Nabi dan Rasulku. Ya Allah tambahkanlah kepadaku ilmu dan berikanlah aku pemahaman yang baik.</div>
									<div className='p-10 pt-0 text-base md:text-xl font-black'>Amiin, Semoga ilmu yang kita peroleh, dapat bermanfaat.</div>
								</div>
							</div>
							<div className='flex flex-col gap-7 justify-between'>
								<button
									className='text-black text-lg md:text-xl w-full font-black bg-primary p-2 rounded-2xl cursor-pointer hover:scale-105 border border-solid border-b-8 border-black duration-500'
									onClick={(event) => {
										onClickStartPlaySound()
										setStep("welcome")
									}}
								>
									🌼 Beranda Melati
								</button>
								<button
									className='text-black text-lg md:text-xl w-full font-black mb-16 sm:mb-7 bg-secondary p-2 rounded-2xl cursor-pointer hover:scale-105 border border-solid border-b-8 border-black duration-500'
									onClick={(event) => {
										onClickStartSelectSound()
										setStep("guide-2")
									}}
								>
									👉 Selanjutnya
								</button>
							</div>
						</>
					: step == "guide-2" ?
						<>
							<div className="text-5xl font-black ">
								<div className='text-7xl font-black scale-105 duration-500'>🤗</div>
								<div className="text-5xl font-black">Petunjuk Penggunaan</div>
								<div className="text-xl font-black duration-500">Panduan Melati : Multimedia Pembelajaran Interaktif</div>
							</div>
							<div className='grid-rows-1 pb-7 w-full grid gap-10 mt-7 '>
								<div className='max-w-[808px] h-full bg-tertiary rounded-2xl shadow-2xl border border-solid border-b-8 border-black'>
									<div className='text-base md:text-xl p-10 font-black'>Pada website Melati ini, kita akan belajar tentang sistem pernapasan pada manusia. Mulai dari organ - organ pernapasan apa saja yang terdapat pada tubuh manusia, fungsi - fungsi nya, proses pernapasan nya, serta kita juga akan belajar cara untuk merawatnya. </div>
									<div className='text-base md:text-xl p-10 pt-0 font-black'>Tidak hanya itu loh, disamping belajar, kita juga akan bermain games yang juga bertujuan untuk melatih pemahaman kita.</div>
									<div className='text-base md:text-xl p-10 pt-0 font-black'>Nah, udah enggak sabar kan ? Yuk disimak.</div>
								</div>
							</div>
							<div className='flex flex-col gap-7 justify-between'>
								<button
									className='text-black text-lg md:text-xl w-full font-black bg-primary p-2 rounded-2xl cursor-pointer hover:scale-105 border border-solid border-b-8 border-black duration-500'
									onClick={(event) => {
										onClickStartBackSound()
										setStep("guide-1")
									}}
								>
									👈 Sebelumnya
								</button>
								<button
									className='text-black text-lg md:text-xl w-full font-black mb-16 sm:mb-7 bg-secondary p-2 rounded-2xl cursor-pointer hover:scale-105 border border-solid border-b-8 border-black duration-500'
									onClick={(event) => {
										onClickStartSelectSound()
										setStep("guide-3")
									}}
								>
									👉 Selanjutnya
								</button>
							</div>
						</>
					: step == "guide-3" ?
						<>
							<div className="text-5xl font-black">
								<div className='text-7xl font-black scale-105 duration-500'>🤗</div>
								<div className="text-5xl font-black">Petunjuk Penggunaan</div>
								<div className="text-xl font-black duration-500">Panduan Melati : Multimedia Pembelajaran Interaktif</div>
							</div>
							<div className='grid-rows-1 pb-7 w-full grid gap-10 mt-7'>
								<div className='max-w-[808px] h-full bg-tertiary rounded-2xl shadow-2xl border border-solid border-b-8 border-black'>
									<div className='text-base md:text-xl p-10 font-black'>Materi yang akan dipelajari nantinya akan meliputi penjelasan mengenai topik yang dibahas ya teman - teman.</div>
									<div className='text-base md:text-xl p-10 pt-0 font-black'>Kalian hanya perlu menekan tombol yang disediakan, setelah itu kalian membaca dan memahami materi yang disajikan, termasuk topik/judul, sasaran dan tujuan pembelajaran, pendahuluan materi, uraian materi serta latihan.</div>
									<div className='text-base md:text-xl p-10 pt-0 font-black'>Mudah sekali bukan ? Setelah ini adalah halaman terakhir panduan, semangat !</div>
								</div>
							</div>
							<div className='flex flex-col gap-7 justify-between'>
								<button
									className='text-black text-lg md:text-xl w-full font-black bg-primary p-2 rounded-2xl cursor-pointer hover:scale-105 border border-solid border-b-8 border-black duration-500'
									onClick={(event) => {
										onClickStartBackSound()
										setStep("guide-2")
									}}
								>
									👈 Sebelumnya
								</button>
								<button
									className='text-black text-lg md:text-xl w-full font-black mb-16 sm:mb-7 bg-secondary p-2 rounded-2xl cursor-pointer hover:scale-105 border border-solid border-b-8 border-black duration-500'
									onClick={(event) => {
										onClickStartSelectSound()
										setStep("guide-4")
									}}
								>
									👉 Selanjutnya
								</button>
							</div>
						</>
					: step == "guide-4" ?
						<>
							<div className="text-5xl font-black">
								<div className='text-7xl font-black scale-105 duration-500'>🤗</div>
								<div className="text-5xl font-black">Petunjuk Penggunaan</div>
								<div className="text-xl font-black duration-500">Panduan Melati : Multimedia Pembelajaran Interaktif</div>
							</div>
							<div className='grid-rows-1 pb-7 w-full grid gap-10 mt-7'>
								<div className='max-w-[808px] h-full bg-tertiary rounded-2xl shadow-2xl border border-solid border-b-8 border-black'>
									<div className='text-base md:text-xl p-10 font-black'>Jangan lupakan pesan yang telah dibaca ya teman - teman. Pantun dulu yuk !</div>
									<div className='text-base md:text-xl p-10 pb-0 pt-0 font-black'>Angin bertiup, kapalpun berlayar</div>
									<div className='text-base md:text-xl p-10 pb-0 pt-0 font-black'>Jauh berlabuh dari dermaga</div>
									<div className='text-base md:text-xl p-10 pb-0 pt-0 font-black'>Guru mengajar siap belajar</div>
									<div className='text-base md:text-xl p-10 pt-0 font-black'>Gapai impian menuju cita</div>
									<div className='text-base md:text-xl p-10 pt-0 font-black'>Menguatkan Ekosistem Digital Pendidikan dengan Berkarya dan Berbagi untuk Wujudkan Merdeka Belajar. Kreator Melati dan peserta #PembaTIK2023, Ibrahim</div>
								</div>
							</div>
							<div className='flex flex-col gap-7 justify-between'>
								<button
									className='text-black text-lg md:text-xl w-full font-black bg-primary p-2 rounded-2xl cursor-pointer hover:scale-105 border border-solid border-b-8 border-black duration-500'
									onClick={(event) => {
										onClickStartBackSound()
										setStep("guide-3")
									}}
								>
									👈 Sebelumnya
								</button>
								<button
									className='text-black text-lg md:text-xl w-full font-black mb-16 sm:mb-7 bg-secondary p-2 rounded-2xl cursor-pointer hover:scale-105 border border-solid border-b-8 border-black duration-500'
									onClick={(event) => {
										onClickStartPlaySound()
										setStep("welcome")
									}}
								>
									🌼 Beranda Melati
								</button>
							</div>
						</>
					: step == "menu" ?
						<>
							{/* <div className="scale-100 animate-[float-down_0.5s_forwards] duration-500">
								<div className='text-7xl bg-[url("/icons/partying-face.png")] bg-contain bg-no-repeat'>ㅤ</div> */}
								{/* <div className='text-7xl font-black scale-105 duration-500'>🥳</div> */}
								{/* <div className="text-5xl font-black">Menu Utama Melati</div>
								<div className="text-xl font-black">Silakan Pilih Menu Dibawah Untuk Melanjutkan</div>
							</div> */}

							<div className="animate-[float-down_0.5s_forwards] duration-500" key={"menu"}>
								<div className='text-7xl -ml-3 bg-[url("/icons/partying-face.png")] bg-contain bg-no-repeat'>ㅤ</div>
								<div className="text-5xl font-black">Menu Utama Melati</div>
								<div className="text-xl font-black">Silakan Pilih Menu Dibawah Untuk Melanjutkan</div>
							</div>

							<div className='grid-rows-1 md:grid-cols-3 w-full grid gap-5 mt-7 duration-500'>

								<Tilt className='cursor-pointer'>
									<div className='border border-solid border-b-8 border-black lg:w-64 h-64 bg-tertiary hover:bg-[url("/images/hover-menu.webp")] hover:bg-no-repeat hover:bg-right-bottom hover:bg-contain rounded-2xl shadow-2xl' onClick={(event) => {
										onClickStartMenuSound()
										setStep("konsep-1")
									}}>
										<div className='text-4xl p-10 pb-0 font-black'>01</div>
										<div className='p-10 pt-0 pb-0 text-lg font-black'>Konsep</div>
										<div className='p-10 pt-0 pb-5 text-base font-black'>Materi Pembelajaran</div>
										{/* <div className='p-10 pt-0 text-3xl font-black'>💡</div> */}
										<div className='m-10 mt-0 text-3xl bg-[url("/icons/light-bulb.png")] bg-contain bg-no-repeat'>ㅤ</div>
									</div>
								</Tilt>

								<Tilt className='cursor-pointer'>
									<div className='border border-solid border-b-8 border-black lg:w-64 h-64 bg-[#FFE3CF] hover:bg-[url("/images/hover-menu.webp")] hover:bg-no-repeat hover:bg-right-bottom hover:bg-contain rounded-2xl shadow-2xl' onClick={(event) => {
										onClickStartMenuSound()
										setStep("pendahuluan")
									}}>
										<div className='text-4xl p-10 pb-0 font-black'>02</div>
										<div className='p-10 pt-0 pb-0 text-lg font-black'>Pendahuluan</div>
										<div className='p-10 pt-0 pb-5 text-base font-black'>Pengenalan Materi</div>
										<div className='m-10 mt-0 text-3xl bg-[url("/icons/handshake.png")] bg-contain bg-no-repeat'>ㅤ</div>
										{/* <div className='p-10 pt-0 text-3xl font-black'>🤝</div> */}
									</div>
								</Tilt>

								<Tilt className='cursor-pointer'>
									<div className='border border-solid border-b-8 border-black lg:w-64 h-64 bg-[#D8F1FF] hover:bg-[url("/images/hover-menu.webp")] hover:bg-no-repeat hover:bg-right-bottom hover:bg-contain rounded-2xl shadow-2xl' onClick={(event) => {
										onClickStartMenuSound()
										setStep("materi-1")
									}}>
										<div className='text-4xl p-10 pb-0 font-black'>03</div>
										<div className='p-10 pt-0 pb-0 text-lg font-black'>Materi</div>
										<div className='p-10 pt-0 pb-5 text-base font-black'>Sistem Pernapasan</div>
										<div className='m-10 mt-0 text-3xl bg-[url("/icons/label.png")] bg-contain bg-no-repeat'>ㅤ</div>
										{/* <div className='p-10 pt-0 text-3xl font-black'>🏷️</div> */}
									</div>
								</Tilt>

								<Tilt className='cursor-pointer'>
									<div className='border border-solid border-b-8 border-black lg:w-64 h-64 bg-[#E0F9E7] hover:bg-[url("/images/hover-menu.webp")] hover:bg-no-repeat hover:bg-right-bottom hover:bg-contain rounded-2xl shadow-2xl' onClick={(event) => {
										onClickStartMenuSound()
										setStep("latihan-1")
									}}>
										<div className='text-4xl p-10 pb-0 font-black'>04</div>
										<div className='p-10 pt-0 pb-0 text-lg font-black'>Latihan</div>
										<div className='p-10 pt-0 pb-5 text-base font-black'>Evaluasi Pemahaman</div>
										<div className='m-10 mt-0 text-3xl bg-[url("/icons/flexed-biceps.png")] bg-contain bg-no-repeat'>ㅤ</div>
										{/* <div className='p-10 pt-0 text-3xl font-black'>💪</div> */}
									</div>
								</Tilt>

								<Tilt className='cursor-pointer'>
									<div className='border border-solid border-b-8 border-black lg:w-64 h-64 bg-[#EFE0FF] hover:bg-[url("/images/hover-menu.webp")] hover:bg-no-repeat hover:bg-right-bottom hover:bg-contain rounded-2xl shadow-2xl' onClick={(event) => {
										onClickStartMenuSound()
										setStep("tentang")
									}}>
										<div className='text-4xl p-10 pb-0 font-black'>05</div>
										<div className='p-10 pt-0 pb-0 text-lg font-black'>Tentang</div>
										<div className='p-10 pt-0 pb-5 text-base font-black'>Informasi Kreator</div>
										{/* <div className='p-10 pt-0 text-3xl font-black'>👨‍🏫</div> */}
										<div className='m-10 mt-0 text-3xl bg-[url("/icons/man-teacher.png")] bg-contain bg-no-repeat'>ㅤ</div>
									</div>
								</Tilt>

								<Tilt className='cursor-pointer'>
									<div className='border border-solid border-b-8 border-black lg:w-64 h-64 bg-[#FFF4CC] hover:bg-[url("/images/hover-menu.webp")] hover:bg-no-repeat hover:bg-right-bottom hover:bg-contain rounded-2xl shadow-2xl' onClick={(event) => {
										onClickStartMenuSound()
										setStep("referensi")
									}}>
										<div className='text-4xl p-10 pb-0 font-black'>06</div>
										<div className='p-10 pt-0 pb-0 text-lg font-black'>Referensi</div>
										<div className='p-10 pt-0 pb-5 text-base font-black'>Rujukan Pembuatan</div>
										{/* <div className='p-10 pt-0 text-3xl font-black'>📒</div> */}
										<div className='m-10 mt-0 text-3xl bg-[url("/icons/ledger.png")] bg-contain bg-no-repeat'>ㅤ</div>
									</div>
								</Tilt>

							</div>

							<button
								className='flex justify-center text-black text-lg md:text-xl font-black mb-16 sm:mb-7 bg-primary p-2 mt-7 rounded-2xl cursor-pointer hover:scale-105 border border-solid border-b-8 border-black animate-[float-up_0.5s] duration-500'
								onClick={(event) => {
									onClickStartPlaySound()
									setIsBumperVideoPlaying(false)
									setStep("welcome")
								}}
							>
								<div className='text-2xl leading-none bg-[url("/icons/blossom.png")] bg-contain bg-no-repeat mr-2'>ㅤ</div>
								Beranda Melati
							</button>
						</>
					: step == "konsep-1" ?
						<>
							<div className="animate-[float-down_0.5s_forwards] duration-500" key={"konsep"}>
								<div className='text-7xl -ml-3 bg-[url("/icons/light-bulb.png")] bg-contain bg-no-repeat'>ㅤ</div>
								<div className="text-5xl font-black">Konsep Pembelajaran</div>
								<div className="text-xl font-black">Rancangan Materi Yang Nantinya Akan Dipaparkan</div>
							</div>
							<div className='grid-rows-1 pb-7 w-full grid gap-10 mt-7 duration-500'>
								<div className='max-w-[808px] h-full bg-tertiary rounded-2xl shadow-2xl border border-solid border-b-8 border-black'>
									<div className='text-base md:text-xl p-10 font-black'>Elemen : Pemahaman IPAS.</div>
									<div className='text-base md:text-xl p-10 pt-0 font-black'>Capaian Pemelajaran ( CP ) : Peserta didik melakukan simulasi dengan menggunakan gambar/bagan/alat/media sederhana tentang sistem organ tubuh manusia (sistem pernafasan/ pencernaan/ peredaran darah) yang dikaitkan dengan cara menjaga kesehatan organ tubuhnya dengan benar.</div>
								</div>
							</div>
							<div className='flex flex-col gap-7 justify-between'>
								<button
									className='text-black text-lg md:text-xl w-full font-black bg-primary p-2 rounded-2xl cursor-pointer hover:scale-105 border border-solid border-b-8 border-black duration-500'
									onClick={(event) => {
										onClickStartPlaySound()
										setStep("menu")
									}}
								>
									🥳 Menu Utama
								</button>
								<button
									className='text-black text-lg md:text-xl w-full font-black mb-16 sm:mb-7 bg-secondary p-2 rounded-2xl cursor-pointer hover:scale-105 border border-solid border-b-8 border-black duration-500'
									onClick={(event) => {
										onClickStartSelectSound()
										setStep("konsep-2")
									}}
								>
									👉 Selanjutnya
								</button>
							</div>
						</>
					: step == "konsep-2" ?
						<>
							{/* <div className="text-5xl font-black">
								<div className='text-8xl bg-[url("/icons/light-bulb.png")] bg-contain bg-no-repeat scale-105 duration-500'>ㅤ</div>
								<div className="text-5xl font-black">Konsep</div>
								<div className="text-xl font-black duration-500">Materi Pembelajaran</div>
							</div> */}
							<div className="animate-[float-down_0.5s_forwards] duration-500" key={"konsep"}>
								<div className='text-7xl -ml-3 bg-[url("/icons/light-bulb.png")] bg-contain bg-no-repeat'>ㅤ</div>
								<div className="text-5xl font-black">Konsep Pembelajaran</div>
								<div className="text-xl font-black">Rancangan Materi Yang Nantinya Akan Dipaparkan</div>
							</div>
							<div className='grid-rows-1 pb-7 w-full grid gap-10 mt-7'>
								<div className='max-w-[808px] h-full bg-tertiary rounded-2xl shadow-2xl border border-solid border-b-8 border-black'>
									<div className='text-base md:text-xl p-10 pb-0 font-black'>Tujuan Pembelajaran ( TP ) :</div>
									<div className='text-base md:text-xl p-10 pb-0 font-black'>a. Peserta didik dapat mengnyebutkan organ-organ pernafasan pada manusia dengan benar.</div>
									<div className='text-base md:text-xl p-10 pb-0 pt-0 font-black'>b. Peserta didik dapat menjelaskan urutan system pernafasan pada manusia dengan benar.</div>
									<div className='text-base md:text-xl p-10 pt-0 font-black'>c. Peserta didik dapat menyebutkan cara menjaga kesehatan organ pernafasan pada manusia dengan benar.</div>
								</div>
							</div>
							<div className='flex flex-col gap-7 justify-between'>
								<button
									className='text-black text-lg md:text-xl w-full font-black bg-primary p-2 rounded-2xl cursor-pointer hover:scale-105 border border-solid border-b-8 border-black duration-500'
									onClick={(event) => {
										onClickStartBackSound()
										setStep("konsep-1")
									}}
								>
									👈 Sebelumnya
								</button>
								<button
									className='text-black text-lg md:text-xl w-full font-black mb-16 sm:mb-7 bg-secondary p-2 rounded-2xl cursor-pointer hover:scale-105 border border-solid border-b-8 border-black duration-500'
									onClick={(event) => {
										onClickStartSelectSound()
										setStep("konsep-3")
									}}
								>
									👉 Selanjutnya
								</button>
							</div>
						</>
					: step == "konsep-3" ?
						<>
							{/* <div className="text-5xl font-black">
								<div className='text-8xl bg-[url("/icons/light-bulb.png")] bg-contain bg-no-repeat scale-105 duration-500'>ㅤ</div>
								<div className="text-5xl font-black">Konsep</div>
								<div className="text-xl font-black duration-500">Materi Pembelajaran</div>
							</div> */}
							{/* <div className="scale-100">
								<div className='text-7xl -ml-3 bg-[url("/icons/light-bulb.png")] bg-contain bg-no-repeat'>ㅤ</div> */}
								{/* <div className='text-7xl font-black scale-105 duration-500'>🥳</div> */}
								{/* <div className="text-5xl font-black">Konsep Pembelajaran</div>
								<div className="text-xl font-black">Rancangan Materi Yang Nantinya Akan Dipaparkan</div>
							</div> */}
							<div className="animate-[float-down_0.5s_forwards] duration-500" key={"konsep"}>
								<div className='text-7xl -ml-3 bg-[url("/icons/light-bulb.png")] bg-contain bg-no-repeat'>ㅤ</div>
								<div className="text-5xl font-black">Konsep Pembelajaran</div>
								<div className="text-xl font-black">Rancangan Materi Yang Nantinya Akan Dipaparkan</div>
							</div>
							<div className='grid-rows-1 pb-7 w-full grid gap-10 mt-7'>
								<div className='max-w-[808px] h-full bg-tertiary rounded-2xl shadow-2xl border border-solid border-b-8 border-black'>
									<div className='text-base md:text-xl p-10 font-black'>Sasaran : Media pembelajaran MPI ini dibuat untuk proses pembelajaran pada jenjang SD fase C kelas V kurikulum Merdeka. </div>
									<div className='text-base md:text-xl p-10 pt-0 font-black'>Pemahaman konsep pembelajaran membantu guru dalam merencanakan dan melaksanakan strategi pengajaran yang efektif untuk mencapai tujuan pembelajaran optimal.</div>
								</div>
							</div>
							<div className='flex flex-col gap-7 justify-between'>
								<button
									className='text-black text-lg md:text-xl w-full font-black bg-primary p-2 rounded-2xl cursor-pointer hover:scale-105 border border-solid border-b-8 border-black duration-500'
									onClick={(event) => {
										onClickStartBackSound()
										setStep("konsep-2")
									}}
								>
									👈 Sebelumnya
								</button>
								<button
									className='text-black text-lg md:text-xl w-full font-black mb-16 sm:mb-7 bg-secondary p-2 rounded-2xl cursor-pointer hover:scale-105 border border-solid border-b-8 border-black duration-500'
									onClick={(event) => {
										onClickStartPlaySound()
										setStep("menu")
									}}
								>
									🥳 Menu Utama
								</button>
							</div>
						</>
					: step == "pendahuluan" ?
						<>
							<div className="text-5xl font-black">
								<div className='text-7xl font-black scale-105 duration-500'>🤝</div>
								<div className="text-5xl font-black">Pendahuluan</div>
								<div className="text-xl font-black duration-500">Pengenalan Materi</div>
							</div>
							<div className='grid-rows-1 pb-7 w-full grid gap-10 mt-7 duration-500'>
								<div className='max-w-[808px] h-full bg-tertiary rounded-2xl shadow-2xl border border-solid border-b-8 border-black'>
									<div className='text-base md:text-xl p-10 pb-0 font-black'>Pendahuluan Materi Sistem Pernapasan</div>
									<div className='text-base md:text-xl p-10 font-black'>Pernapasan atau bisa disebut juga dengan respirasi yang dapat didefinisikan sebagai sebuah proses pengambilan oksigen, pelepasan karbohidrat dan penggunaan energi yang ada di dalam tubuh.</div>
									<div className='text-base md:text-xl p-10 pt-0 font-black'>Urutan saluran pernapasan adalah sebagai berikut: hidung – faring – laring – trakea – bronkus – bronkiolus – alveolus.</div>
								</div>
							</div>
							<div className='flex justify-between'>
								<button
									className='text-black text-lg md:text-xl w-full font-black mb-16 sm:mb-7 bg-primary p-2 rounded-2xl cursor-pointer hover:scale-105 border border-solid border-b-8 border-black duration-500'
									onClick={(event) => {
										onClickStartPlaySound()
										setStep("menu")
									}}
								>
									🥳 Menu Utama
								</button>
							</div>
						</>
					: step == "materi-1" ?
						<>
							<div className="text-5xl font-black">
								<div className='text-7xl font-black scale-105 duration-500'>🏷️</div>
								<div className="text-5xl font-black">Materi</div>
								<div className="text-xl font-black duration-500">Sistem Pernapasan</div>
							</div>
							<div className='grid-rows-1 pb-7 w-full grid gap-10 mt-7 duration-500'>
								<div className='max-w-[808px] h-full bg-tertiary rounded-2xl shadow-2xl border border-solid border-b-8 border-black'>
									<div className=' p-10 pb-0 '>
										<div className='text-base md:text-xl font-black bg-[url("/images/respiration.webp")] bg-contain bg-no-repeat h-32'></div>
									</div>
									<div className='text-base md:text-xl p-10 font-black'>Materi Sistem Pernapasan : Bernafas sangatlah penting bagi kita, sebelumnya anak-anak harus memahami apa saja organ pernafasan beserta fungsinya.</div>
								</div>
							</div>
							<div className='flex flex-col gap-7 justify-between'>
								<button
									className='text-black text-lg md:text-xl w-full font-black bg-primary p-2 rounded-2xl cursor-pointer hover:scale-105 border border-solid border-b-8 border-black duration-500'
									onClick={(event) => {
										onClickStartPlaySound()
										setStep("menu")
									}}
								>
									🥳 Menu Utama
								</button>
								<button
									className='text-black text-lg md:text-xl w-full font-black mb-16 sm:mb-7 bg-secondary p-2 rounded-2xl cursor-pointer hover:scale-105 border border-solid border-b-8 border-black duration-500'
									onClick={(event) => {
										onClickStartSelectSound()
										setStep("materi-2")
									}}
								>
									👉 Selanjutnya
								</button>
							</div>
						</>
					: step == "materi-2" ?
						<>
							<div className="text-5xl font-black">
								<div className='text-7xl font-black scale-105 duration-500'>🏷️</div>
								<div className="text-5xl font-black">Materi</div>
								<div className="text-xl font-black duration-500">Sistem Pernapasan</div>
							</div>
							<div className='grid-rows-1 pb-7 w-full grid gap-10 mt-7'>
								<div className='max-w-[808px] h-full bg-tertiary rounded-2xl shadow-2xl border border-solid border-b-8 border-black'>
									<div className='text-base md:text-xl p-10 font-black'>Bagaimana cara kita bernafas ?</div>
									<div className='text-base md:text-xl pt-0 p-10 font-black'>Makhluk hidup bernapas untuk melanjutkan hidup. Begitu pula dengan manusia. Sama dengan hewan ataupun tumbuhan, manusia bernapas dengan paru-paru.</div>
									<div className='text-base md:text-xl pt-0 p-10 font-black'>Saat manusia bernapas, ada tahap-tahap yang harus dilalui. Tahapan manusia bernapas dikenal dengan istilah sistem pernapasan.</div>
								</div>
							</div>
							<div className='flex flex-col gap-7 justify-between'>
								<button
									className='text-black text-lg md:text-xl w-full font-black bg-primary p-2 rounded-2xl cursor-pointer hover:scale-105 border border-solid border-b-8 border-black duration-500'
									onClick={(event) => {
										onClickStartBackSound()
										setStep("materi-1")
									}}
								>
									👈 Sebelumnya
								</button>
								<button
									className='text-black text-lg md:text-xl w-full font-black mb-16 sm:mb-7 bg-secondary p-2 rounded-2xl cursor-pointer hover:scale-105 border border-solid border-b-8 border-black duration-500'
									onClick={(event) => {
										onClickStartSelectSound()
										setStep("materi-3")
									}}
								>
									👉 Selanjutnya
								</button>
							</div>
						</>
					: step == "materi-3" ?
						<>
							<div className="text-5xl font-black">
								<div className='text-7xl font-black scale-105 duration-500'>🏷️</div>
								<div className="text-5xl font-black">Materi</div>
								<div className="text-xl font-black duration-500">Sistem Pernapasan</div>
							</div>
							<div className='grid-rows-1 pb-7 w-full grid gap-10 mt-7'>
								<div className='max-w-[808px] h-full bg-tertiary rounded-2xl shadow-2xl border border-solid border-b-8 border-black'>
									<div className='text-base md:text-xl p-10 font-black'>Sistem pernapasan adalah kumpulan organ-organ yang membantu manusia dalam proses bernapas. Sistem pernapasan membantu tubuh menyerap oksigen dan membuang karbondioksida melalui hembusan napas. Berikut ini organ-organ pernapasan manusia.</div>
									<div className='text-base md:text-xl pt-0 p-10 font-black'>Organ pernafasan manusia terdiri dari hidung, faring, laring, trakea, bronkus, berokeolus, dan alveolus. Masing-masing organ pernafasan tersebut memiliki peran dan fungsi masing-masing. </div>
								</div>
							</div>
							<div className='flex flex-col gap-7 justify-between'>
								<button
									className='text-black text-lg md:text-xl w-full font-black bg-primary p-2 rounded-2xl cursor-pointer hover:scale-105 border border-solid border-b-8 border-black duration-500'
									onClick={(event) => {
										onClickStartBackSound()
										setStep("materi-2")
									}}
								>
									👈 Sebelumnya
								</button>
								<button
									className='text-black text-lg md:text-xl w-full font-black mb-16 sm:mb-7 bg-secondary p-2 rounded-2xl cursor-pointer hover:scale-105 border border-solid border-b-8 border-black duration-500'
									onClick={(event) => {
										onClickStartSelectSound()
										setStep("materi-4")
									}}
								>
									👉 Selanjutnya
								</button>
							</div>
						</>
					: step == "materi-4" ?
						<>
							<div className="text-5xl font-black">
								<div className='text-7xl font-black scale-105 duration-500'>🏷️</div>
								<div className="text-5xl font-black">Materi</div>
								<div className="text-xl font-black duration-500">Sistem Pernapasan</div>
							</div>
							<div className='grid-rows-1 pb-7 w-full grid gap-10 mt-7'>
								<div className='max-w-[808px] h-full bg-tertiary rounded-2xl shadow-2xl border border-solid border-b-8 border-black'>
									<div className='text-base md:text-xl p-10 font-black'>1. Hidung</div>
									<div className='text-base md:text-xl pt-0 p-10 font-black'>Hidung merupakan organ pertama yang dilalui udara dalam proses pernapasan. Awalnya, udara masuk melalui lubang hidung. Lalu, di dalam rongga hidung terdapat rambut-rambut tebal dan pendek. Rambut-rambut ini berfungsi untuk menyaring udara dan kotoran yang masuk ke lubang hidung. Setelah itu, udara melewati selaput hidung. Selaput hidung berfungsi untuk melembapkan udara yang masuk ke hidung.</div>
								</div>
							</div>
							<div className='flex flex-col gap-7 justify-between'>
								<button
									className='text-black text-lg md:text-xl w-full font-black bg-primary p-2 rounded-2xl cursor-pointer hover:scale-105 border border-solid border-b-8 border-black duration-500'
									onClick={(event) => {
										onClickStartBackSound()
										setStep("materi-3")
									}}
								>
									👈 Sebelumnya
								</button>
								<button
									className='text-black text-lg md:text-xl w-full font-black mb-16 sm:mb-7 bg-secondary p-2 rounded-2xl cursor-pointer hover:scale-105 border border-solid border-b-8 border-black duration-500'
									onClick={(event) => {
										onClickStartSelectSound()
										setStep("materi-5")
									}}
								>
									👉 Selanjutnya
								</button>
							</div>
						</>
					: step == "materi-5" ?
						<>
							<div className="text-5xl font-black">
								<div className='text-7xl font-black scale-105 duration-500'>🏷️</div>
								<div className="text-5xl font-black">Materi</div>
								<div className="text-xl font-black duration-500">Sistem Pernapasan</div>
							</div>
							<div className='grid-rows-1 pb-7 w-full grid gap-10 mt-7'>
								<div className='max-w-[808px] h-full bg-tertiary rounded-2xl shadow-2xl border border-solid border-b-8 border-black'>
									<div className='text-base md:text-xl p-10 font-black'>2. Faring</div>
									<div className='text-base md:text-xl pt-0 p-10 font-black'>Faring merupakan organ persimpangan antara saluran pernapasan dan saluran pencernaan. Lebih tepatnya, saluran pernapasan bagian depan dan saluran pernapasan bagian belakang.</div>
								</div>
							</div>
							<div className='flex flex-col gap-7 justify-between'>
								<button
									className='text-black text-lg md:text-xl w-full font-black bg-primary p-2 rounded-2xl cursor-pointer hover:scale-105 border border-solid border-b-8 border-black duration-500'
									onClick={(event) => {
										onClickStartBackSound()
										setStep("materi-4")
									}}
								>
									👈 Sebelumnya
								</button>
								<button
									className='text-black text-lg md:text-xl w-full font-black mb-16 sm:mb-7 bg-secondary p-2 rounded-2xl cursor-pointer hover:scale-105 border border-solid border-b-8 border-black duration-500'
									onClick={(event) => {
										onClickStartSelectSound()
										setStep("materi-6")
									}}
								>
									👉 Selanjutnya
								</button>
							</div>
						</>
					: step == "materi-6" ?
						<>
							<div className="text-5xl font-black">
								<div className='text-7xl font-black scale-105 duration-500'>🏷️</div>
								<div className="text-5xl font-black">Materi</div>
								<div className="text-xl font-black duration-500">Sistem Pernapasan</div>
							</div>
							<div className='grid-rows-1 pb-7 w-full grid gap-10 mt-7'>
								<div className='max-w-[808px] h-full bg-tertiary rounded-2xl shadow-2xl border border-solid border-b-8 border-black'>
									<div className='text-base md:text-xl p-10 font-black'>3. Laring</div>
									<div className='text-base md:text-xl pt-0 p-10 font-black'>Laring juga dikenal dengan istilah jakun atau tekak. Organ pernapasan ini terletak di bagian belakang faring. Laring terdiri atas Sembilan tulang rawan. Untuk bentuknya, laring memiliki bentuk kotak. Laring merupakan organ berongga yang bisa mengeluarkan suara saat udara masuk dan keluar.</div>
								</div>
							</div>
							<div className='flex flex-col gap-7 justify-between'>
								<button
									className='text-black text-lg md:text-xl w-full font-black bg-primary p-2 rounded-2xl cursor-pointer hover:scale-105 border border-solid border-b-8 border-black duration-500'
									onClick={(event) => {
										onClickStartBackSound()
										setStep("materi-5")
									}}
								>
									👈 Sebelumnya
								</button>
								<button
									className='text-black text-lg md:text-xl w-full font-black mb-16 sm:mb-7 bg-secondary p-2 rounded-2xl cursor-pointer hover:scale-105 border border-solid border-b-8 border-black duration-500'
									onClick={(event) => {
										onClickStartSelectSound()
										setStep("materi-7")
									}}
								>
									👉 Selanjutnya
								</button>
							</div>
						</>
					: step == "materi-7" ?
						<>
							<div className="text-5xl font-black">
								<div className='text-7xl font-black scale-105 duration-500'>🏷️</div>
								<div className="text-5xl font-black">Materi</div>
								<div className="text-xl font-black duration-500">Sistem Pernapasan</div>
							</div>
							<div className='grid-rows-1 pb-7 w-full grid gap-10 mt-7'>
								<div className='max-w-[808px] h-full bg-tertiary rounded-2xl shadow-2xl border border-solid border-b-8 border-black'>
									<div className='text-base md:text-xl p-10 font-black'>4. Trakea</div>
									<div className='text-base md:text-xl pt-0 p-10 font-black'>Trakea juga dikenal dengan istilah batang tenggorokan. Organ pernapasan ini memiliki sebuah jaringan yang disebut silia. Jaringan silia dalam trakea biasanya akan bergerak dan mendorong benda-benda lain. Dalam trakea, jaringan silia ini memiliki fungsi mengusir kotoran, debu-debu, dan bakteri yang masuk ke dalam trakea.</div>
								</div>
							</div>
							<div className='flex flex-col gap-7 justify-between'>
								<button
									className='text-black text-lg md:text-xl w-full font-black bg-primary p-2 rounded-2xl cursor-pointer hover:scale-105 border border-solid border-b-8 border-black duration-500'
									onClick={(event) => {
										onClickStartBackSound()
										setStep("materi-6")
									}}
								>
									👈 Sebelumnya
								</button>
								<button
									className='text-black text-lg md:text-xl w-full font-black mb-16 sm:mb-7 bg-secondary p-2 rounded-2xl cursor-pointer hover:scale-105 border border-solid border-b-8 border-black duration-500'
									onClick={(event) => {
										onClickStartSelectSound()
										setStep("materi-8")
									}}
								>
									👉 Selanjutnya
								</button>
							</div>
						</>
					: step == "materi-8" ?
						<>
							<div className="text-5xl font-black">
								<div className='text-7xl font-black scale-105 duration-500'>🏷️</div>
								<div className="text-5xl font-black">Materi</div>
								<div className="text-xl font-black duration-500">Sistem Pernapasan</div>
							</div>
							<div className='grid-rows-1 pb-7 w-full grid gap-10 mt-7'>
								<div className='max-w-[808px] h-full bg-tertiary rounded-2xl shadow-2xl border border-solid border-b-8 border-black'>
									<div className='text-base md:text-xl p-10 font-black'>5. Bronkus</div>
									<div className='text-base md:text-xl pt-0 p-10 font-black'>Dalam sistem pernapasan bronkus terbagi menjadi dua bagian, yaitu bronkus kiri dan bronkus kanan. Letak bronkus terdapat di percabangan trakea.</div>
								</div>
							</div>
							<div className='flex flex-col gap-7 justify-between'>
								<button
									className='text-black text-lg md:text-xl w-full font-black bg-primary p-2 rounded-2xl cursor-pointer hover:scale-105 border border-solid border-b-8 border-black duration-500'
									onClick={(event) => {
										onClickStartBackSound()
										setStep("materi-7")
									}}
								>
									👈 Sebelumnya
								</button>
								<button
									className='text-black text-lg md:text-xl w-full font-black mb-16 sm:mb-7 bg-secondary p-2 rounded-2xl cursor-pointer hover:scale-105 border border-solid border-b-8 border-black duration-500'
									onClick={(event) => {
										onClickStartSelectSound()
										setStep("materi-9")
									}}
								>
									👉 Selanjutnya
								</button>
							</div>
						</>
					: step == "materi-9" ?
						<>
							<div className="text-5xl font-black">
								<div className='text-7xl font-black scale-105 duration-500'>🏷️</div>
								<div className="text-5xl font-black">Materi</div>
								<div className="text-xl font-black duration-500">Sistem Pernapasan</div>
							</div>
							<div className='grid-rows-1 pb-7 w-full grid gap-10 mt-7'>
								<div className='max-w-[808px] h-full bg-tertiary rounded-2xl shadow-2xl border border-solid border-b-8 border-black'>
									<div className='text-base md:text-xl p-10 font-black'>6. Bronkiolus</div>
									<div className='text-base md:text-xl pt-0 p-10 font-black'>Bronkiolus adalah percabangan bronkus yang ada di dalam paru-paru. Bronkiolus paru-paru sebelah kanan terdapat tiga lobus dan paru-paru kiri dua lobus.</div>
								</div>
							</div>
							<div className='flex flex-col gap-7 justify-between'>
								<button
									className='text-black text-lg md:text-xl w-full font-black bg-primary p-2 rounded-2xl cursor-pointer hover:scale-105 border border-solid border-b-8 border-black duration-500'
									onClick={(event) => {
										onClickStartBackSound()
										setStep("materi-8")
									}}
								>
									👈 Sebelumnya
								</button>
								<button
									className='text-black text-lg md:text-xl w-full font-black mb-16 sm:mb-7 bg-secondary p-2 rounded-2xl cursor-pointer hover:scale-105 border border-solid border-b-8 border-black duration-500'
									onClick={(event) => {
										onClickStartSelectSound()
										setStep("materi-10")
									}}
								>
									👉 Selanjutnya
								</button>
							</div>
						</>
					: step == "materi-10" ?
						<>
							<div className="text-5xl font-black">
								<div className='text-7xl font-black scale-105 duration-500'>🏷️</div>
								<div className="text-5xl font-black">Materi</div>
								<div className="text-xl font-black duration-500">Sistem Pernapasan</div>
							</div>
							<div className='grid-rows-1 pb-7 w-full grid gap-10 mt-7'>
								<div className='max-w-[808px] h-full bg-tertiary rounded-2xl shadow-2xl border border-solid border-b-8 border-black'>
									<div className='text-base md:text-xl p-10 font-black'>7. Alvelous</div>
									<div className='text-base md:text-xl pt-0 p-10 font-black'>Organ terakhir adalah alveolus. Alveolus ini memiliki bentuk seperti anggur. Alveolus terletak dalam paru-paru manusia. Lebih, tepatnya dikelilingi oleh kapiler-kapiler darah. Bisa dikatakan alveolus berada di tempat yang penting. Karena paru-paru merupakan tempat bertukarnya oksigen atau O2 dan karbon dioksida atau CO2.</div>
								</div>
							</div>
							<div className='flex flex-col gap-7 justify-between'>
								<button
									className='text-black text-lg md:text-xl w-full font-black bg-primary p-2 rounded-2xl cursor-pointer hover:scale-105 border border-solid border-b-8 border-black duration-500'
									onClick={(event) => {
										onClickStartBackSound()
										setStep("materi-9")
									}}
								>
									👈 Sebelumnya
								</button>
								<button
									className='text-black text-lg md:text-xl w-full font-black mb-16 sm:mb-7 bg-secondary p-2 rounded-2xl cursor-pointer hover:scale-105 border border-solid border-b-8 border-black duration-500'
									onClick={(event) => {
										onClickStartSelectSound()
										setStep("materi-11")
									}}
								>
									👉 Selanjutnya
								</button>
							</div>
						</>
					: step == "materi-11" ?
						<>
							<div className="text-5xl font-black">
								<div className='text-7xl font-black scale-105 duration-500'>🏷️</div>
								<div className="text-5xl font-black">Materi</div>
								<div className="text-xl font-black duration-500">Sistem Pernapasan</div>
							</div>
							<div className='grid-rows-1 pb-7 w-full grid gap-10 mt-7'>
								<div className="bg-black h-fit lg:h-[462px] items-center justify-center rounded-3xl flex cursor-pointer border border-solid border-b-8 border-black">
									<video
										autoPlay
										controls
										width="805px"
										className="rounded-3xl"
										preload="metadata"
									>
										<source className="h-fit w-fit" src="https://objectstorage.ap-singapore-1.oraclecloud.com/n/axjwmyaxpzwo/b/bucket-20230915-2013/o/materi-pembatik.mp4" type="video/mp4" />
									</video>
								</div>
							</div>
							<div className='flex flex-col gap-7 justify-between'>
								<button
									className='text-black text-lg md:text-xl w-full font-black bg-primary p-2 rounded-2xl cursor-pointer hover:scale-105 border border-solid border-b-8 border-black duration-500'
									onClick={(event) => {
										onClickStartBackSound()
										setStep("materi-10")
									}}
								>
									👈 Sebelumnya
								</button>
								<button
									className='text-black text-lg md:text-xl w-full font-black mb-16 sm:mb-7 bg-secondary p-2 rounded-2xl cursor-pointer hover:scale-105 border border-solid border-b-8 border-black duration-500'
									onClick={(event) => {
										onClickStartPlaySound()
										setStep("menu")
									}}
								>
									🥳 Menu Utama
								</button>
							</div>
						</>
					: step == "latihan-1" ?
						<>
							<div className="text-5xl font-black">
								<div className='text-7xl font-black scale-105 duration-500'>💪</div>
								<div className="text-5xl font-black">Latihan</div>	
								<div className="text-xl font-black duration-500">Evaluasi Pemahaman</div>
							</div>
							<div className='grid-rows-1 pb-7 w-full grid gap-10 mt-7 duration-500'>
								<div className='max-w-[808px] h-full bg-tertiary rounded-2xl shadow-2xl border border-solid border-b-8 border-black'>
									<div className='text-base md:text-xl p-10 font-black'>Halo, teman - teman !</div>
									<div className='text-base md:text-xl p-10 pt-0 font-black'>Setelah kalian berjuang dalam memahami materi tadi, saat nya untuk kalian bermain games</div>
									<div className='text-base md:text-xl p-10 pt-0 font-black'>Nama games nya adalah mencari harta karun 🎉</div>
									<div className='text-base md:text-xl p-10 pt-0 font-black'>Nantinya kalian akan diberi suatu petunjuk yang mengarah ke tempat harta karun berada loh, wah keren kaan !</div>
								</div>
							</div>
							<div className='flex flex-col gap-7 justify-between'>
								<button
									className='text-black text-lg md:text-xl w-full font-black bg-primary p-2 rounded-2xl cursor-pointer hover:scale-105 border border-solid border-b-8 border-black duration-500'
									onClick={(event) => {
										onClickStartPlaySound()
										setStep("menu")
									}}
								>
									🥳 Menu Utama
								</button>
								<button
									className='text-black text-lg md:text-xl w-full font-black mb-16 sm:mb-7 bg-secondary p-2 rounded-2xl cursor-pointer hover:scale-105 border border-solid border-b-8 border-black duration-500'
									onClick={(event) => {
										onClickStartPlaySound()
										onClickStartMainSound()
										setIsMainAudioPlaying(true)
										setStep("latihan-2")
									}}
								>
									🎮 Mulai Games
								</button>
							</div>
						</>
					: step == "latihan-2" ?
						<>
							{/* <div className="text-5xl font-black">
								<div className='text-7xl font-black scale-105 duration-500'>💪</div>
								<div className="text-5xl font-black">Latihan</div>	
								<div className="text-xl font-black duration-500">Evaluasi Pemahaman</div>
							</div> */}
							<div className="animate-[float-down_0.5s_forwards] duration-500" key={"latihan"}>
								<div className='text-7xl -ml-3 bg-[url("/icons/flexed-biceps.png")] bg-contain bg-no-repeat'>ㅤ</div>
								<div className="text-5xl font-black">Latihan Sembari Bermain</div>
								<div className="text-xl font-black">Saatnya Bermain Games, Uji Pemahaman Materi Kalian Yuk !</div>
							</div>
							<div className='grid-rows-1 w-fit grid gap-10 mt-7 scale-100 duration-500'>
								<div className='max-w-[808px] h-fit bg-tertiary rounded-2xl shadow-2xl border border-solid border-b-8 border-black'>

									{/* jawaban benar */}
									{firstAnswer + secondAnswer + thirdAnswer + fourthAnswer + fifthAnswer + sixthAnswer == "trakea" &&
										<div className='absolute w-full h-full bg-secondary/50 z-10 rounded-2xl shadow-2xl backdrop-blur-sm border border-solid border-b-8 border-black'>
											<div className='grid h-full place-items-center'>
												<div className='flex flex-col items-center'>
													<div className='text-9xl animate-[float-up_1s_forwards]'>
														🎉
													</div>
													<div className='text-base md:text-2xl font-black text-green-500'>
														{firstAnswer + secondAnswer + thirdAnswer + fourthAnswer + fifthAnswer + sixthAnswer}
													</div>
													<div className='text-base md:text-2xl font-black text-gray-400'>
														Selamat Jawaban Benar
													</div>
													<div className='text-base md:text-2xl font-black text-gray-600'>
														Level Berikutnya Menantimu
													</div>
												</div>
											</div>
										</div>
									}

									{firstAnswer.length == 1 && secondAnswer.length == 1 && thirdAnswer.length == 1 && fourthAnswer.length == 1 && fifthAnswer.length == 1 && sixthAnswer.length == 1 && firstAnswer + secondAnswer + thirdAnswer + fourthAnswer + fifthAnswer + sixthAnswer != "trakea" &&
										<div className='absolute w-full h-full bg-secondary/50 z-10 rounded-2xl shadow-2xl backdrop-blur-sm border border-solid border-b-8 border-black'>
											<div className='grid h-full place-items-center'>
												<div className='flex flex-col items-center'>
													<div className='text-9xl animate-bounce'>
														😿
													</div>
													<div className='text-base md:text-2xl font-black text-red-500'>
														{firstAnswer + secondAnswer + thirdAnswer + fourthAnswer + fifthAnswer + sixthAnswer}
													</div>
													<div className='text-base md:text-2xl font-black text-gray-400'>
														Maaf Jawaban Salah
													</div>
													<div className='text-base md:text-2xl font-black text-gray-600'>
														Jangan Putus Asa, Ayo Coba Lagi
													</div>
												</div>
											</div>
										</div>
									}

									<div className='w-full'>

										<div className='w-fit'>

											<div className='flex text-4xl md:text-5xl lg:text-6xl xl:text-7xl p-10 w-full justify-between'>
												{/* <div className=' -scale-x-100 animate-pulse'>🏃</div> */}
												<div className='-scale-x-100 bg-[url("/icons/person-running.png")] bg-contain bg-no-repeat'>ㅤ</div>
												{/* <div className=' animate-bounce'>🐛</div> */}
												<div className='animate-bounce bg-[url("/icons/bug.png")] bg-contain bg-no-repeat'>ㅤ</div>
												{/* <div className=''>🦗</div> */}
												<div className='bg-[url("/icons/cricket.png")] bg-contain bg-no-repeat'>ㅤ</div>
												{/* <div className=''>🐞</div> */}
												<div className='bg-[url("/icons/lady-beetle.png")] bg-contain bg-no-repeat'>ㅤ</div>
												{/* <div className=' animate-pulse'>💎</div> */}
												<div className='animate-pulse bg-[url("/icons/gem-stone.png")] bg-contain bg-no-repeat'>ㅤ</div>
											</div>
											<div className='p-10 pt-0 pb-0 h-full'>
												<div className='text-base md:text-xl font-black'>
													Level 1 : Melawan Raja Ulat
												</div>

												<div className='mt-7 text-base md:text-xl font-black'>
													Organ pernapasan manusia yang berfungsi untuk mendorong keluar debu - debu dan bakteri yang masuk saat kita bernapas adalah ?
												</div>
											</div>

										</div>

										<div className='w-full place-content-center flex'>

											<div className='flex flex-wrap place-content-center w-fit p-10 gap-5 scale-100 duration-500 '>
												<div className='bg-tertiary w-14 h-14 flex place-content-center'>
													<input
														id='first-answer'
														autoComplete="off"
														type="text"
														value={firstAnswer.toUpperCase()}
														onChange={(event) => {
															setFirstAnswer(event.target.value.toLowerCase().slice(0, 1))
															if (event.target.value == "") {
																document.getElementById('first-answer').focus()
															} else {
																document.getElementById('second-answer').focus()
															}
														}}
														onClick={(event) => {
															document.getElementById('first-answer').select()
														}}
														onKeyDown={(event) => {
															onClickStartSelectSound()
															if (event.key === "Backspace") {
																if (firstAnswer == "") {
																	document.getElementById('first-answer').focus()
																} else {
																	setFirstAnswer("")
																}
															}
														}}
														onFocus={(event) => {
															document.getElementById('first-answer').select()
														}}
														maxLength={1}
														className={`bg-white outline-none focus:outline-primary text-black text-xl rounded-lg  w-full text-center ${firstAnswer.length == 1 && `outline-primary`}`}
														placeholder={"-"}
													/>
												</div>

												<div className='bg-tertiary w-14 h-14 flex place-content-center'>
													<input
														id='second-answer'
														autoComplete="off"
														type="text"
														value={secondAnswer.toUpperCase()}
														onChange={(event) => {
															setSecondAnswer(event.target.value.toLowerCase().slice(0, 1))
															if (event.target.value == "") {
																document.getElementById('second-answer').focus()
															} else {
																document.getElementById('third-answer').focus()
															}
														}}
														onClick={(event) => {
															document.getElementById('second-answer').select()
														}}
														onKeyDown={(event) => {
															onClickStartSelectSound()
															if (event.key === "Backspace") {
																if (secondAnswer == "") {
																	document.getElementById('first-answer').focus()
																} else {
																	setSecondAnswer("")
																}
															}
														}}
														onFocus={(event) => {
															document.getElementById('second-answer').select()
														}}
														maxLength={1}
														className={`bg-white outline-none focus:outline-primary text-black text-xl rounded-lg  w-full text-center ${secondAnswer.length == 1 && `outline-primary`}`}
														placeholder={"-"}
													/>
												</div>

												<div className='bg-tertiary w-14 h-14 flex place-content-center'>
													<input
														id='third-answer'
														autoComplete="off"
														type="text"
														value={thirdAnswer.toUpperCase()}
														onChange={(event) => {
															setThirdAnswer(event.target.value.toLowerCase().slice(0, 1))
															if (event.target.value == "") {
																document.getElementById('third-answer').focus()
															} else {
																document.getElementById('fourth-answer').focus()
															}
														}}
														onClick={(event) => {
															document.getElementById('third-answer').select()
														}}
														onKeyDown={(event) => {
															onClickStartSelectSound()
															if (event.key === "Backspace") {
																if (thirdAnswer == "") {
																	document.getElementById('second-answer').focus()
																} else {
																	setThirdAnswer("")
																}
															}
														}}
														onFocus={(event) => {
															document.getElementById('third-answer').select()
														}}
														maxLength={1}
														className={`bg-white outline-none focus:outline-primary text-black text-xl rounded-lg  w-full text-center ${thirdAnswer.length == 1 && `outline-primary`}`}
														placeholder={"-"}
													/>
												</div>

												<div className='bg-tertiary w-14 h-14 flex place-content-center'>
													<input
														id='fourth-answer'
														autoComplete="off"
														type="text"
														value={fourthAnswer.toUpperCase()}
														onChange={(event) => {
															setFourthAnswer(event.target.value.toLowerCase().slice(0, 1))
															if (event.target.value == "") {
																document.getElementById('fourth-answer').focus()
															} else {
																document.getElementById('fifth-answer').focus()
															}
														}}
														onClick={(event) => {
															document.getElementById('fourth-answer').select()
														}}
														onKeyDown={(event) => {
															onClickStartSelectSound()
															if (event.key === "Backspace") {
																if (fourthAnswer == "") {
																	document.getElementById('third-answer').focus()
																} else {
																	setFourthAnswer("")
																}
															}
														}}
														onFocus={(event) => {
															document.getElementById('fourth-answer').select()
														}}
														maxLength={1}
														className={`bg-white outline-none focus:outline-primary text-black text-xl rounded-lg  w-full text-center ${fourthAnswer.length == 1 && `outline-primary`}`}
														placeholder={"-"}
													/>
												</div>

												<div className='bg-tertiary w-14 h-14 flex place-content-center'>
													<input
														id='fifth-answer'
														autoComplete="off"
														type="text"
														value={fifthAnswer.toUpperCase()}
														onChange={(event) => {
															setFifthAnswer(event.target.value.toLowerCase().slice(0, 1))
															if (event.target.value == "") {
																document.getElementById('fifth-answer').focus()
															} else {
																document.getElementById('sixth-answer').focus()
															}
														}}
														onClick={(event) => {
															document.getElementById('fifth-answer').select()
														}}
														onKeyDown={(event) => {
															onClickStartSelectSound()
															if (event.key === "Backspace") {
																if (fifthAnswer == "") {
																	document.getElementById('fourth-answer').focus()
																} else {
																	setFifthAnswer("")
																}
															}
														}}
														onFocus={(event) => {
															document.getElementById('fifth-answer').select()
														}}
														maxLength={1}
														className={`bg-white outline-none focus:outline-primary text-black text-xl rounded-lg  w-full text-center ${fifthAnswer.length == 1 && `outline-primary`}`}
														placeholder={"-"}
													/>
												</div>
												
												<div className='bg-tertiary w-14 h-14 flex place-content-center'>
													<input
														id='sixth-answer'
														autoComplete="off"
														type="text"
														value={sixthAnswer.toUpperCase()}
														onChange={(event) => {
															setSixthAnswer(event.target.value.toLowerCase().slice(0, 1))
															if (event.target.value == "") {
																document.getElementById('sixth-answer').focus()
															} else {
																document.getElementById('sixth-answer').blur()
															}
														}}
														onClick={(event) => {
															document.getElementById('sixth-answer').select()
														}}
														onKeyDown={(event) => {
															onClickStartSelectSound()
															if (event.key === "Backspace") {
																if (sixthAnswer == "") {
																	document.getElementById('fifth-answer').focus()
																} else {
																	setSixthAnswer("")
																}
															}
														}}
														onFocus={(event) => {
															document.getElementById('sixth-answer').select()
														}}
														maxLength={1}
														className={`bg-white outline-none focus:outline-primary text-black text-xl rounded-lg  w-full text-center ${sixthAnswer.length == 1 && `outline-primary`}`}
														placeholder={"-"}
													/>
												</div>

											</div>

										</div>

									</div>
									<div className='text-base md:text-xl p-10 pt-0 font-black'>Isilah jawaban yang sesuai, kalahkan musuh dan kalian akan menemukan berlian nya !</div>
								</div>
							</div>
							<div className='flex flex-col pt-7 justify-between'>
								<button
									className={`animate-[float-up_0.5s] duration-500 flex justify-center  text-black text-lg md:text-xl w-full font-black bg-primary p-2 rounded-2xl cursor-pointer hover:scale-105 border border-solid border-b-8 border-black ${firstAnswer + secondAnswer + thirdAnswer + fourthAnswer + fifthAnswer + sixthAnswer == "trakea" || firstAnswer.length == 1 && secondAnswer.length == 1 && thirdAnswer.length == 1 && fourthAnswer.length == 1 && fifthAnswer.length == 1 && sixthAnswer.length == 1 && firstAnswer + secondAnswer + thirdAnswer + fourthAnswer + fifthAnswer + sixthAnswer != "trakea" ? `mb-7` : `mb-16 sm:mb-7`}`}
									onClick={(event) => {
										onClickStartPlaySound()
										setFirstAnswer("")
										setSecondAnswer("")
										setThirdAnswer("")
										setFourthAnswer("")
										setFifthAnswer("")
										setSixthAnswer("")
										setSeventhAnswer("")
										setEighthAnswer("")
										setStep("menu")
									}}
									key={"first-level-1-button"}
								>
								<div className='text-2xl leading-none bg-[url("/icons/partying-face.png")] bg-contain bg-no-repeat mr-2'>ㅤ</div>
									Menu Utama
								</button>
								{firstAnswer + secondAnswer + thirdAnswer + fourthAnswer + fifthAnswer + sixthAnswer == "trakea" &&
									<button
										className='text-black text-lg md:text-xl w-full font-black mb-16 sm:mb-7 bg-secondary p-2 rounded-2xl cursor-pointer hover:scale-105 border border-solid border-b-8 border-black duration-500'
										onClick={(event) => {
											onClickStartPlaySound()
											setFirstAnswer("")
											setSecondAnswer("")
											setThirdAnswer("")
											setFourthAnswer("")
											setFifthAnswer("")
											setSixthAnswer("")
											setSeventhAnswer("")
											setEighthAnswer("")
											setStep("latihan-3")
										}}
									>
										🎮 Lanjut Level 2
									</button>
								}
								{firstAnswer.length == 1 && secondAnswer.length == 1 && thirdAnswer.length == 1 && fourthAnswer.length == 1 && fifthAnswer.length == 1 && sixthAnswer.length == 1 && firstAnswer + secondAnswer + thirdAnswer + fourthAnswer + fifthAnswer + sixthAnswer != "trakea" &&
									<button
										className='text-black text-lg md:text-xl w-full font-black mb-16 sm:mb-7 bg-secondary p-2 rounded-2xl cursor-pointer hover:scale-105 border border-solid border-b-8 border-black duration-500'
										onClick={(event) => {
											onClickStartPlaySound()
											setFirstAnswer("")
											setSecondAnswer("")
											setThirdAnswer("")
											setFourthAnswer("")
											setFifthAnswer("")
											setSixthAnswer("")
											setSeventhAnswer("")
											setEighthAnswer("")
										}}
									>
										🎮 Coba Lagi
									</button>
								}
							</div>
						</>
					: step == "latihan-3" ?
						<>
							<div className="text-5xl font-black">
								<div className='text-7xl font-black scale-105 duration-500'>💪</div>
								<div className="text-5xl font-black">Latihan</div>	
								<div className="text-xl font-black duration-500">Evaluasi Pemahaman</div>
							</div>
							<div className='grid-rows-1 w-fit grid gap-10 mt-7 scale-100 duration-500'>
								<div className='max-w-[808px] h-fit bg-tertiary rounded-2xl shadow-2xl border border-solid border-b-8 border-black'>

									{/* jawaban benar */}
									{firstAnswer + secondAnswer + thirdAnswer + fourthAnswer + fifthAnswer + sixthAnswer + seventhAnswer + eighthAnswer == "alveolus" &&
										<div className='absolute w-full h-full bg-secondary/50 z-10 rounded-2xl shadow-2xl backdrop-blur-sm border border-solid border-b-8 border-black'>
											<div className='grid h-full place-items-center'>
												<div className='flex flex-col items-center'>
													<div className='text-9xl animate-[float-up_1s_forwards]'>
														🎉
													</div>
													<div className='text-base md:text-2xl font-black text-green-500'>
														{firstAnswer + secondAnswer + thirdAnswer + fourthAnswer + fifthAnswer + sixthAnswer + seventhAnswer + eighthAnswer}
													</div>
													<div className='text-base md:text-2xl font-black text-gray-400'>
														Selamat Jawaban Benar
													</div>
													<div className='text-base md:text-2xl font-black text-gray-600'>
														Level Berikutnya Menantimu
													</div>
												</div>
											</div>
										</div>
									}

									{firstAnswer.length == 1 && secondAnswer.length == 1 && thirdAnswer.length == 1 && fourthAnswer.length == 1 && fifthAnswer.length == 1 && sixthAnswer.length == 1 && seventhAnswer.length == 1 && eighthAnswer.length == 1 && firstAnswer + secondAnswer + thirdAnswer + fourthAnswer + fifthAnswer + sixthAnswer + seventhAnswer + eighthAnswer != "alveolus" &&
										<div className='absolute w-full h-full bg-secondary/50 z-10 rounded-2xl shadow-2xl backdrop-blur-sm border border-solid border-b-8 border-black'>
											<div className='grid h-full place-items-center'>
												<div className='flex flex-col items-center'>
													<div className='text-9xl animate-bounce'>
														😿
													</div>
													<div className='text-base md:text-2xl font-black text-red-500'>
														{firstAnswer + secondAnswer + thirdAnswer + fourthAnswer + fifthAnswer + sixthAnswer + seventhAnswer + eighthAnswer}
													</div>
													<div className='text-base md:text-2xl font-black text-gray-400'>
														Maaf Jawaban Salah
													</div>
													<div className='text-base md:text-2xl font-black text-gray-600'>
														Jangan Putus Asa, Ayo Coba Lagi
													</div>
												</div>
											</div>
										</div>
									}

									<div className='w-full'>

										<div className='w-fit'>

											<div className='flex text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl p-10 w-full justify-between'>
												<div className=' -scale-x-100 animate-pulse'>🏃</div>
												<div className='flex place-items-center place-content-center'><div className='absolute text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl text-red-600 font-black'>X</div>🐛</div>
												<div className='animate-bounce'>🦗</div>
												<div className=''>🐞</div>
												<div className=' animate-pulse'>💎</div>
											</div>
											<div className='p-10 pt-0 pb-0 h-full'>
												<div className='text-base md:text-xl font-black'>
													Level 2 : Melawan Raja Belalang
												</div>

												<div className='mt-7 text-base md:text-xl font-black'>
													Organ pernapasan manusia yang mempunyai bentuk unik, mirip kantong kecil yang berkerumun seperti buah anggur disebut ?
												</div>
											</div>

										</div>

										<div className='w-full place-content-center flex'>

											<div className='flex flex-wrap place-content-center w-fit p-10 gap-5 duration-500 '>
												<div className='bg-tertiary w-14 h-14 flex place-content-center'>
													<input
														id='first-answer'
														autoComplete="off"
														type="text"
														value={firstAnswer.toUpperCase()}
														onChange={(event) => {
															setFirstAnswer(event.target.value.toLowerCase().slice(0, 1))
															if (event.target.value == "") {
																document.getElementById('first-answer').focus()
															} else {
																document.getElementById('second-answer').focus()
															}
														}}
														onClick={(event) => {
															document.getElementById('first-answer').select()
														}}
														onKeyDown={(event) => {
															onClickStartSelectSound()
															if (event.key === "Backspace") {
																if (firstAnswer == "") {
																	document.getElementById('first-answer').focus()
																} else {
																	setFirstAnswer("")
																}
															}
														}}
														onFocus={(event) => {
															document.getElementById('first-answer').select()
														}}
														maxLength={1}
														className={`bg-white outline-none focus:outline-primary text-black text-xl rounded-lg  w-full text-center ${firstAnswer.length == 1 && `outline-primary`}`}
														placeholder={"-"}
													/>
												</div>

												<div className='bg-tertiary w-14 h-14 flex place-content-center'>
													<input
														id='second-answer'
														autoComplete="off"
														type="text"
														value={secondAnswer.toUpperCase()}
														onChange={(event) => {
															setSecondAnswer(event.target.value.toLowerCase().slice(0, 1))
															if (event.target.value == "") {
																document.getElementById('second-answer').focus()
															} else {
																document.getElementById('third-answer').focus()
															}
														}}
														onClick={(event) => {
															document.getElementById('second-answer').select()
														}}
														onKeyDown={(event) => {
															onClickStartSelectSound()
															if (event.key === "Backspace") {
																if (secondAnswer == "") {
																	document.getElementById('first-answer').focus()
																} else {
																	setSecondAnswer("")
																}
															}
														}}
														onFocus={(event) => {
															document.getElementById('second-answer').select()
														}}
														maxLength={1}
														className={`bg-white outline-none focus:outline-primary text-black text-xl rounded-lg  w-full text-center ${secondAnswer.length == 1 && `outline-primary`}`}
														placeholder={"-"}
													/>
												</div>

												<div className='bg-tertiary w-14 h-14 flex place-content-center'>
													<input
														id='third-answer'
														autoComplete="off"
														type="text"
														value={thirdAnswer.toUpperCase()}
														onChange={(event) => {
															setThirdAnswer(event.target.value.toLowerCase().slice(0, 1))
															if (event.target.value == "") {
																document.getElementById('third-answer').focus()
															} else {
																document.getElementById('fourth-answer').focus()
															}
														}}
														onClick={(event) => {
															document.getElementById('third-answer').select()
														}}
														onKeyDown={(event) => {
															onClickStartSelectSound()
															if (event.key === "Backspace") {
																if (thirdAnswer == "") {
																	document.getElementById('second-answer').focus()
																} else {
																	setThirdAnswer("")
																}
															}
														}}
														onFocus={(event) => {
															document.getElementById('third-answer').select()
														}}
														maxLength={1}
														className={`bg-white outline-none focus:outline-primary text-black text-xl rounded-lg  w-full text-center ${thirdAnswer.length == 1 && `outline-primary`}`}
														placeholder={"-"}
													/>
												</div>

												<div className='bg-tertiary w-14 h-14 flex place-content-center'>
													<input
														id='fourth-answer'
														autoComplete="off"
														type="text"
														value={fourthAnswer.toUpperCase()}
														onChange={(event) => {
															setFourthAnswer(event.target.value.toLowerCase().slice(0, 1))
															if (event.target.value == "") {
																document.getElementById('fourth-answer').focus()
															} else {
																document.getElementById('fifth-answer').focus()
															}
														}}
														onClick={(event) => {
															document.getElementById('fourth-answer').select()
														}}
														onKeyDown={(event) => {
															onClickStartSelectSound()
															if (event.key === "Backspace") {
																if (fourthAnswer == "") {
																	document.getElementById('third-answer').focus()
																} else {
																	setFourthAnswer("")
																}
															}
														}}
														onFocus={(event) => {
															document.getElementById('fourth-answer').select()
														}}
														maxLength={1}
														className={`bg-white outline-none focus:outline-primary text-black text-xl rounded-lg  w-full text-center ${fourthAnswer.length == 1 && `outline-primary`}`}
														placeholder={"-"}
													/>
												</div>

												<div className='bg-tertiary w-14 h-14 flex place-content-center'>
													<input
														id='fifth-answer'
														autoComplete="off"
														type="text"
														value={fifthAnswer.toUpperCase()}
														onChange={(event) => {
															setFifthAnswer(event.target.value.toLowerCase().slice(0, 1))
															if (event.target.value == "") {
																document.getElementById('fifth-answer').focus()
															} else {
																document.getElementById('sixth-answer').focus()
															}
														}}
														onClick={(event) => {
															document.getElementById('fifth-answer').select()
														}}
														onKeyDown={(event) => {
															onClickStartSelectSound()
															if (event.key === "Backspace") {
																if (fifthAnswer == "") {
																	document.getElementById('fourth-answer').focus()
																} else {
																	setFifthAnswer("")
																}
															}
														}}
														onFocus={(event) => {
															document.getElementById('fifth-answer').select()
														}}
														maxLength={1}
														className={`bg-white outline-none focus:outline-primary text-black text-xl rounded-lg  w-full text-center ${fifthAnswer.length == 1 && `outline-primary`}`}
														placeholder={"-"}
													/>
												</div>

												<div className='bg-tertiary w-14 h-14 flex place-content-center'>
													<input
														id='sixth-answer'
														autoComplete="off"
														type="text"
														value={sixthAnswer.toUpperCase()}
														onChange={(event) => {
															setSixthAnswer(event.target.value.toLowerCase().slice(0, 1))
															if (event.target.value == "") {
																document.getElementById('sixth-answer').focus()
															} else {
																document.getElementById('seventh-answer').focus()
															}
														}}
														onClick={(event) => {
															document.getElementById('sixth-answer').select()
														}}
														onKeyDown={(event) => {
															onClickStartSelectSound()
															if (event.key === "Backspace") {
																if (sixthAnswer == "") {
																	document.getElementById('fifth-answer').focus()
																} else {
																	setSixthAnswer("")
																}
															}
														}}
														onFocus={(event) => {
															document.getElementById('sixth-answer').select()
														}}
														maxLength={1}
														className={`bg-white outline-none focus:outline-primary text-black text-xl rounded-lg  w-full text-center ${sixthAnswer.length == 1 && `outline-primary`}`}
														placeholder={"-"}
													/>
												</div>

												<div className='bg-tertiary w-14 h-14 flex place-content-center'>
													<input
														id='seventh-answer'
														autoComplete="off"
														type="text"
														value={seventhAnswer.toUpperCase()}
														onChange={(event) => {
															setSeventhAnswer(event.target.value.toLowerCase().slice(0, 1))
															if (event.target.value == "") {
																document.getElementById('seventh-answer').focus()
															} else {
																document.getElementById('eighth-answer').focus()
															}
														}}
														onClick={(event) => {
															document.getElementById('seventh-answer').select()
														}}
														onKeyDown={(event) => {
															onClickStartSelectSound()
															if (event.key === "Backspace") {
																if (seventhAnswer == "") {
																	document.getElementById('sixth-answer').focus()
																} else {
																	setSeventhAnswer("")
																}
															}
														}}
														onFocus={(event) => {
															document.getElementById('seventh-answer').select()
														}}
														maxLength={1}
														className={`bg-white outline-none focus:outline-primary text-black text-xl rounded-lg  w-full text-center ${seventhAnswer.length == 1 && `outline-primary`}`}
														placeholder={"-"}
													/>
												</div>
												
												<div className='bg-tertiary w-14 h-14 flex place-content-center'>
													<input
														id='eighth-answer'
														autoComplete="off"
														type="text"
														value={eighthAnswer.toUpperCase()}
														onChange={(event) => {
															setEighthAnswer(event.target.value.toLowerCase().slice(0, 1))
															if (event.target.value == "") {
																document.getElementById('eighth-answer').focus()
															} else {
																document.getElementById('eighth-answer').blur()
															}
														}}
														onClick={(event) => {
															document.getElementById('eighth-answer').select()
														}}
														onKeyDown={(event) => {
															onClickStartSelectSound()
															if (event.key === "Backspace") {
																if (eighthAnswer == "") {
																	document.getElementById('seventh-answer').focus()
																} else {
																	setEighthAnswer("")
																}
															}
														}}
														onFocus={(event) => {
															document.getElementById('eighth-answer').select()
														}}
														maxLength={1}
														className={`bg-white outline-none focus:outline-primary text-black text-xl rounded-lg  w-full text-center ${eighthAnswer.length == 1 && `outline-primary`}`}
														placeholder={"-"}
													/>
												</div>

											</div>

										</div>

									</div>
									<div className='text-base md:text-xl p-10 pt-0 font-black'>Isilah jawaban yang sesuai, kalahkan musuh dan kalian akan menemukan berlian nya !</div>
								</div>
							</div>
							<div className='flex flex-col pt-7 justify-between'>
								<button
									className={`text-black text-lg md:text-xl w-full font-black bg-primary p-2 rounded-2xl cursor-pointer hover:scale-105 border border-solid border-b-8 border-black duration-500 ${firstAnswer + secondAnswer + thirdAnswer + fourthAnswer + fifthAnswer + sixthAnswer + seventhAnswer + eighthAnswer == "alveolus" || firstAnswer.length == 1 && secondAnswer.length == 1 && thirdAnswer.length == 1 && fourthAnswer.length == 1 && fifthAnswer.length == 1 && sixthAnswer.length == 1 && seventhAnswer.length == 1 && eighthAnswer.length == 1 && firstAnswer + secondAnswer + thirdAnswer + fourthAnswer + fifthAnswer + sixthAnswer + seventhAnswer + eighthAnswer != "alveolus" ? `mb-7` : `mb-16 sm:mb-7`}`}
									onClick={(event) => {
										onClickStartPlaySound()
										setFirstAnswer("")
										setSecondAnswer("")
										setThirdAnswer("")
										setFourthAnswer("")
										setFifthAnswer("")
										setSixthAnswer("")
										setSeventhAnswer("")
										setEighthAnswer("")
										setStep("menu")
									}}
								>
									🥳 Menu Utama
								</button>
								{firstAnswer + secondAnswer + thirdAnswer + fourthAnswer + fifthAnswer + sixthAnswer + seventhAnswer + eighthAnswer == "alveolus" &&
									<button
										className='text-black text-lg md:text-xl w-full font-black mb-16 sm:mb-7 bg-secondary p-2 rounded-2xl cursor-pointer hover:scale-105 border border-solid border-b-8 border-black duration-500'
										onClick={(event) => {
											onClickStartPlaySound()
											setFirstAnswer("")
											setSecondAnswer("")
											setThirdAnswer("")
											setFourthAnswer("")
											setFifthAnswer("")
											setSixthAnswer("")
											setSeventhAnswer("")
											setEighthAnswer("")
											setStep("latihan-4")
										}}
									>
										🎮 Lawan Bos
									</button>
								}
								{firstAnswer.length == 1 && secondAnswer.length == 1 && thirdAnswer.length == 1 && fourthAnswer.length == 1 && fifthAnswer.length == 1 && sixthAnswer.length == 1 && seventhAnswer.length == 1 && eighthAnswer.length == 1 && firstAnswer + secondAnswer + thirdAnswer + fourthAnswer + fifthAnswer + sixthAnswer + seventhAnswer + eighthAnswer != "alveolus" &&
									<button
										className='text-black text-lg md:text-xl w-full font-black mb-16 sm:mb-7 bg-secondary p-2 rounded-2xl cursor-pointer hover:scale-105 border border-solid border-b-8 border-black duration-500'
										onClick={(event) => {
											onClickStartPlaySound()
											setFirstAnswer("")
											setSecondAnswer("")
											setThirdAnswer("")
											setFourthAnswer("")
											setFifthAnswer("")
											setSixthAnswer("")
											setSeventhAnswer("")
											setEighthAnswer("")
										}}
									>
										🎮 Coba Lagi
									</button>
								}
							</div>
						</>
					: step == "latihan-4" ?
						<>
							<div className="text-5xl font-black">
								<div className='text-7xl font-black scale-105 duration-500'>💪</div>
								<div className="text-5xl font-black">Latihan</div>	
								<div className="text-xl font-black duration-500">Evaluasi Pemahaman</div>
							</div>
							<div className='grid-rows-1 w-fit grid gap-10 mt-7 scale-100 duration-500'>
								<div className='max-w-[808px] h-fit bg-tertiary rounded-2xl shadow-2xl border border-solid border-b-8 border-black'>

									{/* jawaban benar */}
									{firstAnswer + secondAnswer + thirdAnswer + fourthAnswer + fifthAnswer + sixthAnswer + seventhAnswer == "fegbadc" &&
										<div className='absolute w-full h-full bg-secondary/50 z-10 rounded-2xl shadow-2xl backdrop-blur-sm border border-solid border-b-8 border-black'>
											<div className='grid h-full place-items-center'>
												<div className='flex flex-col items-center'>
													<div className='text-9xl animate-[float-up_1s_forwards]'>
														🎉
													</div>
													<div className='text-base md:text-2xl font-black text-green-500'>
														{firstAnswer + secondAnswer + thirdAnswer + fourthAnswer + fifthAnswer + sixthAnswer + seventhAnswer}
													</div>
													<div className='text-base md:text-2xl font-black text-gray-400'>
														Selamat Jawaban Benar
													</div>
													<div className='text-base md:text-2xl font-black text-gray-600'>
														Level Berikutnya Menantimu
													</div>
												</div>
											</div>
										</div>
									}

									{firstAnswer.length == 1 && secondAnswer.length == 1 && thirdAnswer.length == 1 && fourthAnswer.length == 1 && fifthAnswer.length == 1 && sixthAnswer.length == 1 && seventhAnswer.length == 1 && firstAnswer + secondAnswer + thirdAnswer + fourthAnswer + fifthAnswer + sixthAnswer + seventhAnswer != "fegbadc" &&
										<div className='absolute w-full h-full bg-secondary/50 z-10 rounded-2xl shadow-2xl backdrop-blur-sm border border-solid border-b-8 border-black'>
											<div className='grid h-full place-items-center'>
												<div className='flex flex-col items-center'>
													<div className='text-9xl animate-bounce'>
														😿
													</div>
													<div className='text-base md:text-2xl font-black text-red-500'>
														{firstAnswer + secondAnswer + thirdAnswer + fourthAnswer + fifthAnswer + sixthAnswer + seventhAnswer}
													</div>
													<div className='text-base md:text-2xl font-black text-gray-400'>
														Maaf Jawaban Salah
													</div>
													<div className='text-base md:text-2xl font-black text-gray-600'>
														Jangan Putus Asa, Ayo Coba Lagi
													</div>
												</div>
											</div>
										</div>
									}

									<div className='w-full'>

										<div className='w-fit'>

											<div className='flex text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl p-10 w-full justify-between'>
												<div className=' -scale-x-100 animate-pulse'>🏃</div>
												<div className='flex place-items-center place-content-center'><div className='absolute text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl text-red-600 font-black'>X</div>🐛</div>
												<div className='flex place-items-center place-content-center'><div className='absolute text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl text-red-600 font-black'>X</div>🦗</div>
												<div className='animate-bounce'>🐞</div>
												<div className=' animate-pulse'>💎</div>
											</div>
											<div className='p-10 pt-0 pb-0 h-full'>
												<div className='text-base md:text-xl font-black'>
													Level 3 : Melawan Raja Kumbang
												</div>

												<div className='mt-7 text-base md:text-xl font-black'>
													Urutkan sistem pernapasan pada manusia dengan baik dan benar sesuai dengan apa yang telah kalian pelajari !
												</div>
												<div className='mt-7 text-base md:text-xl font-black'>
													[a] bronkus, [b] trakea, [c] alveolus, [d] bronkiolus
												</div>
												<div className='mt-0 text-base md:text-xl font-black'>
													[e] faring, [f] hidung, [g] laring
												</div>
											</div>

										</div>

										<div className='w-full place-content-center flex'>

											<div className='flex flex-wrap place-content-center w-fit p-10 gap-5 duration-500 '>
												<div className='bg-tertiary w-14 h-14 flex place-content-center'>
													<input
														id='first-answer'
														autoComplete="off"
														type="text"
														value={firstAnswer.toUpperCase()}
														onChange={(event) => {
															setFirstAnswer(event.target.value.toLowerCase().slice(0, 1))
															if (event.target.value == "") {
																document.getElementById('first-answer').focus()
															} else {
																document.getElementById('second-answer').focus()
															}
														}}
														onClick={(event) => {
															document.getElementById('first-answer').select()
														}}
														onKeyDown={(event) => {
															onClickStartSelectSound()
															if (event.key === "Backspace") {
																if (firstAnswer == "") {
																	document.getElementById('first-answer').focus()
																} else {
																	setFirstAnswer("")
																}
															}
														}}
														onFocus={(event) => {
															document.getElementById('first-answer').select()
														}}
														maxLength={1}
														className={`bg-white outline-none focus:outline-primary text-black text-xl rounded-lg  w-full text-center ${firstAnswer.length == 1 && `outline-primary`}`}
														placeholder={"-"}
													/>
												</div>

												<div className='bg-tertiary w-14 h-14 flex place-content-center'>
													<input
														id='second-answer'
														autoComplete="off"
														type="text"
														value={secondAnswer.toUpperCase()}
														onChange={(event) => {
															setSecondAnswer(event.target.value.toLowerCase().slice(0, 1))
															if (event.target.value == "") {
																document.getElementById('second-answer').focus()
															} else {
																document.getElementById('third-answer').focus()
															}
														}}
														onClick={(event) => {
															document.getElementById('second-answer').select()
														}}
														onKeyDown={(event) => {
															onClickStartSelectSound()
															if (event.key === "Backspace") {
																if (secondAnswer == "") {
																	document.getElementById('first-answer').focus()
																} else {
																	setSecondAnswer("")
																}
															}
														}}
														onFocus={(event) => {
															document.getElementById('second-answer').select()
														}}
														maxLength={1}
														className={`bg-white outline-none focus:outline-primary text-black text-xl rounded-lg  w-full text-center ${secondAnswer.length == 1 && `outline-primary`}`}
														placeholder={"-"}
													/>
												</div>

												<div className='bg-tertiary w-14 h-14 flex place-content-center'>
													<input
														id='third-answer'
														autoComplete="off"
														type="text"
														value={thirdAnswer.toUpperCase()}
														onChange={(event) => {
															setThirdAnswer(event.target.value.toLowerCase().slice(0, 1))
															if (event.target.value == "") {
																document.getElementById('third-answer').focus()
															} else {
																document.getElementById('fourth-answer').focus()
															}
														}}
														onClick={(event) => {
															document.getElementById('third-answer').select()
														}}
														onKeyDown={(event) => {
															onClickStartSelectSound()
															if (event.key === "Backspace") {
																if (thirdAnswer == "") {
																	document.getElementById('second-answer').focus()
																} else {
																	setThirdAnswer("")
																}
															}
														}}
														onFocus={(event) => {
															document.getElementById('third-answer').select()
														}}
														maxLength={1}
														className={`bg-white outline-none focus:outline-primary text-black text-xl rounded-lg  w-full text-center ${thirdAnswer.length == 1 && `outline-primary`}`}
														placeholder={"-"}
													/>
												</div>

												<div className='bg-tertiary w-14 h-14 flex place-content-center'>
													<input
														id='fourth-answer'
														autoComplete="off"
														type="text"
														value={fourthAnswer.toUpperCase()}
														onChange={(event) => {
															setFourthAnswer(event.target.value.toLowerCase().slice(0, 1))
															if (event.target.value == "") {
																document.getElementById('fourth-answer').focus()
															} else {
																document.getElementById('fifth-answer').focus()
															}
														}}
														onClick={(event) => {
															document.getElementById('fourth-answer').select()
														}}
														onKeyDown={(event) => {
															onClickStartSelectSound()
															if (event.key === "Backspace") {
																if (fourthAnswer == "") {
																	document.getElementById('third-answer').focus()
																} else {
																	setFourthAnswer("")
																}
															}
														}}
														onFocus={(event) => {
															document.getElementById('fourth-answer').select()
														}}
														maxLength={1}
														className={`bg-white outline-none focus:outline-primary text-black text-xl rounded-lg  w-full text-center ${fourthAnswer.length == 1 && `outline-primary`}`}
														placeholder={"-"}
													/>
												</div>

												<div className='bg-tertiary w-14 h-14 flex place-content-center'>
													<input
														id='fifth-answer'
														autoComplete="off"
														type="text"
														value={fifthAnswer.toUpperCase()}
														onChange={(event) => {
															setFifthAnswer(event.target.value.toLowerCase().slice(0, 1))
															if (event.target.value == "") {
																document.getElementById('fifth-answer').focus()
															} else {
																document.getElementById('sixth-answer').focus()
															}
														}}
														onClick={(event) => {
															document.getElementById('fifth-answer').select()
														}}
														onKeyDown={(event) => {
															onClickStartSelectSound()
															if (event.key === "Backspace") {
																if (fifthAnswer == "") {
																	document.getElementById('fourth-answer').focus()
																} else {
																	setFifthAnswer("")
																}
															}
														}}
														onFocus={(event) => {
															document.getElementById('fifth-answer').select()
														}}
														maxLength={1}
														className={`bg-white outline-none focus:outline-primary text-black text-xl rounded-lg  w-full text-center ${fifthAnswer.length == 1 && `outline-primary`}`}
														placeholder={"-"}
													/>
												</div>

												<div className='bg-tertiary w-14 h-14 flex place-content-center'>
													<input
														id='sixth-answer'
														autoComplete="off"
														type="text"
														value={sixthAnswer.toUpperCase()}
														onChange={(event) => {
															setSixthAnswer(event.target.value.toLowerCase().slice(0, 1))
															if (event.target.value == "") {
																document.getElementById('sixth-answer').focus()
															} else {
																document.getElementById('seventh-answer').focus()
															}
														}}
														onClick={(event) => {
															document.getElementById('sixth-answer').select()
														}}
														onKeyDown={(event) => {
															onClickStartSelectSound()
															if (event.key === "Backspace") {
																if (sixthAnswer == "") {
																	document.getElementById('fifth-answer').focus()
																} else {
																	setSixthAnswer("")
																}
															}
														}}
														onFocus={(event) => {
															document.getElementById('sixth-answer').select()
														}}
														maxLength={1}
														className={`bg-white outline-none focus:outline-primary text-black text-xl rounded-lg  w-full text-center ${sixthAnswer.length == 1 && `outline-primary`}`}
														placeholder={"-"}
													/>
												</div>

												<div className='bg-tertiary w-14 h-14 flex place-content-center'>
													<input
														id='seventh-answer'
														autoComplete="off"
														type="text"
														value={seventhAnswer.toUpperCase()}
														onChange={(event) => {
															setSeventhAnswer(event.target.value.toLowerCase().slice(0, 1))
															if (event.target.value == "") {
																document.getElementById('seventh-answer').focus()
															} else {
																document.getElementById('seventh-answer').focus()
															}
														}}
														onClick={(event) => {
															document.getElementById('seventh-answer').select()
														}}
														onKeyDown={(event) => {
															onClickStartSelectSound()
															if (event.key === "Backspace") {
																if (seventhAnswer == "") {
																	document.getElementById('sixth-answer').focus()
																} else {
																	setSeventhAnswer("")
																}
															}
														}}
														onFocus={(event) => {
															document.getElementById('seventh-answer').select()
														}}
														maxLength={1}
														className={`bg-white outline-none focus:outline-primary text-black text-xl rounded-lg  w-full text-center ${seventhAnswer.length == 1 && `outline-primary`}`}
														placeholder={"-"}
													/>
												</div>

											</div>

										</div>

									</div>
									<div className='text-base md:text-xl p-10 pt-0 font-black'>Selangkah lagi, berlian menanti mu !</div>
								</div>
							</div>
							<div className='flex flex-col pt-7 justify-between'>
								<button
									className={`text-black text-lg md:text-xl w-full font-black bg-primary p-2 rounded-2xl cursor-pointer hover:scale-105 border border-solid border-b-8 border-black duration-500 ${firstAnswer + secondAnswer + thirdAnswer + fourthAnswer + fifthAnswer + sixthAnswer + seventhAnswer == "fegbadc" || firstAnswer.length == 1 && secondAnswer.length == 1 && thirdAnswer.length == 1 && fourthAnswer.length == 1 && fifthAnswer.length == 1 && sixthAnswer.length == 1 && seventhAnswer.length == 1 && firstAnswer + secondAnswer + thirdAnswer + fourthAnswer + fifthAnswer + sixthAnswer + seventhAnswer != "fegbadc" ? `mb-7` : `mb-16 sm:mb-7`}`}
									onClick={(event) => {
										onClickStartPlaySound()
										setFirstAnswer("")
										setSecondAnswer("")
										setThirdAnswer("")
										setFourthAnswer("")
										setFifthAnswer("")
										setSixthAnswer("")
										setSeventhAnswer("")
										setEighthAnswer("")
										setStep("menu")
									}}
								>
									🥳 Menu Utama
								</button>
								{firstAnswer + secondAnswer + thirdAnswer + fourthAnswer + fifthAnswer + sixthAnswer + seventhAnswer == "fegbadc" &&
									<button
										className='text-black text-lg md:text-xl w-full font-black mb-16 sm:mb-7 bg-secondary p-2 rounded-2xl cursor-pointer hover:scale-105 border border-solid border-b-8 border-black duration-500'
										onClick={(event) => {
											marioCompleteAudio.play()
											setFirstAnswer("")
											setSecondAnswer("")
											setThirdAnswer("")
											setFourthAnswer("")
											setFifthAnswer("")
											setSixthAnswer("")
											setSeventhAnswer("")
											setEighthAnswer("")
											setStep("latihan-5")
											setIsBerlianOpened(true)
										}}
									>
										💎 Ambil Berlian
									</button>
								}
								{firstAnswer.length == 1 && secondAnswer.length == 1 && thirdAnswer.length == 1 && fourthAnswer.length == 1 && fifthAnswer.length == 1 && sixthAnswer.length == 1 && seventhAnswer.length == 1 && firstAnswer + secondAnswer + thirdAnswer + fourthAnswer + fifthAnswer + sixthAnswer + seventhAnswer != "fegbadc" &&
									<button
										className='text-black text-lg md:text-xl w-full font-black mb-16 sm:mb-7 bg-secondary p-2 rounded-2xl cursor-pointer hover:scale-105 border border-solid border-b-8 border-black duration-500'
										onClick={(event) => {
											onClickStartPlaySound()
											setFirstAnswer("")
											setSecondAnswer("")
											setThirdAnswer("")
											setFourthAnswer("")
											setFifthAnswer("")
											setSixthAnswer("")
											setSeventhAnswer("")
											setEighthAnswer("")
										}}
									>
										🎮 Coba Lagi
									</button>
								}
							</div>
						</>
					: step == "latihan-5" ?
						<>
							<div className="text-5xl font-black">
								<div className='text-7xl font-black scale-105 duration-500'>💪</div>
								<div className="text-5xl font-black">Latihan</div>	
								<div className="text-xl font-black duration-500">Evaluasi Pemahaman</div>
							</div>
							<div className='grid-rows-1 pb-7 w-full grid gap-10 mt-7 duration-500'>
								<div className='max-w-[808px] h-full bg-tertiary rounded-2xl shadow-2xl border border-solid border-b-8 border-black'>

									<div className='flex text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl p-10 w-full justify-between'>
										<div className='flex place-items-center place-content-center'><div className='absolute text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl text-red-600 font-black'>X</div>🐛</div>
										<div className='flex place-items-center place-content-center'><div className='absolute text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl text-red-600 font-black'>X</div>🦗</div>
										<div className='flex place-items-center place-content-center'><div className='absolute text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl text-red-600 font-black'>X</div>🐞</div>
										<div className=' -scale-x-100 animate-pulse'>🏃</div>
										<div 
											className='flex place-items-center place-content-center cursor-pointer animate-bounce' 
											onClick={(event) => {
												marioCompleteAudio.play()
												setIsBerlianOpened(true)
											}}
										>
											<div className='absolute text-xs text-rose-600 font-black'>BUKA</div>
											💎
										</div>
									</div>
									<div className='text-base md:text-xl p-10 pt-0 font-black'>Selamat anda telah menemukan berlian yang hilang, hebat !</div>
									<div className='text-base md:text-xl p-10 pt-0 font-black'>Terima kasih telah bermain sambil belajar di Melati, mohon maaf jika terdapat kekurangan dan kesalahan.</div>
									<div className='text-base md:text-xl p-10 pt-0 font-black'>Keberhasilan bukanlah milik orang yang pintar. Keberhasilan adalah kepunyaan mereka yang senantiasa berusaha, B.J. Habibie</div>
								</div>
							</div>
							<div className='flex justify-between'>
								<button
									className='text-black text-lg md:text-xl w-full font-black mb-16 sm:mb-7 bg-primary p-2 rounded-2xl cursor-pointer hover:scale-105 border border-solid border-b-8 border-black duration-500'
									onClick={(event) => {
										onClickStartPlaySound()
										setStep("menu")
									}}
								>
									🥳 Menu Utama
								</button>
							</div>
						</>
					: step == "tentang" ?
						<>
							<div className="text-5xl font-black">
								<div className='text-7xl font-black scale-105 duration-500'>👨‍🏫</div>
								<div className="text-5xl font-black">Tentang</div>
								<div className="text-xl font-black duration-500">Informasi Kreator</div>
							</div>
							<div className='grid-rows-1 pb-7 w-full grid gap-10 mt-7 duration-500'>
								<div className='max-w-[808px] h-full bg-tertiary rounded-2xl shadow-2xl border border-solid border-b-8 border-black'>
									<div className=' p-10 pb-0 '>
										<div className='text-base md:text-xl font-black bg-[url("/images/profile.webp")] bg-contain bg-no-repeat h-32'></div>
									</div>
									<div className='text-base md:text-xl p-10 font-black'>Perkenalkan nama saya ibrahim, seorang guru UPT SDN 337 Gresik (SDN Kotakusuma). Saya berdomisili di Kec. Sangkapura, Kab. Gresik Prov. Jawa Timur (Pulau Bawean).</div>
									<div className='text-base md:text-xl pt-0 p-10 font-black'>Menguatkan Ekosistem Digital Pendidikan dengan Berkarya dan Berbagi untuk Wujudkan Merdeka Belajar.  Kreator Melati dan peserta #PembaTIK2023 level 3, Ibrahim</div>
								</div>
							</div>
							<div className='flex justify-between'>
								<button
									className='text-black text-lg md:text-xl w-full font-black mb-16 sm:mb-7 bg-primary p-2 rounded-2xl cursor-pointer hover:scale-105 border border-solid border-b-8 border-black duration-500'
									onClick={(event) => {
										onClickStartPlaySound()
										setStep("menu")
									}}
								>
									🥳 Menu Utama
								</button>
							</div>
						</>
						: step == "referensi" ?
							<>
								<div className="text-5xl font-black">
								<div className='text-7xl font-black scale-105 duration-500'>📒</div>
								<div className="text-5xl font-black">Referensi</div>
								<div className="text-xl font-black duration-500">Rujukan Pembuatan</div>
							</div>
							<div className='grid-rows-1 pb-7 w-full grid gap-10 mt-7 duration-500'>
								<div className='max-w-[808px] h-full bg-tertiary rounded-2xl shadow-2xl border border-solid border-b-8 border-black'>
									<div className='text-base md:text-xl p-10 font-black'>Referensi yang digunakan dalam pembuatan multimedia pembelajaran interaktif ini : </div>
									<div className='text-base md:text-xl p-10 pb-0 pt-0 font-black'>
										# gambar animasi : {" "}
										<Link href={"https://www.pngwing.com/en/search?q=adventure+time/"} className='underline' target='_blank' rel="noopener noreferrer">
											pngwing.com
										</Link>
									</div>
									<div className='text-base md:text-xl p-10 pb-0 pt-0 font-black'>
										# pattern background {" "}
										<Link href={"https://figma.com/community/"} className='underline' target='_blank' rel="noopener noreferrer">
											figmaCommunity
										</Link>
									</div>
									<div className='text-base md:text-xl p-10 pb-0 pt-0 font-black'>
										# aplikasi untuk mengedit : {" "}
										<Link href={"https://figma.com/"} className='underline' target='_blank' rel="noopener noreferrer">
											figma.com
										</Link>
									</div>
									<div className='text-base md:text-xl p-10 pb-0 pt-0 font-black'>
										# sumber materi : {" "}
										<Link href={"#"} className='underline'>
											bukuLKSsekolah
										</Link>
									</div>
									<div className='text-base md:text-xl p-10 pb-0 pt-0 font-black'>
										# background musik : {" "}
										<Link href={"https://www.youtube.com/results?search_query=background+lagu+anak/"} className='underline' target='_blank' rel="noopener noreferrer">
											youtube.com
										</Link>
									</div>
									<div className='text-base md:text-xl p-10 pb-0 pt-0 font-black'>
										# efek musik utama : {" "}
										<Link href={"https://www.education.com/"} className='underline' target='_blank' rel="noopener noreferrer">
											 education.com 
										</Link>
									</div>

									<div className='text-base md:text-xl pb-0 p-10 pt-0 font-black'>
										# efek musik tambahan : {" "}
										<Link href={"https://mario.nintendo.com/"} className='underline' target='_blank' rel="noopener noreferrer">
											 gameSuperMario
										</Link>
									</div>

									<div className='text-base md:text-xl pb-0 p-10 pt-0 font-black'>
										# kutipan doa : {" "}
										<Link href={"#"} className='underline' target='_blank' rel="noopener noreferrer">
											 hadistNabiMuhammadS.A.W.
										</Link>
									</div>

									<div className='text-base md:text-xl p-10 pt-0 font-black'>
										# kutipan motivasi : {" "}
										<Link href={"#"} className='underline' target='_blank' rel="noopener noreferrer">
											 B.J.HabibiPresidenR.I.
										</Link>
									</div>
								</div>
							</div>
							<div className='flex justify-between'>
								<button
									className='text-black text-lg md:text-xl w-full font-black mb-16 sm:mb-7 bg-primary p-2 rounded-2xl cursor-pointer hover:scale-105 border border-solid border-b-8 border-black duration-500'
									onClick={(event) => {
										onClickStartPlaySound()
										setStep("menu")
									}}
								>
									🥳 Menu Utama
								</button>
							</div>
							</>
						:

						<></>

					}
					
				</div>

			</div>

			{/* footer */}
			<div className='fixed right-5 bottom-5 space-y-5'>

				{/* scroll management */}
				{!isFullscreeen &&
					<div
						className="bg-primary flex place-content-center rounded-2xl cursor-pointer hover:scale-105 duration-500 border border-solid border-b-8 border-black"
						onClick={(event) => {
							onClickStartSelectSound()
							isAtTop ? scrollToBottom() : scrollToTop()
						}}
					>
						{isAtTop
							?
							<div className='text-2xl m-2 leading-none bg-[url("/icons/down-arrow.png")] bg-contain bg-no-repeat duration-500'>ㅤ</div>
							:
							<div className='text-2xl m-2 leading-none bg-[url("/icons/up-arrow.png")] bg-contain bg-no-repeat duration-500'>ㅤ</div>
						}
					</div>
				}
				
				{/* sound management */}
				<div
					className="bg-primary flex place-content-center rounded-2xl cursor-pointer hover:scale-105 duration-500 border border-solid border-b-8 border-black"
					onClick={(event) => {
						onClickStartSelectSound()
						isMainAudioPlaying ? onClickStopMainSound() : onClickStartMainSound()
					}}
				>
					{isMainAudioPlaying
						?
						<div className='text-2xl m-2 leading-none bg-[url("/icons/speaker-high-volume.png")] bg-contain bg-no-repeat duration-500'>ㅤ</div>
						:
						<div className='text-2xl m-2 leading-none bg-[url("/icons/muted-speaker.png")] bg-contain bg-no-repeat duration-500'>ㅤ</div>
					}
				</div>

				{/* full screen handler */}
				<div
					className="bg-primary flex place-content-center rounded-2xl cursor-pointer hover:scale-105 duration-500 border border-solid border-b-8 border-black"
					onClick={(event) => {
						onClickStartSelectSound()
						isFullscreeen ? fullScreenHandler.exit() : fullScreenHandler.enter()
						setIsFullscreeen(!isFullscreeen)
					}}
				>
					<div className='text-2xl m-2 leading-none bg-[url("/icons/laptop.png")] bg-contain bg-no-repeat duration-500'>ㅤ</div>
				</div>
				
			</div>

			{/* suprize modevaka */}
			<div  className='w-full'>

				<div className={`opacity-0 fixed left-0 text-7xl ${isBerlianOpened && `animate-[float-over_7s]`}`}>💎</div>
				<div className={`opacity-0 fixed left-20 text-5xl ${isBerlianOpened && `animate-[float-over_14s]`}`}>💎</div>
				<div className={`opacity-0 fixed left-10 text-7xl ${isBerlianOpened && `animate-[float-over_1s]`}`}>💎</div>
				<div className={`opacity-0 fixed left-20 text-5xl ${isBerlianOpened && `animate-[float-over_4s]`}`}>💎</div>
				<div className={`opacity-0 fixed left-52 text-5xl ${isBerlianOpened && `animate-[float-over_5s]`}`}>💎</div>

				<div className={`opacity-0 fixed left-96 text-7xl ${isBerlianOpened && `animate-[float-over_14s]`}`}>💎</div>
				<div className={`opacity-0 fixed left-[400px] text-5xl ${isBerlianOpened && `animate-[float-over_1s]`}`}>💎</div>
				<div className={`opacity-0 fixed left-[600px] text-7xl ${isBerlianOpened && `animate-[float-over_8s]`}`}>💎</div>
				<div className={`opacity-0 fixed left-80 text-5xl ${isBerlianOpened && `animate-[float-over_3s]`}`}>💎</div>
				<div className={`opacity-0 fixed left-[700] text-5xl ${isBerlianOpened && `animate-[float-over_2s]`}`}>💎</div>

				<div className={`opacity-0 fixed right-0 text-7xl ${isBerlianOpened && `animate-[float-over_5s]`}`}>💎</div>
				<div className={`opacity-0 fixed right-20 text-5xl ${isBerlianOpened && `animate-[float-over_14s]`}`}>💎</div>
				<div className={`opacity-0 fixed right-10 text-7xl ${isBerlianOpened && `animate-[float-over_1s]`}`}>💎</div>
				<div className={`opacity-0 fixed right-20 text-5xl ${isBerlianOpened && `animate-[float-over_4s]`}`}>💎</div>
				<div className={`opacity-0 fixed right-60 text-5xl ${isBerlianOpened && `animate-[float-over_2s]`}`}>💎</div>

				<div className={`opacity-0 fixed right-[900px] text-3xl ${isBerlianOpened && `animate-[float-over_5s]`}`}>💎</div>
				<div className={`opacity-0 fixed right-56 text-5xl ${isBerlianOpened && `animate-[float-over_8s]`}`}>💎</div>
				<div className={`opacity-0 fixed right-[600px] text-7xl ${isBerlianOpened && `animate-[float-over_7s]`}`}>💎</div>
				<div className={`opacity-0 fixed right-[800px] text-5xl ${isBerlianOpened && `animate-[float-over_14s]`}`}>💎</div>
				<div className={`opacity-0 fixed right-[450px] text-5xl ${isBerlianOpened && `animate-[float-over_12s]`}`}>💎</div>

			</div>

		</FullScreen>

	)
}
