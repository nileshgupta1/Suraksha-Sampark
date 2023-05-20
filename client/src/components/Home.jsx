import React from 'react'
import Navbar from './Navbar'
import Sidebar from './Sidebar'
import Body from './Body'

function Home() {
    return (
        <div className='bg-[#faf6fc]'>
            <div className=''><Navbar /></div>
            <div className='flex flex-row justify-around w-full h-screen'>
                <Sidebar />
                <Body />
            </div>
        </div>
    )
}

export default Home