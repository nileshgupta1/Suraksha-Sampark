import React from 'react'

function Navbar() {
    return (
        <nav className=" border-2 bg-[#d6b4f6] border-[#d5aefc]  ">
            <div className='flex flex-row justify-between text-3xl'> Bank of America
                <button className="border bg-[#b46df6] rounded-md text-white hover:border-white shadow-md ml-12 text-base">
                    Log Out
                </button>
            </div>

        </nav>


    )
}

export default Navbar