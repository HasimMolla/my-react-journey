// import { useEffect, useState } from 'react'
import { useLoaderData } from 'react-router-dom'

function Github() {
    const data = useLoaderData()
    //  const [data, setData] = useState([])
    // useEffect(() => {
    //     fetch('https://api.github.com/users/HasimMolla')
    //         .then(response => response.json())
    //         .then(data => {
    //             setData(data)
    //         })
    // }, [])
    
    return (
        <div className='text-center m-4 bg-gray-500 text-white p-4 text-3xl'>
            <div>Github followers: {data.followers}</div>
            <img  className='h-[200px] w-[200px] object-cover mt-3' src={data.avatar_url} alt="Git Picture" />

        </div>
    )
}

export default Github

export const githubInfoLoader = async () => {
    const response = await fetch('https://api.github.com/users/mizanur2001')
    return response.json()
}