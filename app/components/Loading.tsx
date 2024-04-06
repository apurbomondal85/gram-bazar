'use client'
import { Triangle } from 'react-loader-spinner'

const Loading = () => {
    return (
        <Triangle
        visible={true}
        height="80"
        width="80"
        color="#4fa94d"
        ariaLabel="triangle-loading"
    />
    )
}

export default Loading