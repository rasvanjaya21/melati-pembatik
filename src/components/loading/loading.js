function Loading() {

    return (

        <div className="flex h-screen text-center">
            <div className="m-auto space-y-4">
                <i className='text-7xl bx bx-loader-alt animate-spin font-extrabold'></i>
                <div className="text-6xl font-extrabold">Loading</div>
            </div>
        </div>

    )
}

export { Loading }