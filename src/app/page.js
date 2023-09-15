"use client"

import Image from 'next/image'
import Link from 'next/link';
import { useEffect, useRef, useState } from 'react'
import { FullScreen, useFullScreenHandle } from "react-full-screen";
import Tilt from 'react-parallax-tilt';

export default function Home() {

	const fullScreenHandler = useFullScreenHandle();
	const videoRef = useRef();
	
	const [step, setStep] = useState("welcome");
	const [mainAudio, setMainAudio] = useState(null);
	const [selectAudio, setSelectAudio] = useState(null);
	const [backAudio, setBackAudio] = useState(null);
	const [startAudio, setStartAudio] = useState(null);
	const [menuAudio, setMenuAudio] = useState(null);
	const [isVideoPlaying, setIsVideoPlaying] = useState(false)
	const [isMainAudioPlaying, setIsMainAudioPlaying] = useState(false)

	useEffect(() => {

		setMainAudio(new Audio("/backsound.mp3"))
		setSelectAudio(new Audio("/select.mp3"))
		setBackAudio(new Audio("/back.mp3"))
		setStartAudio(new Audio("/start.mp3"))
		setMenuAudio(new Audio("/menu.mp3"))


	}, [setMainAudio, setSelectAudio, setBackAudio, setStartAudio, setMenuAudio])

	function handleVideoPlay() {
		videoRef.current.play();
		setIsVideoPlaying(true);
	};

	function handleVideoPause() {
		videoRef.current.pause();
		setIsVideoPlaying(false)
	};

	function onClickStartMainSound() {
		setIsMainAudioPlaying(true)
		mainAudio.loop = true
		mainAudio.play()
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


	return (
		<>
			<FullScreen handle={fullScreenHandler}>

				{/* content screen */}
				<div className="flex justify-center h-screen p-10 sm:p-24 overflow-auto">
					<div className="flex flex-col self-start">

						{step == "welcome" ?
							<>
								<div className="text-5xl font-black">Selamat datang di Melati</div>
								<div className="text-xl font-black">Beranda Multimedia Pembelajaran Interaktif</div>
								<div className="bg-black h-44 w-fit sm:h-[456px] mt-10 justify-center rounded-3xl flex cursor-pointer" data-aos="fade-in"
									onClick={(event) => {
										isVideoPlaying ? handleVideoPause() : handleVideoPlay()
									}}
								>

									{isVideoPlaying ?
										<div className="text-white/60 fixed top-14 sm:top-52 m-auto">
											<i className='text-7xl font-black bx bx-pause-circle' ></i>
										</div>
										:
										<div className="text-white fixed top-14 sm:top-52 m-auto">
											<i className='text-7xl font-black bx bx-play-circle' ></i>
										</div>
									}

									<video
										onMouseEnter={(event) => {
											videoRef.muted = false;
										}}
										width="808px"
										height="456px"
										src="/intro.mp4"
										className="rounded-3xl"
										ref={videoRef}
										onEnded={(event) => {
											setIsVideoPlaying(false);
										}}
									>
									</video>
								</div>
								<button
									className='text-black text-2xl font-black bg-primary p-2 rounded-2xl cursor-pointer mt-10 hover:scale-105 border border-solid border-b-8 border-black'
									onClick={(event) => {
										onClickStartPlaySound()
										setStep("menu")
									}}
								>
									Mulai Petualangan Belajar
								</button>
								<button
									className='text-black text-2xl font-black bg-[#FFE4F2] p-2 rounded-2xl cursor-pointer mt-5 hover:scale-105 border border-solid border-b-8 border-black'
									onClick={(event) => {
										onClickStartPlaySound()
										setStep("guide-1")
									}}
								>
									Baca Panduan Penggunaan
								</button>
							</>
						: step == "guide-1" ?
							<>
								<div className="text-5xl font-black">
									<div className='flex items-center'>
										<div>
											<div className='text-5xl font-black'>Petunjuk Cara Penggunaan</div>
											<div className='text-xl font-black'>Panduan MELATI : Multimedia Pembelajaran Interaktif</div>
										</div>
									</div>
								</div>
								<div className='grid-rows-1 pb-20 md:pb-0 w-full grid gap-10 mt-20'>

									<div className='max-w-[808px] h-full bg-[#FFE4F2] rounded-2xl shadow-2xl border border-solid border-b-8 border-black'>
										<div className='text-2xl p-10 font-black'>Sebelum memulai petualangan mu dalam belajar, marilah kita membaca doa terlebih dahulu.</div>
										<div className='p-10 pt-0 text-2xl font-black text-right'>رَضِيْتُ بِاللهِ رَبًّا وَبِالإِسْلَامِ دِيْنًا وَبِمُحَمَّدٍ نَبِيًّا وَرَسُوْلًا رَبِّ زِدْنِيْ عِلْمًا وَارْزُقْنِيْ فَهْمًا</div>
										<div className='p-10 pt-0 text-2xl font-black'>Yang artinya : Aku ridho Allah SWT sebagai Tuhanku, dan Islam sebagai agamaku, dan Muhammad SAW sebagai Nabi dan Rasulku. Ya Allah tambahkanlah kepadaku ilmu dan berikanlah aku pemahaman yang baik.</div>
										<div className='p-10 pt-0 text-2xl font-black'>Amiin, Semoga ilmu yang kita peroleh, dapat bermanfaat.</div>
									</div>

									<div className='flex justify-between'>
										<div className='w-fit h-full p-5 bg-primary rounded-2xl shadow-2xl hover:scale-105 cursor-pointer border border-solid border-b-8 border-black' onClick={(event) => {
											onClickStartBackSound()
											setStep("welcome")
										}}>
											<div className='flex'>
												<i className='bx bx-left-arrow-alt text-2xl font-black mr-5'></i>
												<div className='text-2xl font-black'>Beranda</div>
											</div>
										</div>

										<div className='w-fit h-full p-5 bg-primary rounded-2xl shadow-2xl hover:scale-105 cursor-pointer border border-solid border-b-8 border-black' onClick={(event) => {
											onClickStartSelectSound()
											setStep("guide-2")
										}}>
											<div className='flex'>
												<div className='text-2xl font-black mr-5'>Selanjutnya</div>
												<i className='bx bx-right-arrow-alt text-2xl font-black'></i>
											</div>
										</div>
									</div>
								</div>
							</>
						: step == "guide-2" ?
							<>
								<div className="text-5xl font-black">
									<div className='flex items-center'>
										<div>
											<div className='text-5xl font-black'>Petunjuk Cara Penggunaan</div>
											<div className='text-xl font-black'>Panduan MELATI : Multimedia Pembelajaran Interaktif</div>
										</div>
									</div>
								</div>
								<div className='grid-rows-1 pb-20 md:pb-0 w-full grid gap-10 mt-20'>

									<div className='max-w-[808px] h-full bg-[#FFE4F2] rounded-2xl shadow-2xl border border-solid border-b-8 border-black'>
										<div className='text-2xl p-10 font-black'>Pada website MELATI ini, kita akan belajar tentang sistem pernapasan pada manusia. Mulai dari organ - organ pernapasan apa saja yang terdapat pada tubuh manusia, fungsi - fungsi nya, proses pernapasan nya, serta kita juga akan belajar cara untuk merawatnya. </div>
										<div className='text-2xl p-10 pt-0 font-black'>Tidak hanya itu loh, disamping belajar, kita juga akan bermain games yang juga bertujuan untuk melatih pemahaman kita.</div>
										<div className='text-2xl p-10 pt-0 font-black'>Nah, udah enggak sabar kan ? Yuk disimak.</div>
									</div>

									<div className='flex justify-between'>

										<div className='w-fit h-full p-5 bg-primary rounded-2xl shadow-2xl hover:scale-105 cursor-pointer border border-solid border-b-8 border-black' onClick={(event) => {
											onClickStartSelectSound()
											setStep("guide-1")
										}}>
											<div className='flex'>
												<i className='bx bx-left-arrow-alt text-2xl font-black mr-5'></i>
												<div className='text-2xl font-black'>Sebelumnya</div>
											</div>
										</div>

										<div className='w-fit h-full p-5 bg-primary rounded-2xl shadow-2xl hover:scale-105 cursor-pointer border border-solid border-b-8 border-black' onClick={(event) => {
											onClickStartSelectSound()
											setStep("guide-3")
										}}>
											<div className='flex'>
												<div className='text-2xl font-black mr-5'>Selanjutnya</div>
												<i className='bx bx-right-arrow-alt text-2xl font-black'></i>
											</div>
										</div>

									</div>

								</div>
							</>
						: step == "guide-3" ?
							<>
								<div className="text-5xl font-black">
									<div className='flex items-center'>
										<div>
											<div className='text-5xl font-black'>Petunjuk Cara Penggunaan</div>
											<div className='text-xl font-black'>Panduan MELATI : Multimedia Pembelajaran Interaktif</div>
										</div>
									</div>
								</div>
								<div className='grid-rows-1 pb-20 md:pb-0 w-full grid gap-10 mt-20'>

									<div className='max-w-[808px] h-full bg-[#FFE4F2] rounded-2xl shadow-2xl border border-solid border-b-8 border-black'>
										<div className='text-2xl p-10 font-black'>Materi yang akan dipelajari nantinya akan meliputi penjelasan mengenai topik yang dibahas ya teman - teman.</div>
										<div className='text-2xl p-10 pt-0 font-black'>Kalian hanya perlu menekan tombol yang disediakan, setelah itu kalian membaca dan memahami materi yang disajikan, termasuk topik/judul, sasaran dan tujuan pembelajaran, pendahuluan materi, uraian materi serta latihan.</div>
										<div className='text-2xl p-10 pt-0 font-black'>Mudah sekali bukan ? Setelah ini adalah halaman terakhir panduan, semangat !</div>
									</div>

									<div className='flex justify-between'>

										<div className='w-fit h-full p-5 bg-primary rounded-2xl shadow-2xl hover:scale-105 cursor-pointer border border-solid border-b-8 border-black' onClick={(event) => {
											onClickStartSelectSound()
											setStep("guide-2")
										}}>
											<div className='flex'>
												<i className='bx bx-left-arrow-alt text-2xl font-black mr-5'></i>
												<div className='text-2xl font-black'>Sebelumnya</div>
											</div>
										</div>

										<div className='w-fit h-full p-5 bg-primary rounded-2xl shadow-2xl hover:scale-105 cursor-pointer border border-solid border-b-8 border-black' onClick={(event) => {
											onClickStartSelectSound()
											setStep("guide-4")
										}}>
											<div className='flex'>
												<div className='text-2xl font-black mr-5'>Selanjutnya</div>
												<i className='bx bx-right-arrow-alt text-2xl font-black'></i>
											</div>
										</div>

									</div>

								</div>
							</>
						: step == "guide-4" ?
							<>
								<div className="text-5xl font-black">
									<div className='flex items-center'>
										<div>
											<div className='text-5xl font-black'>Petunjuk Cara Penggunaan</div>
											<div className='text-xl font-black'>Panduan MELATI : Multimedia Pembelajaran Interaktif</div>
										</div>
									</div>
								</div>
								<div className='grid-rows-1 pb-20 md:pb-0 w-full grid gap-10 mt-20'>

									<div className='max-w-[808px] h-full bg-[#FFE4F2] rounded-2xl shadow-2xl border border-solid border-b-8 border-black'>
										<div className='text-2xl p-10 font-black'>Jangan lupakan pesan yang telah dibaca ya teman - teman. Pantun dulu yuk !</div>
										<div className='text-2xl p-10 pb-0 pt-0 font-black'>Angin bertiup, kapalpun berlayar</div>
										<div className='text-2xl p-10 pb-0 pt-0 font-black'>Jauh berlabuh dari dermaga</div>
										<div className='text-2xl p-10 pb-0 pt-0 font-black'>Guru mengajar siap belajar</div>
										<div className='text-2xl p-10 pt-0 font-black'>Gapai impian menuju cita</div>
										<div className='text-2xl p-10 pt-0 font-black'>Menguatkan Ekosistem Digital Pendidikan dengan Berkarya dan Berbagi untuk Wujudkan Merdeka Belajar. Kreator MELATI dan peserta #PembaTIK2023, Ibrahim</div>
									</div>

									<div className='flex justify-between'>

										<div className='w-fit h-full p-5 bg-primary rounded-2xl shadow-2xl hover:scale-105 cursor-pointer border border-solid border-b-8 border-black' onClick={(event) => {
											onClickStartSelectSound()
											setStep("guide-3")
										}}>
											<div className='flex'>
												<i className='bx bx-left-arrow-alt text-2xl font-black mr-5'></i>
												<div className='text-2xl font-black'>Sebelumnya</div>
											</div>
										</div>

										<div className='w-fit h-full p-5 bg-primary rounded-2xl shadow-2xl hover:scale-105 cursor-pointer border border-solid border-b-8 border-black' onClick={(event) => {
											onClickStartSelectSound()
											setStep("welcome")
										}}>
											<div className='flex'>
												<div className='text-2xl font-black mr-5'>Beranda</div>
												<i className='bx bx-right-arrow-alt text-2xl font-black'></i>
											</div>
										</div>

									</div>

								</div>
							</>
						: step == "menu" ?
							<>
								<div className="text-5xl font-black">
									<div className='flex items-center'>
										<i
											className='text-7xl font-black bx bx-arrow-back mr-5 cursor-pointer hover:scale-105 duration-200'
											onClick={(event) => {
												onClickStartBackSound()
												setStep("welcome")
											}}
										></i>
										<div>
											<div className='text-5xl font-black break-all'>Menu Utama Melati</div>
											<div className='text-xl font-black'>Multimedia Pembelajaran Interaktif</div>
										</div>
									</div>
								</div>
								<div className='grid-rows-1 md:grid-cols-3 pb-20 md:pb-0 w-full grid gap-5 mt-20'>

									<Tilt className='cursor-pointer'>
										<div className='border border-solid border-b-8 border-black md:w-48 lg:w-64 h-64 bg-[#FFE4F2] hover:bg-[url("/hover-menu.png")] hover:bg-no-repeat hover:bg-right-bottom hover:bg-contain rounded-2xl shadow-2xl' onClick={(event) => {
											onClickStartMenuSound()
											setStep("konsep-1")
										}}>
											<div className='text-2xl p-10 pb-0 font-black'>01</div>
											<div className='p-10 pt-0 pb-0 text-lg font-black'>Konsep</div>
											<div className='p-10 pt-0 text-base font-black'>Materi Pembelajaran</div>
										</div>
									</Tilt>

									<Tilt className='cursor-pointer'>
										<div className='border border-solid border-b-8 border-black md:w-48 lg:w-64 h-64 bg-[#FFE3CF] hover:bg-[url("/hover-menu.png")] hover:bg-no-repeat hover:bg-right-bottom hover:bg-contain rounded-2xl shadow-2xl' onClick={(event) => {
											onClickStartMenuSound()
											setStep("pendahuluan-1")
										}}>
											<div className='text-2xl p-10 pb-0 font-black'>02</div>
											<div className='p-10 pt-0 pb-0 text-lg font-black'>Pendahuluan</div>
											<div className='p-10 pt-0 text-base font-black'>Pengenalan Materi</div>
										</div>
									</Tilt>

									<Tilt className='cursor-pointer'>
										<div className='border border-solid border-b-8 border-black md:w-48 lg:w-64 h-64 bg-[#D8F1FF] hover:bg-[url("/hover-menu.png")] hover:bg-no-repeat hover:bg-right-bottom hover:bg-contain rounded-2xl shadow-2xl' onClick={(event) => {
											onClickStartMenuSound()
											setStep("materi-1")
										}}>
											<div className='text-2xl p-10 pb-0 font-black'>03</div>
											<div className='p-10 pt-0 pb-0 text-lg font-black'>Materi</div>
											<div className='p-10 pt-0 text-base font-black'>Sistem Pernapasan</div>
										</div>
									</Tilt>

									<Tilt className='cursor-pointer'>
										<div className='border border-solid border-b-8 border-black md:w-48 lg:w-64 h-64 bg-[#E0F9E7] hover:bg-[url("/hover-menu.png")] hover:bg-no-repeat hover:bg-right-bottom hover:bg-contain rounded-2xl shadow-2xl' onClick={(event) => {
											onClickStartMenuSound()
											setStep("latihan")
										}}>
											<div className='text-2xl p-10 pb-0 font-black'>04</div>
											<div className='p-10 pt-0 pb-0 text-lg font-black'>Latihan</div>
											<div className='p-10 pt-0 text-base font-black'>Evaluasi Pemahaman</div>
										</div>
									</Tilt>

									<Tilt className='cursor-pointer'>
										<div className='border border-solid border-b-8 border-black md:w-48 lg:w-64 h-64 bg-[#EFE0FF] hover:bg-[url("/hover-menu.png")] hover:bg-no-repeat hover:bg-right-bottom hover:bg-contain rounded-2xl shadow-2xl' onClick={(event) => {
											onClickStartMenuSound()
											setStep("tentang")
										}}>
											<div className='text-2xl p-10 pb-0 font-black'>05</div>
											<div className='p-10 pt-0 pb-0 text-lg font-black'>Tentang</div>
											<div className='p-10 pt-0 text-base font-black'>Informasi Kreator</div>
										</div>
									</Tilt>

									<Tilt className='cursor-pointer'>
										<div className='border border-solid border-b-8 border-black md:w-48 lg:w-64 h-64 bg-[#FFF4CC] hover:bg-[url("/hover-menu.png")] hover:bg-no-repeat hover:bg-right-bottom hover:bg-contain rounded-2xl shadow-2xl' onClick={(event) => {
											onClickStartMenuSound()
											setStep("referensi")
										}}>
											<div className='text-2xl p-10 pb-0 font-black'>06</div>
											<div className='p-10 pt-0 pb-0 text-lg font-black'>Referensi</div>
											<div className='p-10 pt-0 text-base font-black'>Rujukan Pembuatan</div>
										</div>
									</Tilt>

								</div>
							</>
						: step == "konsep-1" ?
							<>
								<div className="text-5xl font-black">
									<div className='flex items-center'>

										<i
											className='text-7xl font-black bx bx-arrow-back mr-5 cursor-pointer hover:scale-105 duration-200'
											onClick={(event) => {
												onClickStartBackSound()
												setStep("menu")
											}}
										></i>
										<div>
											<div className='text-5xl font-black'>01. Konsep</div>
											<div className='text-xl font-black'>Materi pembelajaran</div>
										</div>
									</div>
								</div>
								<div className='grid-rows-1 pb-20 md:pb-0 w-full grid gap-10 mt-20'>

									<div className='max-w-[808px] h-full bg-[#FFE4F2] rounded-2xl shadow-2xl border border-solid border-b-8 border-black'>
										<div className='text-2xl p-10 font-black'>Elemen : Pemahaman IPAS.</div>
										<div className='text-2xl p-10 pt-0 font-black'>Capaian Pemelajaran ( CP ) : Peserta didik melakukan simulasi dengan menggunakan gambar/bagan/alat/media sederhana tentang sistem organ tubuh manusia (sistem pernafasan/ pencernaan/ peredaran darah) yang dikaitkan dengan cara menjaga kesehatan organ tubuhnya dengan benar.</div>
									</div>

									<div className='flex justify-between'>
										<div className='w-fit h-full p-5 bg-primary rounded-2xl shadow-2xl hover:scale-105 cursor-pointer border border-solid border-b-8 border-black' onClick={(event) => {
											onClickStartBackSound()
											setStep("menu")
										}}>
											<div className='flex'>
												<i className='bx bx-left-arrow-alt text-2xl font-black mr-5'></i>
												<div className='text-2xl font-black'>Menu Utama</div>
											</div>
										</div>

										<div className='w-fit h-full p-5 bg-primary rounded-2xl shadow-2xl hover:scale-105 cursor-pointer border border-solid border-b-8 border-black' onClick={(event) => {
											onClickStartSelectSound()
											setStep("konsep-2")
										}}>
											<div className='flex'>
												<div className='text-2xl font-black mr-5'>Selanjutnya</div>
												<i className='bx bx-right-arrow-alt text-2xl font-black'></i>
											</div>
										</div>
									</div>

								</div>
							</>
						:  step == "konsep-2" ?
							<>
								<div className="text-5xl font-black">
									<div className='flex items-center'>

										<i
											className='text-7xl font-black bx bx-arrow-back mr-5 cursor-pointer hover:scale-105 duration-200'
											onClick={(event) => {
												onClickStartBackSound()
												setStep("menu")
											}}
										></i>
										<div>
											<div className='text-5xl font-black'>01. Konsep</div>
											<div className='text-xl font-black'>Materi pembelajaran</div>
										</div>
									</div>
								</div>
								<div className='grid-rows-1 pb-20 md:pb-0 w-full grid gap-10 mt-20'>

									<div className='max-w-[808px] h-full bg-[#FFE4F2] rounded-2xl shadow-2xl border border-solid border-b-8 border-black'>
										<div className='text-2xl p-10 pb-0 font-black'>Tujuan Pembelajaran ( TP ) : </div>
										<div className='text-2xl p-10 pb-0 pt-0 font-black'>a. Peserta didik dapat mengnyebutkan organ-organ pernafasan pada manusia dengan benar.</div>
										<div className='text-2xl p-10 pb-0 pt-0 font-black'>b. Peserta didik dapat menjelaskan urutan system pernafasan pada manusia dengan benar.</div>
										<div className='text-2xl p-10 pb-0 pt-0 font-black'>c. Peserta didik dapat menyebutkan cara menjaga kesehatan organ pernafasan pada manusia dengan benar.</div>
										<div className='text-2xl p-10 font-black'>Sasaran : Media pembelajaran MPI ini dibuat untuk proses pembelajaran pada jenjang SD fase C kelas V kurikulum Merdeka. </div>
									</div>

									<div className='flex justify-between'>
										<div className='w-fit h-full p-5 bg-primary rounded-2xl shadow-2xl hover:scale-105 cursor-pointer border border-solid border-b-8 border-black' onClick={(event) => {
											onClickStartBackSound()
											setStep("konsep-1")
										}}>
											<div className='flex'>
												<i className='bx bx-left-arrow-alt text-2xl font-black mr-5'></i>
												<div className='text-2xl font-black'>Sebelumnya</div>
											</div>
										</div>

										<div className='w-fit h-full p-5 bg-primary rounded-2xl shadow-2xl hover:scale-105 cursor-pointer border border-solid border-b-8 border-black' onClick={(event) => {
											onClickStartSelectSound()
											setStep("menu")
										}}>
											<div className='flex'>
												<div className='text-2xl font-black mr-5'>Menu Utama</div>
												<i className='bx bx-right-arrow-alt text-2xl font-black'></i>
											</div>
										</div>
									</div>

								</div>
							</>
						: step == "pendahuluan-1" ?
							<>
								<div className="text-5xl font-black">
									<div className='flex items-center'>

										<i
											className='text-7xl font-black bx bx-arrow-back mr-5 cursor-pointer hover:scale-105 duration-200'
											onClick={(event) => {
												onClickStartBackSound()
												setStep("menu")
											}}
										></i>
										<div>
											<div className='text-5xl font-black'>02. Pendahuluan</div>
											<div className='text-xl font-black'>Pengenalan materi</div>
										</div>
									</div>
								</div>
								<div className='grid-rows-1 pb-20 md:pb-0 w-full grid gap-10 mt-20'>

									<div className='max-w-[808px] h-full bg-[#FFE4F2] rounded-2xl shadow-2xl border border-solid border-b-8 border-black'>
										
										<div className='text-2xl p-10 pb-0 font-black'>Pendahuluan Materi Sistem Pernapasan</div>
										<div className=' p-10 '>
											<div className='text-2xl font-black bg-[url("/respiration.png")] bg-contain bg-no-repeat h-32'></div>
										</div>
										<div className='text-2xl p-10 pt-0 font-black'>Gambar diatas merupakan ilustrasi dari organ pernapasan yang disebut paru - paru</div>
									</div>

									<div className='flex justify-between'>
										<div className='w-fit h-full p-5 bg-primary rounded-2xl shadow-2xl hover:scale-105 cursor-pointer border border-solid border-b-8 border-black' onClick={(event) => {
											onClickStartBackSound()
											setStep("menu")
										}}>
											<div className='flex'>
												<i className='bx bx-left-arrow-alt text-2xl font-black mr-5'></i>
												<div className='text-2xl font-black'>Menu Utama</div>
											</div>
										</div>

										<div className='w-fit h-full p-5 bg-primary rounded-2xl shadow-2xl hover:scale-105 cursor-pointer border border-solid border-b-8 border-black' onClick={(event) => {
											onClickStartSelectSound()
											setStep("pendahuluan-2")
										}}>
											<div className='flex'>
												<div className='text-2xl font-black mr-5'>Selanjutnya</div>
												<i className='bx bx-right-arrow-alt text-2xl font-black'></i>
											</div>
										</div>
									</div>

								</div>
							</>
						: step == "pendahuluan-2" ?
							<>
								<div className="text-5xl font-black">
									<div className='flex items-center'>

										<i
											className='text-7xl font-black bx bx-arrow-back mr-5 cursor-pointer hover:scale-105 duration-200'
											onClick={(event) => {
												onClickStartBackSound()
												setStep("menu")
											}}
										></i>
										<div>
											<div className='text-5xl font-black'>02. Pendahuluan</div>
											<div className='text-xl font-black'>Pengenalan materi</div>
										</div>
									</div>
								</div>
								<div className='grid-rows-1 pb-20 md:pb-0 w-full grid gap-10 mt-20'>

									<div className='max-w-[808px] h-full bg-[#FFE4F2] rounded-2xl shadow-2xl border border-solid border-b-8 border-black'>
										<div className='text-2xl p-10 font-black'>Pernapasan atau bisa disebut juga dengan respirasi yang dapat didefinisikan sebagai sebuah proses pengambilan oksigen, pelepasan karbohidrat dan penggunaan energi yang ada di dalam tubuh.</div>
										<div className='text-2xl p-10 pt-0 font-black'>Urutan saluran pernapasan adalah sebagai berikut: hidung – faring – laring – trakea – bronkus – bronkiolus – alveolus.</div>
									</div>

									<div className='flex justify-between'>
										<div className='w-fit h-full p-5 bg-primary rounded-2xl shadow-2xl hover:scale-105 cursor-pointer border border-solid border-b-8 border-black' onClick={(event) => {
											onClickStartBackSound()
											setStep("pendahuluan-1")
										}}>
											<div className='flex'>
												<i className='bx bx-left-arrow-alt text-2xl font-black mr-5'></i>
												<div className='text-2xl font-black'>Sebelumnya</div>
											</div>
										</div>

										<div className='w-fit h-full p-5 bg-primary rounded-2xl shadow-2xl hover:scale-105 cursor-pointer border border-solid border-b-8 border-black' onClick={(event) => {
											onClickStartSelectSound()
											setStep("menu")
										}}>
											<div className='flex'>
												<div className='text-2xl font-black mr-5'>Menu Utama</div>
												<i className='bx bx-right-arrow-alt text-2xl font-black'></i>
											</div>
										</div>
									</div>

								</div>
							</>
						: step == "materi-1" ?
							<>
								<div className="text-5xl font-black">
									<div className='flex items-center'>

										<i
											className='text-7xl font-black bx bx-arrow-back mr-5 cursor-pointer hover:scale-105 duration-200'
											onClick={(event) => {
												onClickStartBackSound()
												setStep("menu")
											}}
										></i>
										<div>
											<div className='text-5xl font-black'>03. Materi</div>
											<div className='text-xl font-black'>Sistem pernapasan</div>
										</div>
									</div>
								</div>
								<div className='grid-rows-1 pb-20 md:pb-0 w-full grid gap-10 mt-20'>

									<div className='max-w-[808px] h-full bg-[#FFE4F2] rounded-2xl shadow-2xl border border-solid border-b-8 border-black'>
										<div className='text-2xl p-10 pb-0 font-black'>Materi Sistem Pernapasan</div>
										<div className=' p-10 '>
											<div className='text-2xl font-black bg-[url("/respiration-2.png")] bg-contain bg-no-repeat h-32'></div>
										</div>
										<div className='text-2xl p-10 pt-0 font-black'>Benafas sangatlah penting bagi kita, sebelumnya anak-anak harus memahami apa saja organ pernafasan beserta fungsinya.</div>
									</div>

									<div className='flex justify-between'>
										<div className='w-fit h-full p-5 bg-primary rounded-2xl shadow-2xl hover:scale-105 cursor-pointer border border-solid border-b-8 border-black' onClick={(event) => {
											onClickStartBackSound()
											setStep("menu")
										}}>
											<div className='flex'>
												<i className='bx bx-left-arrow-alt text-2xl font-black mr-5'></i>
												<div className='text-2xl font-black'>Menu Utama</div>
											</div>
										</div>

										<div className='w-fit h-full p-5 bg-primary rounded-2xl shadow-2xl hover:scale-105 cursor-pointer border border-solid border-b-8 border-black' onClick={(event) => {
											onClickStartSelectSound()
											setStep("materi-2")
										}}>
											<div className='flex'>
												<div className='text-2xl font-black mr-5'>Selanjutnya</div>
												<i className='bx bx-right-arrow-alt text-2xl font-black'></i>
											</div>
										</div>
									</div>

								</div>
							</>
						: step == "materi-2" ?
							<>
								<div className="text-5xl font-black">
									<div className='flex items-center'>

										<i
											className='text-7xl font-black bx bx-arrow-back mr-5 cursor-pointer hover:scale-105 duration-200'
											onClick={(event) => {
												onClickStartBackSound()
												setStep("menu")
											}}
										></i>
										<div>
											<div className='text-5xl font-black'>03. Materi</div>
											<div className='text-xl font-black'>Sistem pernapasan</div>
										</div>
									</div>
								</div>
								<div className='grid-rows-1 pb-20 md:pb-0 w-full grid gap-10 mt-20'>

									<div className='max-w-[808px] h-full bg-[#FFE4F2] rounded-2xl shadow-2xl border border-solid border-b-8 border-black'>
										<div className='text-2xl p-10 font-black'>Bagaimana cara kita bernafas ?</div>
										<div className='text-2xl pt-0 p-10 font-black'>Makhluk hidup bernapas untuk melanjutkan hidup. Begitu pula dengan manusia. Sama dengan hewan ataupun tumbuhan, manusia bernapas dengan paru-paru.</div>
										<div className='text-2xl pt-0 p-10 font-black'>Saat manusia bernapas, ada tahap-tahap yang harus dilalui. Tahapan manusia bernapas dikenal dengan istilah sistem pernapasan.</div>
									</div>

									<div className='flex justify-between'>
										<div className='w-fit h-full p-5 bg-primary rounded-2xl shadow-2xl hover:scale-105 cursor-pointer border border-solid border-b-8 border-black' onClick={(event) => {
											onClickStartBackSound()
											setStep("materi-1")
										}}>
											<div className='flex'>
												<i className='bx bx-left-arrow-alt text-2xl font-black mr-5'></i>
												<div className='text-2xl font-black'>Sebelumnya</div>
											</div>
										</div>

										<div className='w-fit h-full p-5 bg-primary rounded-2xl shadow-2xl hover:scale-105 cursor-pointer border border-solid border-b-8 border-black' onClick={(event) => {
											onClickStartSelectSound()
											setStep("materi-3")
										}}>
											<div className='flex'>
												<div className='text-2xl font-black mr-5'>Selanjutnya</div>
												<i className='bx bx-right-arrow-alt text-2xl font-black'></i>
											</div>
										</div>
									</div>

								</div>
							</>
						: step == "materi-3" ?
							<>
								<div className="text-5xl font-black">
									<div className='flex items-center'>

										<i
											className='text-7xl font-black bx bx-arrow-back mr-5 cursor-pointer hover:scale-105 duration-200'
											onClick={(event) => {
												onClickStartBackSound()
												setStep("menu")
											}}
										></i>
										<div>
											<div className='text-5xl font-black'>03. Materi</div>
											<div className='text-xl font-black'>Sistem pernapasan</div>
										</div>
									</div>
								</div>
								<div className='grid-rows-1 pb-20 md:pb-0 w-full grid gap-10 mt-20'>

									<div className='max-w-[808px] h-full bg-[#FFE4F2] rounded-2xl shadow-2xl border border-solid border-b-8 border-black'>
										<div className='text-2xl p-10 font-black'>Sistem pernapasan adalah kumpulan organ-organ yang membantu manusia dalam proses bernapas. Sistem pernapasan membantu tubuh menyerap oksigen dan membuang karbondioksida melalui hembusan napas. Berikut ini organ-organ pernapasan manusia.</div>
										<div className='text-2xl pt-0 p-10 font-black'>Organ pernafasan manusia terdiri dari hidung, faring, laring, trakea, bronkus, berokeolus, dan alveolus. Masing-masing organ pernafasan tersebut memiliki peran dan fungsi masing-masing. </div>
									</div>

									<div className='flex justify-between'>
										<div className='w-fit h-full p-5 bg-primary rounded-2xl shadow-2xl hover:scale-105 cursor-pointer border border-solid border-b-8 border-black' onClick={(event) => {
											onClickStartBackSound()
											setStep("materi-2")
										}}>
											<div className='flex'>
												<i className='bx bx-left-arrow-alt text-2xl font-black mr-5'></i>
												<div className='text-2xl font-black'>Sebelumnya</div>
											</div>
										</div>

										<div className='w-fit h-full p-5 bg-primary rounded-2xl shadow-2xl hover:scale-105 cursor-pointer border border-solid border-b-8 border-black' onClick={(event) => {
											onClickStartSelectSound()
											setStep("materi-4")
										}}>
											<div className='flex'>
												<div className='text-2xl font-black mr-5'>Selanjutnya</div>
												<i className='bx bx-right-arrow-alt text-2xl font-black'></i>
											</div>
										</div>
									</div>

								</div>
							</>
						: step == "materi-4" ?
							<>
								<div className="text-5xl font-black">
									<div className='flex items-center'>

										<i
											className='text-7xl font-black bx bx-arrow-back mr-5 cursor-pointer hover:scale-105 duration-200'
											onClick={(event) => {
												onClickStartBackSound()
												setStep("menu")
											}}
										></i>
										<div>
											<div className='text-5xl font-black'>03. Materi</div>
											<div className='text-xl font-black'>Sistem pernapasan</div>
										</div>
									</div>
								</div>
								<div className='grid-rows-1 pb-20 md:pb-0 w-full grid gap-10 mt-20'>

									<div className='max-w-[808px] h-full bg-[#FFE4F2] rounded-2xl shadow-2xl border border-solid border-b-8 border-black'>
										<div className='text-2xl p-10 font-black'>1. Hidung</div>
										<div className='text-2xl pt-0 p-10 font-black'>Hidung merupakan organ pertama yang dilalui udara dalam proses pernapasan. Awalnya, udara masuk melalui lubang hidung. Lalu, di dalam rongga hidung terdapat rambut-rambut tebal dan pendek. Rambut-rambut ini berfungsi untuk menyaring udara dan kotoran yang masuk ke lubang hidung. Setelah itu, udara melewati selaput hidung. Selaput hidung berfungsi untuk melembapkan udara yang masuk ke hidung.</div>
									</div>

									<div className='flex justify-between'>
										<div className='w-fit h-full p-5 bg-primary rounded-2xl shadow-2xl hover:scale-105 cursor-pointer border border-solid border-b-8 border-black' onClick={(event) => {
											onClickStartBackSound()
											setStep("materi-3")
										}}>
											<div className='flex'>
												<i className='bx bx-left-arrow-alt text-2xl font-black mr-5'></i>
												<div className='text-2xl font-black'>Sebelumnya</div>
											</div>
										</div>

										<div className='w-fit h-full p-5 bg-primary rounded-2xl shadow-2xl hover:scale-105 cursor-pointer border border-solid border-b-8 border-black' onClick={(event) => {
											onClickStartSelectSound()
											setStep("materi-5")
										}}>
											<div className='flex'>
												<div className='text-2xl font-black mr-5'>Selanjutnya</div>
												<i className='bx bx-right-arrow-alt text-2xl font-black'></i>
											</div>
										</div>
									</div>

								</div>
							</>
						: step == "materi-5" ?
							<>
								<div className="text-5xl font-black">
									<div className='flex items-center'>

										<i
											className='text-7xl font-black bx bx-arrow-back mr-5 cursor-pointer hover:scale-105 duration-200'
											onClick={(event) => {
												onClickStartBackSound()
												setStep("menu")
											}}
										></i>
										<div>
											<div className='text-5xl font-black'>03. Materi</div>
											<div className='text-xl font-black'>Sistem pernapasan</div>
										</div>
									</div>
								</div>
								<div className='grid-rows-1 pb-20 md:pb-0 w-full grid gap-10 mt-20'>

									<div className='max-w-[808px] h-full bg-[#FFE4F2] rounded-2xl shadow-2xl border border-solid border-b-8 border-black'>
										<div className='text-2xl p-10 font-black'>2. Faring</div>
										<div className='text-2xl pt-0 p-10 font-black'>Faring merupakan organ persimpangan antara saluran pernapasan dan saluran pencernaan. Lebih tepatnya, saluran pernapasan bagian depan dan saluran pernapasan bagian belakang.</div>
									</div>

									<div className='flex justify-between'>
										<div className='w-fit h-full p-5 bg-primary rounded-2xl shadow-2xl hover:scale-105 cursor-pointer border border-solid border-b-8 border-black' onClick={(event) => {
											onClickStartBackSound()
											setStep("materi-4")
										}}>
											<div className='flex'>
												<i className='bx bx-left-arrow-alt text-2xl font-black mr-5'></i>
												<div className='text-2xl font-black'>Sebelumnya</div>
											</div>
										</div>

										<div className='w-fit h-full p-5 bg-primary rounded-2xl shadow-2xl hover:scale-105 cursor-pointer border border-solid border-b-8 border-black' onClick={(event) => {
											onClickStartSelectSound()
											setStep("materi-6")
										}}>
											<div className='flex'>
												<div className='text-2xl font-black mr-5'>Selanjutnya</div>
												<i className='bx bx-right-arrow-alt text-2xl font-black'></i>
											</div>
										</div>
									</div>

								</div>
							</>
						: step == "materi-6" ?
							<>
								<div className="text-5xl font-black">
									<div className='flex items-center'>

										<i
											className='text-7xl font-black bx bx-arrow-back mr-5 cursor-pointer hover:scale-105 duration-200'
											onClick={(event) => {
												onClickStartBackSound()
												setStep("menu")
											}}
										></i>
										<div>
											<div className='text-5xl font-black'>03. Materi</div>
											<div className='text-xl font-black'>Sistem pernapasan</div>
										</div>
									</div>
								</div>
								<div className='grid-rows-1 pb-20 md:pb-0 w-full grid gap-10 mt-20'>

									<div className='max-w-[808px] h-full bg-[#FFE4F2] rounded-2xl shadow-2xl border border-solid border-b-8 border-black'>
										<div className='text-2xl p-10 font-black'>3. Laring</div>
										<div className='text-2xl pt-0 p-10 font-black'>Laring juga dikenal dengan istilah jakun atau tekak. Organ pernapasan ini terletak di bagian belakang faring. Laring terdiri atas Sembilan tulang rawan. Untuk bentuknya, laring memiliki bentuk kotak. Laring merupakan organ berongga yang bisa mengeluarkan suara saat udara masuk dan keluar.</div>
									</div>

									<div className='flex justify-between'>
										<div className='w-fit h-full p-5 bg-primary rounded-2xl shadow-2xl hover:scale-105 cursor-pointer border border-solid border-b-8 border-black' onClick={(event) => {
											onClickStartBackSound()
											setStep("materi-5")
										}}>
											<div className='flex'>
												<i className='bx bx-left-arrow-alt text-2xl font-black mr-5'></i>
												<div className='text-2xl font-black'>Sebelumnya</div>
											</div>
										</div>

										<div className='w-fit h-full p-5 bg-primary rounded-2xl shadow-2xl hover:scale-105 cursor-pointer border border-solid border-b-8 border-black' onClick={(event) => {
											onClickStartSelectSound()
											setStep("materi-7")
										}}>
											<div className='flex'>
												<div className='text-2xl font-black mr-5'>Selanjutnya</div>
												<i className='bx bx-right-arrow-alt text-2xl font-black'></i>
											</div>
										</div>
									</div>

								</div>
							</>
						: step == "materi-7" ?
							<>
								<div className="text-5xl font-black">
									<div className='flex items-center'>

										<i
											className='text-7xl font-black bx bx-arrow-back mr-5 cursor-pointer hover:scale-105 duration-200'
											onClick={(event) => {
												onClickStartBackSound()
												setStep("menu")
											}}
										></i>
										<div>
											<div className='text-5xl font-black'>03. Materi</div>
											<div className='text-xl font-black'>Sistem pernapasan</div>
										</div>
									</div>
								</div>
								<div className='grid-rows-1 pb-20 md:pb-0 w-full grid gap-10 mt-20'>

									<div className='max-w-[808px] h-full bg-[#FFE4F2] rounded-2xl shadow-2xl border border-solid border-b-8 border-black'>
										<div className='text-2xl p-10 font-black'>4. Trakea</div>
										<div className='text-2xl pt-0 p-10 font-black'>Trakea juga dikenal dengan istilah batang tenggorokan,.Organ pernapasan ini memiliki sebuah jaringan yang disebut silia. Jaringan silia dalam trakea biasanya akan bergerak dan mendorong benda-benda lain. Dalam trakea, jaringan silia ini memiliki fungsi mengusir kotoran, debu-debu, dan bakteri yang masuk ke dalam trakea.</div>
									</div>

									<div className='flex justify-between'>
										<div className='w-fit h-full p-5 bg-primary rounded-2xl shadow-2xl hover:scale-105 cursor-pointer border border-solid border-b-8 border-black' onClick={(event) => {
											onClickStartBackSound()
											setStep("materi-6")
										}}>
											<div className='flex'>
												<i className='bx bx-left-arrow-alt text-2xl font-black mr-5'></i>
												<div className='text-2xl font-black'>Sebelumnya</div>
											</div>
										</div>

										<div className='w-fit h-full p-5 bg-primary rounded-2xl shadow-2xl hover:scale-105 cursor-pointer border border-solid border-b-8 border-black' onClick={(event) => {
											onClickStartSelectSound()
											setStep("materi-8")
										}}>
											<div className='flex'>
												<div className='text-2xl font-black mr-5'>Selanjutnya</div>
												<i className='bx bx-right-arrow-alt text-2xl font-black'></i>
											</div>
										</div>
									</div>

								</div>
							</>
						: step == "materi-8" ?
							<>
								<div className="text-5xl font-black">
									<div className='flex items-center'>

										<i
											className='text-7xl font-black bx bx-arrow-back mr-5 cursor-pointer hover:scale-105 duration-200'
											onClick={(event) => {
												onClickStartBackSound()
												setStep("menu")
											}}
										></i>
										<div>
											<div className='text-5xl font-black'>03. Materi</div>
											<div className='text-xl font-black'>Sistem pernapasan</div>
										</div>
									</div>
								</div>
								<div className='grid-rows-1 pb-20 md:pb-0 w-full grid gap-10 mt-20'>

									<div className='max-w-[808px] h-full bg-[#FFE4F2] rounded-2xl shadow-2xl border border-solid border-b-8 border-black'>
										<div className='text-2xl p-10 font-black'>5. Bronkus dan Bronkiolus</div>
										<div className='text-2xl pt-0 p-10 font-black'>Dalam sistem pernapasan bronkus terbagi menjadi dua bagian, yaitu bronkus kiri dan bronkus kanan. Letak bronkus terdapat di percabangan trakea.</div>
										<div className='text-2xl pt-0 p-10 font-black'>Bronkiolus adalah percabangan bronkus yang ada di dalam paru-paru. Bronkiolus paru-paru sebelah kanan terdapat tiga lobus dan paru-paru kiri dua lobus.</div>
									</div>

									<div className='flex justify-between'>
										<div className='w-fit h-full p-5 bg-primary rounded-2xl shadow-2xl hover:scale-105 cursor-pointer border border-solid border-b-8 border-black' onClick={(event) => {
											onClickStartBackSound()
											setStep("materi-7")
										}}>
											<div className='flex'>
												<i className='bx bx-left-arrow-alt text-2xl font-black mr-5'></i>
												<div className='text-2xl font-black'>Sebelumnya</div>
											</div>
										</div>

										<div className='w-fit h-full p-5 bg-primary rounded-2xl shadow-2xl hover:scale-105 cursor-pointer border border-solid border-b-8 border-black' onClick={(event) => {
											onClickStartSelectSound()
											setStep("materi-9")
										}}>
											<div className='flex'>
												<div className='text-2xl font-black mr-5'>Selanjutnya</div>
												<i className='bx bx-right-arrow-alt text-2xl font-black'></i>
											</div>
										</div>
									</div>

								</div>
							</>
						: step == "materi-9" ?
							<>
								<div className="text-5xl font-black">
									<div className='flex items-center'>

										<i
											className='text-7xl font-black bx bx-arrow-back mr-5 cursor-pointer hover:scale-105 duration-200'
											onClick={(event) => {
												onClickStartBackSound()
												setStep("menu")
											}}
										></i>
										<div>
											<div className='text-5xl font-black'>03. Materi</div>
											<div className='text-xl font-black'>Sistem pernapasan</div>
										</div>
									</div>
								</div>
								<div className='grid-rows-1 pb-20 md:pb-0 w-full grid gap-10 mt-20'>

									<div className='max-w-[808px] h-full bg-[#FFE4F2] rounded-2xl shadow-2xl border border-solid border-b-8 border-black'>
										<div className='text-2xl p-10 font-black'>6. Alvelous</div>
										<div className='text-2xl pt-0 p-10 font-black'>Organ terakhir adalah alveolus. Alveolus ini memiliki bentuk seperti anggur. Alveolus terletak dalam paru-paru manusia. Lebih, tepatnya dikelilingi oleh kapiler-kapiler darah. Bisa dikatakan alveolus berada di tempat yang penting. Karena paru-paru merupakan tempat bertukarnya oksigen atau O2 dan karbon dioksida atau CO2.</div>
									</div>

									<div className='flex justify-between'>
										<div className='w-fit h-full p-5 bg-primary rounded-2xl shadow-2xl hover:scale-105 cursor-pointer border border-solid border-b-8 border-black' onClick={(event) => {
											onClickStartBackSound()
											setStep("materi-8")
										}}>
											<div className='flex'>
												<i className='bx bx-left-arrow-alt text-2xl font-black mr-5'></i>
												<div className='text-2xl font-black'>Sebelumnya</div>
											</div>
										</div>

										<div className='w-fit h-full p-5 bg-primary rounded-2xl shadow-2xl hover:scale-105 cursor-pointer border border-solid border-b-8 border-black' onClick={(event) => {
											onClickStartSelectSound()
											setStep("materi-10")
										}}>
											<div className='flex'>
												<div className='text-2xl font-black mr-5'>Selanjutnya</div>
												<i className='bx bx-right-arrow-alt text-2xl font-black'></i>
											</div>
										</div>
									</div>

								</div>
							</>
						: step == "materi-10" ?
							<>
								<div className="text-5xl font-black">
									<div className='flex items-center'>

										<i
											className='text-7xl font-black bx bx-arrow-back mr-5 cursor-pointer hover:scale-105 duration-200'
											onClick={(event) => {
												onClickStartBackSound()
												setStep("menu")
											}}
										></i>
										<div>
											<div className='text-5xl font-black'>03. Materi</div>
											<div className='text-xl font-black'>Sistem pernapasan</div>
										</div>
									</div>
								</div>
								<div className='grid-rows-1 pb-20 md:pb-0 w-full grid gap-10 mt-20'>

									<div className='max-w-[808px] h-full bg-[#FFE4F2] rounded-2xl shadow-2xl border border-solid border-b-8 border-black'>
										<div className=' p-10 grid-cols-5 grid gap-6'>
											<div className='text-2xl font-black bg-[url("/respiration-2.png")] bg-contain bg-no-repeat h-32 w-32'></div>
											<div className='text-2xl font-black bg-[url("/respiration-2.png")] bg-contain bg-no-repeat h-32 w-32'></div>
											<div className='text-2xl font-black bg-[url("/respiration-2.png")] bg-contain bg-no-repeat h-32 w-32'></div>
											<div className='text-2xl font-black bg-[url("/respiration-2.png")] bg-contain bg-no-repeat h-32 w-32'></div>
											<div className='text-2xl font-black bg-[url("/respiration-2.png")] bg-contain bg-no-repeat h-32 w-32'></div>
											<div className='text-2xl font-black bg-[url("/respiration-2.png")] bg-contain bg-no-repeat h-32 w-32'></div>
											<div className='text-2xl font-black bg-[url("/respiration-2.png")] bg-contain bg-no-repeat h-32 w-32'></div>
											<div className='text-2xl font-black bg-[url("/respiration-2.png")] bg-contain bg-no-repeat h-32 w-32'></div>
											<div className='text-2xl font-black bg-[url("/respiration-2.png")] bg-contain bg-no-repeat h-32 w-32'></div>
											<div className='text-2xl font-black bg-[url("/respiration-2.png")] bg-contain bg-no-repeat h-32 w-32'></div>
										</div>
									</div>

									<div className='flex justify-between'>
										<div className='w-fit h-full p-5 bg-primary rounded-2xl shadow-2xl hover:scale-105 cursor-pointer border border-solid border-b-8 border-black' onClick={(event) => {
											onClickStartBackSound()
											setStep("materi-9")
										}}>
											<div className='flex'>
												<i className='bx bx-left-arrow-alt text-2xl font-black mr-5'></i>
												<div className='text-2xl font-black'>Sebelumnya</div>
											</div>
										</div>

										<div className='w-fit h-full p-5 bg-primary rounded-2xl shadow-2xl hover:scale-105 cursor-pointer border border-solid border-b-8 border-black' onClick={(event) => {
											onClickStartSelectSound()
											setStep("menu")
										}}>
											<div className='flex'>
												<div className='text-2xl font-black mr-5'>Menu Utama</div>
												<i className='bx bx-right-arrow-alt text-2xl font-black'></i>
											</div>
										</div>
									</div>

								</div>
							</>
						: step == "latihan" ?
							<>
								<div className="text-5xl font-black">
									<div className='flex items-center'>

										<i
											className='text-7xl font-black bx bx-arrow-back mr-5 cursor-pointer hover:scale-105 duration-200'
											onClick={(event) => {
												onClickStartBackSound()
												setStep("menu")
											}}
										></i>
										<div>
											<div className='text-5xl font-black'>04. Latihan</div>
											<div className='text-xl font-black'>Evaluasi pemahaman</div>
										</div>
									</div>
								</div>
								<div className='grid-rows-1 pb-20 md:pb-0 w-full grid gap-10 mt-20'>

									<div className='max-w-[808px] h-full bg-[#FFE4F2] rounded-2xl shadow-2xl border border-solid border-b-8 border-black'>
										<div className='text-2xl p-10 font-black'>Halo, teman - teman</div>
										<div className='text-2xl p-10 pt-0 font-black'>Setelah kalian berjuang dalam memahami materi tadi, saat nya untuk kalian bermain games</div>
									</div>

								</div>
							</>
						: step == "tentang" ?
							<>
								<div className="text-5xl font-black">
									<div className='flex items-center'>

										<i
											className='text-7xl font-black bx bx-arrow-back mr-5 cursor-pointer hover:scale-105 duration-200'
											onClick={(event) => {
												onClickStartBackSound()
												setStep("menu")
											}}
										></i>
										<div>
											<div className='text-5xl font-black'>05. Tentang</div>
											<div className='text-xl font-black'>Informasi kreator</div>
										</div>
									</div>
								</div>
								<div className='grid-rows-1 pb-20 md:pb-0 w-full grid gap-10 mt-20'>

									<div className='max-w-[808px] h-full bg-[#FFE4F2] rounded-2xl shadow-2xl border border-solid border-b-8 border-black'>
										<div className='text-2xl p-10 font-black'>Perkenalkan nama saya ibrahim, seorang guru UPT 337 Gresik</div>
									</div>

								</div>
							</>
						: step == "referensi" ?
							<>
								<div className="text-5xl font-black">
									<div className='flex items-center'>

										<i
											className='text-7xl font-black bx bx-arrow-back mr-5 cursor-pointer hover:scale-105 duration-200'
											onClick={(event) => {
												onClickStartBackSound()
												setStep("menu")
											}}
										></i>
										<div>
											<div className='text-5xl font-black'>06. Referensi</div>
											<div className='text-xl font-black'>Rujukan pembuatan</div>
										</div>
									</div>
								</div>
								<div className='grid-rows-1 pb-20 md:pb-0 w-full grid gap-10 mt-20'>

									<div className='max-w-[808px] h-full bg-[#FFE4F2] rounded-2xl shadow-2xl border border-solid border-b-8 border-black'>
										<div className='text-2xl p-10 font-black'>Referensi yang digunakan dalam multimedia pembelajaran interaktif ini : </div>
										<div className='text-2xl p-10 pb-0 pt-0 font-black'>
											<Link href={"https://pngwing.com"} className='underline' target='_blank' rel="noopener noreferrer">
												# gambar kartun : pngwing.com
											</Link>
										</div>
										<div className='text-2xl p-10 pb-0 pt-0 font-black'>
											<Link href={"https://figma.com"} className='underline' target='_blank' rel="noopener noreferrer">
												# pattern background dan editing tools : figma.com
											</Link>
										</div>
										<div className='text-2xl p-10 pb-0 pt-0 font-black'>
											<Link href={"#"} className='underline'>
												# materi : buku sekolah
											</Link>
										</div>
										<div className='text-2xl p-10 pb-0 pt-0 font-black'>
											<Link href={"https://www.youtube.com/"} className='underline' target='_blank' rel="noopener noreferrer">
												# background musik : youtube.com
											</Link>
										</div>
										<div className='text-2xl p-10 pt-0 font-black'>
											<Link href={"https://www.education.com/"} className='underline' target='_blank' rel="noopener noreferrer">
												# efek musik : education.com
											</Link>
										</div>
									</div>

								</div>
							</>
						:
							<></>
						}
					</div>
				</div>

				{/* footer full screen */}
				<div className='fixed right-5 bottom-5 space-y-5'>
					<div
						className="bg-primary px-3 py-2 rounded-2xl cursor-pointer hover:scale-105 duration-200 border border-solid border-b-8 border-black"
						onClick={(event) => {
							isMainAudioPlaying ? onClickStopMainSound() : onClickStartMainSound()
							onClickStartSelectSound()
						}}
					>
						{isMainAudioPlaying
							?
							<i className='bx bx-music text-xl text-white font-black'></i>
							:
							<div className='text-sm py-1.5 text-white'>off</div>
						}
					</div>
					<div
						className="bg-primary px-3 py-2 rounded-2xl cursor-pointer hover:scale-105 duration-200 border border-solid border-b-8 border-black"
						onClick={(event) => {
							onClickStartSelectSound()
							fullScreenHandler.exit()
						}}
					>
						<i className='bx bx-fullscreen text-xl text-white font-black'></i>
					</div>
				</div>

			</FullScreen>

			{/* special footer normal screen */}
			<div className='fixed right-5 bottom-5'>
				<div
					className="bg-primary px-3 py-2 rounded-2xl cursor-pointer hover:scale-105 duration-200 border border-solid border-b-8 border-black"
					onClick={(event) => {
						onClickStartSelectSound()
						fullScreenHandler.enter()
					}}
				>
					<i className='bx bx-fullscreen text-xl text-white font-black'></i>
				</div>
			</div>

		</>
	)
}
