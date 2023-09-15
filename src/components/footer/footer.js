function Footer({ onClick }) {
    return(
        <div className="bg-primary px-3 py-2 rounded-2xl cursor-pointer hover:scale-105 duration-200" onClick={onClick}>
            <i className='bx bx-fullscreen text-xl text-white font-black'></i>
        </div>
    )
}

export { Footer }