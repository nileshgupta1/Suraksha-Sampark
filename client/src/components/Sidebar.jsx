import React from 'react'

function Sidebar() {
    return (
        <div className="border-2 text-xl bg-[#f3eafc] w-[400px] flex flex-col justify-around border-[#d5aefc] rounded-md h-screen ">
            <div><img alt='userimage'></img></div>
            <div className=''>UserName</div>
            <div>UserId</div>
        </div>
    )
}

export default Sidebar