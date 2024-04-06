'use client'

import Loading from "../components/Loading"

const loading = () => {
    return (
        <div className='absolute top-0 left-0 w-screen h-screen bg-white z-[999] flex justify-center items-center'>
            <Loading />
        </div>
    )
}

export default loading