import  { useEffect, useState } from 'react'

function Github() {
     const [data, setData] = useState([])
    useEffect(() => {
        fetch('https://api.github.com/users/hiteshchoudhary')
            .then(response => response.json())
            .then(data => {
                setData(data)
            })
    }, [])
    return (
        <div className='text-center m-4 bg-gray-500 text-white p-4 text-3xl'>
            <div>Github followers: {data.followers}</div>
            <img  className='h-[200px] w-[200px] object-cover mt-3' src={data.avatar_url} alt="" />

        </div>
    )
}

export default Github